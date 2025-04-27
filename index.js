const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  getContentType,
  downloadContentFromMessage,
  fetchLatestBaileysVersion,
  Browsers,
  jidNormalizedUser,
  makeInMemoryStore,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  proto
} = require('@whiskeysockets/baileys');
const path = require("path");
const fs = require('fs');
const P = require('pino');
const FileType = require('file-type');
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const config = require("./config.cjs");
const axios = require('axios');

// Constants
const ownerNumber = config.OWNER_NUMBER;
const CREDS_PATH = path.join('./sessions', "creds.json");

// Helper functions
const getPrefix = () => config.PREFIX;
const getWelcome = () => config.WELCOME;

// Session management
async function setupSession() {
  if (!fs.existsSync('./sessions')) {
    fs.mkdirSync('./sessions', { recursive: true });
  }
  
  if (fs.existsSync(CREDS_PATH)) {
    console.log("Session already exists!");
    return;
  }

  const sessionId = config.SESSION_ID;
  if (!sessionId) {
    console.log("Please add your session to SESSION_ID in the config file or env variable!");
    return;
  }

  try {
    const sessionData = sessionId.split("SARKAR;;;")[1];
    if (!sessionData) {
      throw new Error("Invalid SESSION_ID format! It should contain \"Byte;;;\" followed by Base64 encoded data.");
    }

    const decodedSession = Buffer.from(sessionData, "base64").toString("utf-8");
    try {
      JSON.parse(decodedSession);
    } catch (error) {
      throw new Error("Decoded session data is not valid JSON!");
    }

    fs.writeFileSync(CREDS_PATH, decodedSession, "utf-8");
    console.log("Session saved!");
  } catch (error) {
    console.error("Failed to process SESSION_ID:", error.message);
  }
}

// WhatsApp connection
async function connectToWhatsApp() {
  console.log("Checking session...");
  const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, "sessions"));
  
  const { version } = await fetchLatestBaileysVersion();
  
  const sock = makeWASocket({
    logger: P({ level: 'silent' }),
    printQRInTerminal: false,
    browser: Browsers.macOS('Firefox'),
    syncFullHistory: true,
    auth: state,
    version: version
  });

  // Event handlers
  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;
    
    if (connection === "close") {
      if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
        connectToWhatsApp();
      }
    } else if (connection === "open") {
      console.log("Installing plugins... ");
      
      // Load plugins
      fs.readdirSync('./plugins/').forEach(file => {
        if (path.extname(file).toLowerCase() === ".js") {
          require("./plugins/" + file);
        }
      });
      
      console.log("Plugins installed successfully");
      console.log("BYTE connected to WhatsApp");
      
      const { commands } = require("./lib/command");
      let connectionMessage = `*X-BYTE Connected* \n   PLUGINS : ${commands.length}\n   PREFIX: ${config.PREFIX}\n   OWNER: ${config.OWNER_NUMBER}`;
      
      await sock.sendMessage(sock.user.id, {
        image: { url: "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg" },
        caption: connectionMessage,
        contextInfo: {
          mentionedJid: ["923072380380@s.whatsapp.net"],
          externalAdReply: {
            title: "Deploy X-BYTE on Host.TalkDrove",
            body: "Click here!",
            mediaType: 1,
            sourceUrl: "https://host.talkdrove.com/dashboard/share-bot/",
            thumbnailUrl: 'https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg'
          }
        }
      });
    }
  });

  // Group participants update handler
  sock.ev.on("group-participants.update", async (update) => {
    const { id, participants, action } = update;
    
    try {
      const groupMetadata = await sock.groupMetadata(id);
      const groupSubject = groupMetadata.subject;
      
      for (const participant of participants) {
        try {
          let message = '';
          let profilePic = "https://cdn.discordapp.com/embed/avatars/0.png";
          
          try {
            profilePic = await sock.profilePictureUrl(participant, "image");
          } catch (error) {
            console.warn("Error fetching profile picture:", error);
          }
          
          const welcomeCardUrl = `https://api.popcat.xyz/welcomecard?background=https://cdn.popcat.xyz/welcome-bg.png&text1=${encodeURIComponent(groupSubject)}&text2=${encodeURIComponent('@' + participant.split('@')[0])}&text3=Thank+You+For+Joining+Us❤️&avatar=${encodeURIComponent(profilePic)}`;
          
          if (action === 'add') {
            if (config.WELCOME) {
              message = `*Hey @${participant.split('@')[0]}!* 👋\n\nWELCOME TO *${groupSubject}*\n\n> *BYTE WhatsApp Bot* is up and running!\n   Runtime: ${runtime(process.uptime())}\n\n*Here's what I can do:* \n*Download Songs & Videos* \n*Fetch Latest News* \n*Entertain with Fun Commands* \n*Manage Groups* \n\n*GitHub:* github.com/HyHamza/BYTE\n*POWERED BY TALKDROVE*`;
            }
          } else if (action === "remove") {
            if (config.WELCOME) {
              message = `*Goodbye @${participant.split('@')[0]}!*\n\nGOOD BYE FROM *${groupSubject}*\n\n> We're sad to see you leave *${groupSubject}*. \n> We hope you had a great time with us.\n\n*If you ever decide to come back, you'll always be welcome!* \n\n*GitHub:* github.com/HyHamza/BYTE\n*POWERED BY TALKDROVE*`;
            }
          }
          
          if (message) {
            await sock.sendMessage(id, {
              image: { url: welcomeCardUrl },
              caption: message,
              contextInfo: {
                mentionedJid: [participant],
                externalAdReply: {
                  title: "TalkDrove",
                  body: "Powered by TalkDrove",
                  mediaType: 1,
                  sourceUrl: "https://talkdrove.com",
                  thumbnailUrl: profilePic
                }
              }
            });
          }
        } catch (error) {
          console.error("Error processing participant update:", error);
        }
      }
    } catch (error) {
      console.error("Error fetching group metadata:", error);
    }
  });

  // Message handler
  sock.ev.on("messages.upsert", async ({ messages }) => {
    const message = messages[0];
    if (!message.message) return;

    // Process message
    const messageType = getContentType(message.message);
    const text = getMessageText(message, messageType);
    const isCommand = text.startsWith(config.PREFIX);
    const command = isCommand ? text.slice(config.PREFIX.length).trim().split(" ").shift().toLowerCase() : '';
    
    // Handle commands
    if (isCommand) {
      const { commands } = require('./lib/command');
      const cmd = commands.find(c => c.pattern === command) || 
                 commands.find(c => c.alias && c.alias.includes(command));
      
      if (cmd) {
        try {
          await cmd.function(sock, message, {
            from: message.key.remoteJid,
            prefix: config.PREFIX,
            command: command,
            isGroup: message.key.remoteJid.endsWith('@g.us')
          });
        } catch (error) {
          console.error("[PLUGIN ERROR]", error);
        }
      }
    }
  });

  // Clean up store file on restart
  const storeFile = path.join(__dirname, "store.json");
  if (fs.existsSync(storeFile)) {
    fs.unlinkSync(storeFile);
    console.log("Store file deleted on restart.");
  }
}

// Helper function to get message text
function getMessageText(message, messageType) {
  if (messageType === 'conversation') {
    return message.message.conversation;
  } else if (messageType === 'extendedTextMessage') {
    return message.message.extendedTextMessage.text || '';
  } else if (messageType === "imageMessage") {
    return message.message.imageMessage.caption || '';
  } else if (messageType === "videoMessage") {
    return message.message.videoMessage.caption || '';
  }
  return '';
}

// Helper function for runtime formatting
function runtime(seconds) {
  seconds = Math.floor(seconds);
  const days = Math.floor(seconds / (3600 * 24));
  seconds %= 3600 * 24;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;
  
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Initialize
setupSession();

// Express server
app.get('/', (req, res) => {
  res.send('Hi');
});

app.listen(port, () => console.log(`Server running on port: ${port}`));

// Connect to WhatsApp after delay
setTimeout(() => {
  connectToWhatsApp();
}, 4000);
