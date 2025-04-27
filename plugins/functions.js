const fs = require('fs');
const path = require("path");
const axios = require('axios');
const {
  Hamza,
  commands
} = require("../lib/command");
const config = require("../config.cjs");
const {
  fetchJson
} = require('../lib/functions');
Hamza({
  'on': "body"
}, async (_0x47769, _0x5178da, _0x3361c7, {
  from: _0x125182,
  body: _0x199411,
  isOwner: _0x512b81
}) => {
  const _0x75c74b = path.join(__dirname, "../lib/data/autovoice.json");
  const _0x346d6a = JSON.parse(fs.readFileSync(_0x75c74b, "utf8"));
  for (const _0xb3198a in _0x346d6a) {
    if (_0x199411.toLowerCase() === _0xb3198a.toLowerCase()) {
      if (config.AUTO_VOICE === true) {
        await _0x47769.sendPresenceUpdate("recording", _0x125182);
        await _0x47769.sendMessage(_0x125182, {
          'audio': {
            'url': _0x346d6a[_0xb3198a]
          },
          'mimetype': "audio/aac",
          'ptt': true
        }, {
          'quoted': _0x5178da
        });
      }
    }
  }
});
Hamza({
  'on': 'body'
}, async (_0x4394af, _0x3cb256, _0x146b49, {
  from: _0x157b98,
  body: _0xff67a9,
  isOwner: _0x1bf995
}) => {
  const _0x200984 = path.join(__dirname, '../lib/data/autosticker.json');
  const _0x179df3 = JSON.parse(fs.readFileSync(_0x200984, "utf8"));
  for (const _0x4946aa in _0x179df3) {
    if (_0xff67a9.toLowerCase() === _0x4946aa.toLowerCase()) {
      if (config.AUTO_STICKER === true) {
        await _0x4394af.sendMessage(_0x157b98, {
          'sticker': {
            'url': _0x179df3[_0x4946aa]
          },
          'package': 'yourName'
        }, {
          'quoted': _0x3cb256
        });
      }
    }
  }
});
Hamza({
  'on': "body"
}, async (_0x20e595, _0x21fa89, _0x5836ae, {
  from: _0x599a0a,
  body: _0x46bd93,
  isOwner: _0x168a2f
}) => {
  const _0x525d48 = path.join(__dirname, '../lib/data/autoreply.json');
  const _0x54c103 = JSON.parse(fs.readFileSync(_0x525d48, "utf8"));
  for (const _0x1b1b39 in _0x54c103) {
    if (_0x46bd93.toLowerCase() === _0x1b1b39.toLowerCase()) {
      if (config.AUTO_REPLY === true) {
        await _0x5836ae.reply(_0x54c103[_0x1b1b39]);
      }
    }
  }
});
Hamza({
  'on': "body"
}, async (_0x1d953b, _0x532309, _0x46c763, {
  from: _0x359c84,
  quoted: _0x406435,
  body: _0x32160d,
  isCmd: _0x49785f,
  command: _0x2a2ab7,
  args: _0x42f8bc,
  q: _0x216811,
  isGroup: _0x441d3d,
  sender: _0x167102,
  senderNumber: _0x1bd771,
  botNumber2: _0x33b79a,
  botNumber: _0x326d19,
  pushname: _0x45cdcd,
  isMe: _0x39004a,
  isOwner: _0x560653,
  groupMetadata: _0x227d2c,
  groupName: _0x306c9d,
  participants: _0x5ad865,
  groupAdmins: _0x5cebe5,
  isBotAdmins: _0x24c575,
  isAdmins: _0x2f5c40,
  reply: _0x49e541
}) => {
  if (config.AUTO_REACT === true && !_0x49785f) {
    const _0x59a744 = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋'];
    const _0x251544 = _0x59a744[Math.floor(Math.random() * _0x59a744.length)];
    _0x1d953b.sendMessage(_0x359c84, {
      'react': {
        'text': _0x251544,
        'key': _0x532309.key
      }
    });
  }
});
Hamza({
  'on': "body"
}, async (_0x126e55, _0xe65d7e, _0x2f1475, {
  from: _0x78c053,
  quoted: _0x2c1f4c,
  body: _0x43595e,
  isCmd: _0x42bb6d,
  command: _0x155617,
  args: _0x3ac77d,
  q: _0x37b2fc,
  isGroup: _0x123c7f,
  sender: _0x52fdb9,
  senderNumber: _0x46c0c5,
  botNumber2: _0x42ee80,
  botNumber: _0x3d5c8b,
  pushname: _0x4fe5e5,
  isMe: _0x470309,
  isOwner: _0x2d38dc,
  groupMetadata: _0x491e9b,
  groupName: _0x2177a9,
  participants: _0x478d39,
  groupAdmins: _0x13b959,
  isBotAdmins: _0x49c54,
  isAdmins: _0x32401f,
  reply: _0x470bbf
}) => {
  if (config.OWNER_REACT === true && _0x2d38dc) {
    await _0x126e55.sendMessage(_0x78c053, {
      'react': {
        'text': config.EMOJI,
        'key': _0xe65d7e.key
      }
    });
  }
});
Hamza({
  'on': "body"
}, async (_0x3c9d58, _0x3e3e9f, _0x25d161, {
  from: _0x1a6020,
  quoted: _0xffd513,
  body: _0xc07aae,
  isCmd: _0x42b1fe,
  command: _0x29d815,
  args: _0x939f5b,
  q: _0x53608b,
  isGroup: _0x5bd606,
  sender: _0x52ffac,
  senderNumber: _0x4442bc,
  botNumber2: _0x4edf53,
  botNumber: _0x11f12f,
  pushname: _0x1cd901,
  isMe: _0x314238,
  isOwner: _0x21d3a2,
  groupMetadata: _0x37656f,
  groupName: _0x3cb2e8,
  participants: _0x32d1c7,
  groupAdmins: _0x1e4fb3,
  isBotAdmins: _0x5aacad,
  isAdmins: _0x52fe5c,
  reply: _0x2ae4d0
}) => {
  if (config.AUTO_TYPING === true) {
    _0x3c9d58.sendPresenceUpdate("composing", _0x1a6020);
    setTimeout(() => _0x3c9d58.sendPresenceUpdate('paused', _0x1a6020), 0xbb8);
  }
});
Hamza({
  'on': "body"
}, async (_0x59f91d, _0x492e92, _0x2ad685, {
  from: _0x22c7cf,
  quoted: _0x518478,
  body: _0x2554bf,
  isCmd: _0x12c737,
  command: _0x6e255a,
  args: _0x49972c,
  q: _0x4ecb47,
  isGroup: _0x128791,
  sender: _0x473bd8,
  senderNumber: _0x468a2f,
  botNumber2: _0x3e42e6,
  botNumber: _0x3d98de,
  pushname: _0x3be658,
  isMe: _0x375cf6,
  isOwner: _0x3c8381,
  groupMetadata: _0x4f6324,
  groupName: _0x159b51,
  participants: _0x2a98f2,
  groupAdmins: _0x172fc1,
  isBotAdmins: _0x5e582f,
  isAdmins: _0x208884,
  reply: _0x42cb7e
}) => {
  if (config.AUTO_RECORDING === true) {
    _0x59f91d.sendPresenceUpdate('recording', _0x22c7cf);
    setTimeout(() => _0x59f91d.sendPresenceUpdate('paused', _0x22c7cf), 0xbb8);
  }
});
Hamza({
  'on': 'body'
}, async (_0x6b77da, _0xbc74b9, _0x1c12e, {
  from: _0x515eeb,
  quoted: _0x3c1dfe,
  body: _0x3292bb,
  isCmd: _0x4239df,
  command: _0x35a8c9,
  args: _0x1ea282,
  q: _0x45b31d,
  isGroup: _0x15fe14,
  sender: _0x575404,
  senderNumber: _0x15da95,
  botNumber2: _0x560941,
  botNumber: _0xab6651,
  pushname: _0x145451,
  isMe: _0x9cfc,
  isOwner: _0xb76d94,
  groupMetadata: _0x32f233,
  groupName: _0xb42638,
  participants: _0x583ef9,
  groupAdmins: _0x4998c4,
  isBotAdmins: _0x46ca63,
  isAdmins: _0x1b8c7f,
  reply: _0x4ae5f0
}) => {
  let _0x4b3aab = await axios({
    'method': "POST",
    'url': "https://api.manaxu.my.id/api/ai",
    'headers': {
      'x-api-key': "key-manaxu-free"
    },
    'data': {
      'logic': "Your name is BYTE",
      'messages': [{
        'content': "Hello Hamza",
        'role': "assistant"
      }, {
        'content': _0x3292bb,
        'role': "user"
      }]
    }
  }).then(_0x41290c => {
    return _0x41290c.data;
  })["catch"](_0x3dd1e2 => {
    return _0x3dd1e2;
  });
  if (!_0x4239df && config.AI_MODE === true) {
    if (_0xbc74b9.key.fromMe) {
      return;
    }
    await _0x6b77da.sendMessage(_0x515eeb, {
      'text': '' + _0x4b3aab.result
    });
  }
});
Hamza({
  'on': 'body'
}, async (_0x254db3, _0x3e48ac, _0x1c8ea0, {
  from: _0x56ee94,
  body: _0x2d2701,
  isCmd: _0x138bfa,
  isGroup: _0x41a8b4,
  isOwner: _0x598f39,
  isAdmins: _0x41afe2,
  groupAdmins: _0x4b6fe8,
  isBotAdmins: _0x21adcc,
  sender: _0x33676c,
  pushname: _0x2a93d2,
  groupName: _0x2f3932,
  quoted: _0x588a51
}) => {
  try {
    _0x254db3.ev.on("call", async _0x3cc925 => {
      if (config.ANTI_CALL) {
        for (const _0x3cfbb5 of _0x3cc925) {
          if (_0x3cfbb5.status == "offer") {
            if (_0x3cfbb5.isGroup == false) {
              await _0x254db3.sendMessage(_0x3cfbb5.from, {
                'text': "*Call rejected By Queen Anju MD*",
                'mentions': [_0x3cfbb5.from]
              });
              await _0x254db3.rejectCall(_0x3cfbb5.id, _0x3cfbb5.from);
            } else {
              await _0x254db3.rejectCall(_0x3cfbb5.id, _0x3cfbb5.from);
            }
          }
        }
      }
    });
  } catch (_0x3977c8) {
    console.log(_0x3977c8);
    reply(_0x3977c8);
  }
});
const forwardCommand = {
  'pattern': "forward",
  'desc': "Forward messages",
  'alias': ['fo'],
  'category': "owner",
  'use': ".forward <Jid address>",
  'filename': __filename
};
Hamza(forwardCommand, async (_0x7f662b, _0x588f76, _0x40f676, {
  from: _0x36be71,
  quoted: _0x1f8b07,
  q: _0x498426,
  isOwner: _0x24c47f,
  reply: _0x2fa294
}) => {
  if (!_0x24c47f) {
    return _0x2fa294("Owner Only ❌");
  }
  if (!_0x498426) {
    return _0x2fa294("Please provide a target JID address ❌");
  }
  if (!_0x1f8b07) {
    return _0x2fa294("Please reply to a message you want to forward ❌");
  }
  const _0x4c7944 = _0x1f8b07.fakeObj ? _0x1f8b07.fakeObj : _0x1f8b07;
  try {
    await _0x7f662b.sendMessage(_0x498426, {
      'forward': _0x4c7944
    }, {
      'quoted': _0x588f76
    });
    return _0x2fa294("*Message forwarded successfully to:*\n\n" + _0x498426);
  } catch (_0x1c3773) {
    console.error("Error forwarding message:", _0x1c3773);
    return _0x2fa294("Failed to forward the message ❌");
  }
});
const viewOnceCommand = {
  'pattern': 'vv',
  'react': '🌠',
  'alias': ["rvo"],
  'desc': "Check bot's ping"
};
viewOnceCommand.category = "main";
viewOnceCommand.use = ".vv";
viewOnceCommand.filename = __filename;
Hamza(viewOnceCommand, async (_0x33f584, _0x3aa502, _0x3e3807, {
  from: _0x499d90,
  quoted: _0x53a88c,
  body: _0x5f0318,
  isCmd: _0x36e2e8,
  command: _0x1ac869,
  args: _0x1bad39,
  q: _0x122002,
  isGroup: _0x986c8c,
  sender: _0x27c2fa,
  senderNumber: _0x270386,
  botNumber2: _0x3eaba8,
  botNumber: _0x3926c6,
  pushname: _0x267186,
  isMe: _0x3bac4c,
  isOwner: _0x6a91b2,
  groupMetadata: _0x4ec51b,
  groupName: _0x1f859d,
  participants: _0x279f67,
  groupAdmins: _0x491bdd,
  isBotAdmins: _0x127d9f,
  isAdmins: _0x41d701,
  reply: _0x3b8e37
}) => {
  try {
    const _0x51b127 = _0x3aa502.msg.contextInfo.quotedMessage.viewOnceMessageV2;
    if (_0x51b127) {
      if (_0x51b127.message.imageMessage) {
        console.log("Quoting an image");
        let _0x1a23c7 = _0x51b127.message.imageMessage.caption;
        let _0x535107 = await _0x33f584.downloadAndSaveMediaMessage(_0x51b127.message.imageMessage);
        return _0x33f584.sendMessage(_0x3aa502.chat, {
          'image': {
            'url': _0x535107
          },
          'caption': _0x1a23c7
        });
      }
      if (_0x51b127.message.videoMessage) {
        let _0x56d411 = _0x51b127.message.videoMessage.caption;
        let _0x52cbfc = await _0x33f584.downloadAndSaveMediaMessage(_0x51b127.message.videoMessage);
        return _0x33f584.sendMessage(_0x3aa502.chat, {
          'video': {
            'url': _0x52cbfc
          },
          'caption': _0x56d411
        });
      }
    }
  } catch (_0x41378e) {
    console.log("Error processing viewOnce message:", _0x41378e);
  }
  if (!_0x3aa502.quoted) {
    return _0x3b8e37("Please reply to a ViewOnce message");
  }
  if (_0x3aa502.quoted.mtype === "viewOnceMessage") {
    console.log("Processing a ViewOnce message");
    if (_0x3aa502.quoted.message.imageMessage) {
      let _0x222e17 = message.quoted.message.imageMessage.caption;
      let _0x3cf4a5 = await _0x33f584.downloadAndSaveMediaMessage(message.quoted.message.imageMessage);
      return _0x33f584.sendMessage(_0x3aa502.chat, {
        'image': {
          'url': _0x3cf4a5
        },
        'caption': _0x222e17
      });
    }
    if (_0x3aa502.quoted.message.videoMessage) {
      let _0x5d162e = _0x3aa502.quoted.message.videoMessage.caption;
      let _0x5d63f0 = await _0x33f584.downloadAndSaveMediaMessage(_0x3aa502.quoted.message.videoMessage);
      return _0x33f584.sendMessage(_0x3aa502.chat, {
        'video': {
          'url': _0x5d63f0
        },
        'caption': _0x5d162e
      });
    }
  } else {
    return _0x3b8e37("This is not a ViewOnce message");
  }
});
Hamza({
  'pattern': 'pair',
  'alias': ["register", "link"],
  'react': '🔢',
  'desc': "Link a number for pairing",
  'category': "utility",
  'use': ".pair <number>",
  'filename': __filename
}, async (_0x5378e7, _0x128279, _0x5012c2, {
  from: _0x899f42,
  prefix: _0x212b4d,
  quoted: _0x59bb45,
  q: _0x1c055c,
  reply: _0x4cbf55
}) => {
  try {
    const _0x198dd9 = {
      'key': {
        'participants': "0@s.whatsapp.net",
        'remoteJid': 'status@broadcast',
        'fromMe': true,
        'id': "BYTE"
      },
      'message': {
        'contactMessage': {
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Sy\nitem1.TEL;waid=" + _0x5012c2.sender.split('@')[0x0] + ':' + _0x5012c2.sender.split('@')[0x0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
        }
      },
      'participant': '0@s.whatsapp.net'
    };
    if (!_0x1c055c) {
      return await _0x4cbf55("Example: .pair 9230723803xx");
    }
    const _0x7da5b7 = await fetchJson("https://session.talkdrove.com/code?number=" + _0x1c055c);
    const _0x30a0a1 = "_*Your Number Paired Successfully...✅*_\n\nPairing Code: *" + _0x7da5b7.code + '*';
    await _0x5378e7.sendMessage(_0x5012c2.chat, {
      'document': fs.readFileSync("./package.json"),
      'fileName': "BYTE",
      'mimetype': 'application/pdf',
      'fileLength': 0x5af3107a3fff,
      'pageCount': 0x7e8,
      'caption': '' + _0x7da5b7.code,
      'contextInfo': {
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterName': "TalkDrove",
          'newsletterJid': '120363232588171807@newsletter'
        },
        'externalAdReply': {
          'title': "> *© TalkDrove  ",
          'body': '',
          'thumbnailUrl': "https://i.ibb.co/b2WCR4q/Anju-Ofc-X.jpg",
          'sourceUrl': "https://talkdrove.com/",
          'mediaType': 0x1,
          'renderLargerThumbnail': true
        }
      }
    }, {
      'quoted': _0x198dd9
    });
    await _0x4cbf55(_0x30a0a1);
  } catch (_0x55f981) {
    console.error(_0x55f981);
    await _0x4cbf55("An error occurred: " + _0x55f981.message);
  }
});