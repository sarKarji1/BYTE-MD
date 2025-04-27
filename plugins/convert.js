const {
  Hamza,
  commands
} = require("../lib/command");
const fs = require('fs');
const path = require('path');
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  sleep,
  fetchJson
} = require("../lib/functions");
const googleTTS = require("google-tts-api");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  tmpdir
} = require('os');
const Crypto = require("crypto");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
let {
  img2url
} = require('@blackamda/telegram-image-url');
ffmpeg.setFfmpegPath(ffmpegPath);
async function videoToWebp(_0xe8a89f) {
  const _0x334082 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".webp");
  const _0xb76f58 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + '.mp4');
  fs.writeFileSync(_0xb76f58, _0xe8a89f);
  await new Promise((_0x5238a5, _0x1d59b7) => {
    ffmpeg(_0xb76f58).on("error", _0x1d59b7).on("end", () => _0x5238a5(true)).addOutputOptions(["-vcodec", 'libwebp', "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", '0', "-ss", "00:00:00", '-t', "00:00:05", "-preset", 'default', '-an', "-vsync", '0']).toFormat("webp").save(_0x334082);
  });
  const _0x3be409 = fs.readFileSync(_0x334082);
  fs.unlinkSync(_0x334082);
  fs.unlinkSync(_0xb76f58);
  return _0x3be409;
}
function toAudio(_0x153c94, _0x53a25f) {
  return ffmpeg(_0x153c94, ['-vn', "-ac", '2', "-b:a", "128k", "-ar", "44100", '-f', "mp3"], _0x53a25f, "mp3");
}
function toPTT(_0x2fa1ff, _0x3f775b) {
  return ffmpeg(_0x2fa1ff, ["-vn", "-c:a", "libopus", '-b:a', "128k", "-vbr", 'on', "-compression_level", '10'], _0x3f775b, "opus");
}
function toVideo(_0x316d9e, _0x6c5818) {
  return ffmpeg(_0x316d9e, ["-c:v", "libx264", "-c:a", 'aac', "-ab", '128k', "-ar", "44100", "-crf", '32', "-preset", "slow"], _0x6c5818, "mp4");
}
Hamza({
  'pattern': "tts",
  'desc': "text to speech.",
  'category': "downloader",
  'filename': __filename,
  'use': "<Hii,this is Secktor>"
}, async (_0x15049c, _0xea9949, _0x500787, {
  from: _0x5d639c,
  quoted: _0x2459cc,
  body: _0x5aaba6,
  isCmd: _0x4d369d,
  command: _0x551c6f,
  args: _0x5ecc6e,
  q: _0x39b210,
  isGroup: _0x117024,
  sender: _0x8cd253,
  senderNumber: _0xf6e6ba,
  botNumber2: _0x12a066,
  botNumber: _0x3d94cf,
  pushname: _0x1b4e13,
  isMe: _0x4c8477,
  isOwner: _0xf83851,
  groupMetadata: _0x44e386,
  groupName: _0xb8fdde,
  participants: _0x47ce39,
  groupAdmins: _0x1bf5d6,
  isBotAdmins: _0x451097,
  isAdmins: _0x151d62,
  reply: _0x587d06
}) => {
  if (!_0x39b210) {
    return _0x500787.reply("Please give me Sentence to change into audio.");
  }
  const _0xf0e897 = googleTTS.getAudioUrl(_0x39b210, {
    'lang': 'en',
    'slow': false,
    'host': "https://translate.google.com"
  });
  return _0x15049c.sendMessage(_0x500787.chat, {
    'audio': {
      'url': _0xf0e897
    },
    'mimetype': "audio/mpeg",
    'fileName': "ttsCitelVoid.m4a"
  }, {
    'quoted': _0xea9949
  });
});
Hamza({
  'pattern': "toptt",
  'react': '🔊',
  'alias': ['toaudio', 'tomp3'],
  'desc': "convert to audio",
  'category': "convert",
  'use': ".toptt <Reply to video>",
  'filename': __filename
}, async (_0x1f6484, _0x544555, _0x29e573, {
  from: _0x175062,
  l: _0x4d7d5c,
  quoted: _0x4af3c5,
  body: _0x4fa1d4,
  isCmd: _0x568015,
  command: _0x55add6,
  args: _0x1cd9d7,
  q: _0x4dec97,
  isGroup: _0x5b1a78,
  sender: _0x16b452,
  senderNumber: _0x57581c,
  botNumber2: _0x41143c,
  botNumber: _0x30fc83,
  pushname: _0x2428a6,
  isMe: _0xb502ea,
  isOwner: _0x6bfc47,
  groupMetadata: _0x1dcf0d,
  groupName: _0x3e00bc,
  participants: _0x4c30b7,
  groupAdmins: _0x293837,
  isBotAdmins: _0x835178,
  isAdmins: _0x38dea6,
  reply: _0x2c3f15
}) => {
  try {
    let _0x4537f3 = _0x29e573.quoted ? _0x29e573.quoted.type === 'videoMessage' : _0x29e573 ? _0x29e573.type === "videoMessage" : false;
    if (!_0x4537f3) {
      return await _0x2c3f15();
    }
    let _0x1c1872 = _0x29e573.quoted ? await _0x29e573.quoted.download() : await _0x29e573.download();
    let _0xda3c27 = await ffmpeg(_0x1c1872, ["-vn", "-c:a", "libopus", '-b:a', "128k", "-vbr", 'on', "-compression_level", '10'], "mp4", "opus");
    let _0x3d7dc4 = await _0x1f6484.sendMessage(_0x29e573.chat, {
      'audio': _0xda3c27.options,
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x29e573
    });
    await _0x1f6484.sendMessage(_0x175062, {
      'react': {
        'text': '🎼',
        'key': _0x3d7dc4.key
      }
    });
  } catch (_0x3a7ad1) {
    _0x2c3f15("*Error !!*");
    _0x4d7d5c(_0x3a7ad1);
  }
});
Hamza({
  'pattern': 'sticker',
  'react': '🔮',
  'alias': ['s', 'stic'],
  'desc': "Convert to sticker",
  'category': "convert",
  'use': ".sticker <Reply to image>",
  'filename': __filename
}, async (_0x22a57c, _0x31edb0, _0x3cf867, {
  from: _0x47e706,
  l: _0xc4031d,
  quoted: _0x2f36f1,
  body: _0x206cb8,
  isCmd: _0x3e8425,
  command: _0x535a5c,
  args: _0x535c39,
  q: _0x13e19f,
  isGroup: _0x33afb3,
  sender: _0x368a76,
  senderNumber: _0x525c43,
  botNumber2: _0x267049,
  botNumber: _0x4179be,
  pushname: _0x39b7d3,
  isMe: _0xab2afe,
  isOwner: _0x565987,
  groupMetadata: _0x1b1cf5,
  groupName: _0x383cc2,
  participants: _0xad7152,
  groupAdmins: _0x426e20,
  isBotAdmins: _0x1ec176,
  isAdmins: _0x8c2528,
  reply: _0x49523a
}) => {
  try {
    const _0xc89c15 = _0x3cf867.quoted ? _0x3cf867.quoted.type === "viewOnceMessage" : false;
    const _0x10f52d = _0x3cf867.quoted ? _0x3cf867.quoted.type === "imageMessage" || (_0xc89c15 ? _0x3cf867.quoted.msg.type === "imageMessage" : false) : false;
    const _0x534069 = _0x3cf867.quoted ? _0x3cf867.quoted.type === "stickerMessage" : false;
    if (_0x3cf867.type === 'imageMessage' || _0x10f52d) {
      var _0x3ccef0 = getRandom('');
      if (_0x10f52d) {
        await _0x3cf867.quoted.download(_0x3ccef0);
      } else {
        await _0x3cf867.download(_0x3ccef0);
      }
      let _0x21f42a = new Sticker(_0x3ccef0 + '.jpg', {
        'pack': _0x39b7d3,
        'author': '',
        'type': _0x13e19f.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x4b,
        'background': "transparent"
      });
      const _0x5e4526 = await _0x21f42a.toBuffer();
      return _0x22a57c.sendMessage(_0x47e706, {
        'sticker': _0x5e4526
      }, {
        'quoted': _0x31edb0
      });
    } else {
      if (_0x534069) {
        var _0x169f74 = getRandom('');
        await _0x3cf867.quoted.download(_0x169f74);
        let _0x530ca1 = new Sticker(_0x169f74 + ".webp", {
          'pack': _0x39b7d3,
          'author': '',
          'type': _0x13e19f.includes('--crop' || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': "12345",
          'quality': 0x4b,
          'background': 'transparent'
        });
        const _0x21dc85 = await _0x530ca1.toBuffer();
        return _0x22a57c.sendMessage(_0x47e706, {
          'sticker': _0x21dc85
        }, {
          'quoted': _0x31edb0
        });
      } else {
        return await _0x49523a(imgmsg);
      }
    }
  } catch (_0x1715a7) {
    _0x49523a("*Error !!*");
    _0xc4031d(_0x1715a7);
  }
});
Hamza({
  'pattern': 'img2url',
  'react': '🔗',
  'alias': ["tourl", 'imgurl', 'telegraph', "imgtourl"],
  'desc': "to convert image to url",
  'category': "convert",
  'use': ".img2url <reply image>",
  'filename': __filename
}, async (_0x2e3fd4, _0x1afdca, _0x48399a, {
  from: _0x19e173,
  l: _0x20db17,
  prefix: _0x5230a4,
  quoted: _0x31d283,
  body: _0x404e32,
  isCmd: _0x479982,
  command: _0x437af3,
  args: _0x27d0a6,
  q: _0x110761,
  isGroup: _0x1217f8,
  sender: _0x1c5584,
  senderNumber: _0x4efd2c,
  botNumber2: _0x2ed208,
  botNumber: _0x484104,
  pushname: _0x47fa3c,
  isMe: _0x170c8b,
  isOwner: _0x2799d0,
  groupMetadata: _0x15447f,
  groupName: _0x2bbc0d,
  participants: _0x2b2ef1,
  groupAdmins: _0xadf382,
  isBotAdmins: _0x302a95,
  isAdmins: _0x2f1fe9,
  reply: _0x4b7163
}) => {
  try {
    const _0x2c3a35 = _0x48399a.quoted ? _0x48399a.quoted.type === "viewOnceMessage" : false;
    const _0x588302 = _0x48399a.quoted ? _0x48399a.quoted.type === "imageMessage" || (_0x2c3a35 ? _0x48399a.quoted.msg.type === 'imageMessage' : false) : false;
    if (_0x48399a.type === 'imageMessage' || _0x588302) {
      const _0x2f2ee1 = require("file-type");
      var _0x4ba688 = getRandom('');
      let _0x313c30 = _0x588302 ? await _0x48399a.quoted.download(_0x4ba688) : await _0x48399a.download(_0x4ba688);
      let _0x44e9a3 = await _0x2f2ee1.fromBuffer(_0x313c30);
      await fs.promises.writeFile('./' + _0x44e9a3.ext, _0x313c30);
      img2url('./' + _0x44e9a3.ext).then(async _0x425566 => {
        await _0x4b7163("\n" + _0x425566 + "\n");
      });
    } else {
      return _0x4b7163();
    }
  } catch (_0x1839d6) {
    _0x4b7163();
    _0x20db17(_0x1839d6);
  }
});