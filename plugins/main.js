const {
  Hamza,
  command
} = require("../lib/command");
const config = require("../config.cjs");
const os = require('os');
const {
  runtime,
  fetchJson
} = require("../lib/functions");
Hamza({
  'pattern': "alive",
  'desc': "Check bot online or no.",
  'react': "🛠️",
  'category': "main",
  'filename': __filename
}, async (_0x393190, _0x341326, _0x53a2b5, {
  from: _0xabd50b,
  mnu: _0xd96010,
  quoted: _0xe2b729,
  body: _0x4f2487,
  isCmd: _0x4b7288,
  command: _0x35a507,
  args: _0x2c68b2,
  q: _0x563bbc,
  isGroup: _0x511755,
  sender: _0x9f3cff,
  senderNumber: _0x28d857,
  botNumber2: _0x52b066,
  botNumber: _0x177582,
  pushname: _0x9e036,
  isMe: _0x100a04,
  isOwner: _0xd93c8f,
  groupMetadata: _0x49a664,
  groupName: _0x3cb923,
  participants: _0x475f5a,
  groupAdmins: _0x4c698e,
  isBotAdmins: _0x50e324,
  isAdmins: _0x4d92ec,
  reply: _0x11c762
}) => {
  try {
    let _0x564a4b = await fetchJson('https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/xByteLogo.json');
    let _0x2c895a = "\n*B Y T E - M D* \n\n┏━━━━❮📝 𝗦𝘁𝗮𝘁𝘂𝘀 𝗗𝗲𝘁𝗮𝗶𝗹𝘀 📝❯━━━\n┃🗣️ 𝚄𝚜𝚎𝚛 : " + _0x9e036 + "\n┃🤖 𝙱𝚘𝚝 : BYTE-MD\n┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : " + config.PREFIX + "\n┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : " + require("../package.json").version + "\n┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : " + os.platform() + "\n┃📟 𝙷𝚘𝚜𝚝 : " + os.hostname() + "\n┃⚙️ 𝙼𝚘𝚍𝚎 : " + config.MODE + "\n┃💻 𝚄𝚙𝚝𝚒𝚖𝚎 : " + runtime(process.uptime()) + "\n┃✨𝙼𝚎𝚖 : " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\n┗━━━━━━━━━━━━━━━\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : https://github.com/HyHamza/BYTE-MD\n";
    await _0x393190.sendMessage(_0xabd50b, {
      'audio': {
        'url': ''
      },
      'mimetype': "audio/mp4",
      'ptt': true
    }, {
      'quoted': _0x341326
    });
    await _0x393190.sendMessage(_0xabd50b, {
      'image': {
        'url': _0x564a4b.alive
      },
      'caption': _0x2c895a,
      'contextInfo': {
        'mentionedJid': ["923072380380@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363252060326102@newsletter",
          'newsletterName': "TalkDrove",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "TalkDrove",
          'body': 'TalkDrove',
          'mediaType': 0x1,
          'sourceUrl': 'https://talkdrove.com',
          'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png',
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    });
  } catch (_0x3c496a) {
    console.log(_0x3c496a);
    _0x11c762('' + _0x3c496a);
  }
});
Hamza({
  'pattern': "system",
  'alias': ['status', 'botinfo'],
  'react': "🏷️",
  'desc': "To Check uptime , ram and more.",
  'category': 'main',
  'filename': __filename
}, async (_0x45470f, _0x3432a9, _0x6c78e9, {
  from: _0x297382,
  quoted: _0x4819b7,
  body: _0x2cb06c,
  isCmd: _0x244f69,
  command: _0x222c05,
  args: _0x178a13,
  q: _0x27a535,
  isGroup: _0x5763fa,
  sender: _0x1fcf45,
  senderNumber: _0x52e0c9,
  botNumber2: _0x3f39cd,
  botNumber: _0x4d8c6b,
  pushname: _0x43d564,
  isMe: _0x44f3aa,
  isOwner: _0x18450c,
  groupMetadata: _0x380a14,
  groupName: _0x25bd1f,
  participants: _0x34eb25,
  groupAdmins: _0x59adb7,
  isBotAdmins: _0x5e4cc3,
  isAdmins: _0x46eff8,
  reply: _0x39c565
}) => {
  try {
    let _0x141560 = "SYSTEM STATUS\n\nUPTIME: " + runtime(process.uptime()) + "\nRAM USAGE: " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\nHOST NAME: " + os.hostname() + "\n  \n> *💻 GitHub:* https://github.com/HyHamza/BYTE-MD \n";
    await _0x45470f.sendMessage(_0x297382, {
      'image': {
        'url': 'https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png'
      },
      'caption': _0x141560,
      'contextInfo': {
        'mentionedJid': ["923072380380@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363252060326102@newsletter",
          'newsletterName': "TalkDrove",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "TalkDrove",
          'body': 'TalkDrove',
          'mediaType': 0x1,
          'sourceUrl': "https://talkdrove.com",
          'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    });
  } catch (_0x5255e4) {
    console.log(_0x5255e4);
    _0x39c565('' + _0x5255e4);
  }
});
Hamza({
  'pattern': "runtime",
  'alias': ["uptime"],
  'react': '⌛',
  'desc': "To Check uptime",
  'category': "main",
  'filename': __filename
}, async (_0xba6095, _0x53abe9, _0x1f7cc0, {
  from: _0x421616,
  quoted: _0xe0548f,
  body: _0x561d53,
  isCmd: _0x1f097c,
  command: _0x45c1e8,
  args: _0x4bb2da,
  q: _0x412dda,
  isGroup: _0xe57ab7,
  sender: _0x448a57,
  senderNumber: _0x4382fb,
  botNumber2: _0x756d5f,
  botNumber: _0x7c88d2,
  pushname: _0xe8929e,
  isMe: _0x49dd0f,
  isOwner: _0x4c568b,
  groupMetadata: _0x484694,
  groupName: _0xf394c8,
  participants: _0xe5fbe0,
  groupAdmins: _0x48b333,
  isBotAdmins: _0x71376f,
  isAdmins: _0x4703f8,
  reply: _0x4c4061
}) => {
  try {
    const _0x5e37d0 = {
      'key': {
        'participants': '0@s.whatsapp.net',
        'remoteJid': "status@broadcast",
        'fromMe': true,
        'id': 'TalkDrove'
      },
      'message': {
        'contactMessage': {
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Sy\nitem1.TEL;waid=" + _0x1f7cc0.sender.split('@')[0x0] + ':' + _0x1f7cc0.sender.split('@')[0x0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
        }
      },
      'participant': "0@s.whatsapp.net"
    };
    await _0xba6095.sendMessage(_0x421616, {
      'text': "*RUNTIME*:  " + runtime(process.uptime()) + "\n  \n> *💻 GitHub:* https://github.com/HyHamza/BYTE-MD "
    }, {
      'quoted': _0x5e37d0
    });
  } catch (_0x365ec5) {
    console.log(_0x365ec5);
    _0x4c4061('' + _0x365ec5);
  }
});
Hamza({
  'pattern': "ping",
  'desc': "Check bot's response time.",
  'category': "main",
  'react': '❤️‍🩹',
  'filename': __filename
}, async (_0x2f9dc3, _0x2763e1, _0x4853ec, {
  from: _0x2cb7f9,
  quoted: _0xa03e0f,
  body: _0x5f483e,
  isCmd: _0xd52857,
  command: _0x433335,
  args: _0x454999,
  q: _0x34af3e,
  isGroup: _0x3b73e5,
  sender: _0x58f59c,
  senderNumber: _0x1c1a08,
  botNumber2: _0xa1b837,
  botNumber: _0x4e1042,
  pushname: _0x356964,
  isMe: _0x5d6bd7,
  isOwner: _0x5e6361,
  groupMetadata: _0xdebc73,
  groupName: _0x39f808,
  participants: _0x2b8e0c,
  groupAdmins: _0x31d28f,
  isBotAdmins: _0x200149,
  isAdmins: _0x2ed6a1,
  reply: _0x1cbddc
}) => {
  try {
    const _0x1f6b32 = {
      'key': {
        'participants': "0@s.whatsapp.net",
        'remoteJid': "status@broadcast",
        'fromMe': true,
        'id': 'TalkDrove'
      },
      'message': {
        'contactMessage': {
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Sy\nitem1.TEL;waid=" + _0x4853ec.sender.split('@')[0x0] + ':' + _0x4853ec.sender.split('@')[0x0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
        }
      },
      'participant': "0@s.whatsapp.net"
    };
    const _0x27b396 = Date.now();
    const _0x2b305a = Date.now();
    const _0xb059c7 = _0x2b305a - _0x27b396;
    await _0x2f9dc3.sendMessage(_0x2cb7f9, {
      'text': "*BYTE ping is:* *" + _0xb059c7 + 'ms*'
    }, {
      'quoted': _0x1f6b32
    });
  } catch (_0x39f156) {
    console.log(_0x39f156);
    _0x1cbddc('' + _0x39f156);
  }
});
Hamza({
  'pattern': 'script',
  'alias': ['sc', "repo", 'info'],
  'desc': "bot repo",
  'react': '🤖',
  'category': "main",
  'filename': __filename
}, async (_0x453dc6, _0x228e57, _0x18b959, {
  from: _0x5dc018,
  quoted: _0x3bc7e8,
  body: _0x4294ba,
  isCmd: _0x354dcc,
  command: _0x5587d7,
  args: _0x18a05f,
  q: _0x5d0ced,
  isGroup: _0x194a5c,
  sender: _0x123888,
  senderNumber: _0xf02113,
  botNumber2: _0x305897,
  botNumber: _0x4574d6,
  pushname: _0x4e56d8,
  isMe: _0x593112,
  isOwner: _0x4eaa02,
  groupMetadata: _0x2dbe46,
  groupName: _0x4d08fc,
  participants: _0x4828de,
  groupAdmins: _0x48e00b,
  isBotAdmins: _0x3cea86,
  isAdmins: _0x4652e4,
  reply: _0x14cf7d
}) => {
  try {
    const _0x736f44 = {
      'key': {
        'participants': '0@s.whatsapp.net',
        'remoteJid': "status@broadcast",
        'fromMe': true,
        'id': 'TalkDrove'
      },
      'message': {
        'contactMessage': {
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Sy\nitem1.TEL;waid=" + _0x18b959.sender.split('@')[0x0] + ':' + _0x18b959.sender.split('@')[0x0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
        }
      },
      'participant': "0@s.whatsapp.net"
    };
    await _0x453dc6.sendMessage(_0x5dc018, {
      'text': 'https://github.com/HyHamza/BYTE-MD'
    }, {
      'quoted': _0x736f44
    });
  } catch (_0x394db4) {
    console.log(_0x394db4);
    _0x14cf7d('' + _0x394db4);
  }
});
Hamza({
  'pattern': 'owner',
  'react': "👨‍💻",
  'alias': ['dev', "createor", "developer"],
  'desc': "Get bot's command list.",
  'category': 'main',
  'use': '.menu',
  'filename': __filename
}, async (_0x1c6a16, _0x19111b, _0x53b869, {
  from: _0x4f4727,
  quoted: _0x584208,
  body: _0x33296b,
  isCmd: _0x4b07ae,
  command: _0x45c74e,
  args: _0x1cc14a,
  q: _0x587b28,
  isGroup: _0x37d483,
  sender: _0x11d7a3,
  senderNumber: _0x2824b6,
  botNumber2: _0x12d1da,
  botNumber: _0x3667ac,
  pushname: _0x270065,
  isMe: _0x1723d5,
  isOwner: _0x4b3be1,
  groupMetadata: _0x45e54c,
  groupName: _0x5ddb52,
  participants: _0xccf959,
  groupAdmins: _0x86457f,
  isBotAdmins: _0x58e3f9,
  isAdmins: _0x69e4a3,
  reply: _0x33a97f
}) => {
  try {
    let _0x3edad8 = "\n*Hey* " + _0x270065 + ",\n\n*I'm BYTE, a WhatsApp bot*\n*My repo -:* https://github.com/HyHamza/BYTE-MD\n\n> MY DEVELOPER INFO:\n\n*Name -: Hamza*\n*Age -: Unknown*\n*Location -: Unkown*\n*Website* -: https://talkdrove.com\n*YouTube* -: https://www.youtube.com/@talkdrove\n\n> POWERED BY TALKDROVE\n";
    await _0x1c6a16.sendMessage(_0x4f4727, {
      'contacts': {
        'displayName': "TalkDrove",
        'contacts': [{
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:Hamza\nORG:TalkDrove;\nTEL;type=CELL;type=VOICE;waid=923072380380:+923072380380\nEND:VCARD"
        }]
      }
    });
    await _0x1c6a16.sendMessage(_0x4f4727, {
      'image': {
        'url': "https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/.owner.jpg"
      },
      'caption': _0x3edad8,
      'contextInfo': {
        'mentionedJid': [''],
        'groupMentions': [],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363252060326102@newsletter",
          'newsletterName': "TalkDrove",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "TalkDrove",
          'body': "TalkDrove",
          'mediaType': 0x1,
          'sourceUrl': "https://talkdrove.com",
          'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x19111b
    });
  } catch (_0x2ffcc5) {
    console.log(_0x2ffcc5);
    _0x33a97f('' + _0x2ffcc5);
  }
});