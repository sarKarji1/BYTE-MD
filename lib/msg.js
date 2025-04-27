const {
  proto,
  downloadContentFromMessage,
  getContentType
} = require('@whiskeysockets/baileys');
const fs = require('fs');
const downloadMediaMessage = async (_0x16a6c2, _0x4bd54c) => {
  if (_0x16a6c2.type === "viewOnceMessage") {
    _0x16a6c2.type = _0x16a6c2.msg.type;
  }
  if (_0x16a6c2.type === "imageMessage") {
    var _0x55fdb8 = _0x4bd54c ? _0x4bd54c + ".jpg" : "undefined.jpg";
    const _0x1da801 = await downloadContentFromMessage(_0x16a6c2.msg, 'image');
    let _0x3279e7 = Buffer.from([]);
    for await (const _0x2362e8 of _0x1da801) {
      _0x3279e7 = Buffer.concat([_0x3279e7, _0x2362e8]);
    }
    fs.writeFileSync(_0x55fdb8, _0x3279e7);
    return fs.readFileSync(_0x55fdb8);
  } else {
    if (_0x16a6c2.type === "videoMessage") {
      var _0x3d1024 = _0x4bd54c ? _0x4bd54c + ".mp4" : "undefined.mp4";
      const _0x1f5e3b = await downloadContentFromMessage(_0x16a6c2.msg, "video");
      let _0x109a0c = Buffer.from([]);
      for await (const _0x4d873d of _0x1f5e3b) {
        _0x109a0c = Buffer.concat([_0x109a0c, _0x4d873d]);
      }
      fs.writeFileSync(_0x3d1024, _0x109a0c);
      return fs.readFileSync(_0x3d1024);
    } else {
      if (_0x16a6c2.type === "audioMessage") {
        var _0x16224d = _0x4bd54c ? _0x4bd54c + '.mp3' : "undefined.mp3";
        const _0x1677ee = await downloadContentFromMessage(_0x16a6c2.msg, 'audio');
        let _0x4530be = Buffer.from([]);
        for await (const _0x128301 of _0x1677ee) {
          _0x4530be = Buffer.concat([_0x4530be, _0x128301]);
        }
        fs.writeFileSync(_0x16224d, _0x4530be);
        return fs.readFileSync(_0x16224d);
      } else {
        if (_0x16a6c2.type === 'stickerMessage') {
          var _0x596fe1 = _0x4bd54c ? _0x4bd54c + '.webp' : "undefined.webp";
          const _0x1b59b8 = await downloadContentFromMessage(_0x16a6c2.msg, "sticker");
          let _0x85c756 = Buffer.from([]);
          for await (const _0xfd0e73 of _0x1b59b8) {
            _0x85c756 = Buffer.concat([_0x85c756, _0xfd0e73]);
          }
          fs.writeFileSync(_0x596fe1, _0x85c756);
          return fs.readFileSync(_0x596fe1);
        } else {
          if (_0x16a6c2.type === 'documentMessage') {
            var _0x59082c = _0x16a6c2.msg.fileName.split('.')[0x1].toLowerCase().replace("jpeg", "jpg").replace("png", 'jpg').replace("m4a", 'mp3');
            var _0x4b7f64 = _0x4bd54c ? _0x4bd54c + '.' + _0x59082c : "undefined." + _0x59082c;
            const _0x4bf235 = await downloadContentFromMessage(_0x16a6c2.msg, 'document');
            let _0x52a380 = Buffer.from([]);
            for await (const _0x584f77 of _0x4bf235) {
              _0x52a380 = Buffer.concat([_0x52a380, _0x584f77]);
            }
            fs.writeFileSync(_0x4b7f64, _0x52a380);
            return fs.readFileSync(_0x4b7f64);
          }
        }
      }
    }
  }
};
const sms = (_0x40053b, _0x3ac2b3) => {
  if (_0x3ac2b3.key) {
    _0x3ac2b3.id = _0x3ac2b3.key.id;
    _0x3ac2b3.chat = _0x3ac2b3.key.remoteJid;
    _0x3ac2b3.fromMe = _0x3ac2b3.key.fromMe;
    _0x3ac2b3.isGroup = _0x3ac2b3.chat.endsWith("@g.us");
    _0x3ac2b3.sender = _0x3ac2b3.fromMe ? _0x40053b.user.id.split(':')[0x0] + "@s.whatsapp.net" : _0x3ac2b3.isGroup ? _0x3ac2b3.key.participant : _0x3ac2b3.key.remoteJid;
  }
  if (_0x3ac2b3.message) {
    _0x3ac2b3.type = getContentType(_0x3ac2b3.message);
    _0x3ac2b3.msg = _0x3ac2b3.type === 'viewOnceMessage' ? _0x3ac2b3.message[_0x3ac2b3.type].message[getContentType(_0x3ac2b3.message[_0x3ac2b3.type].message)] : _0x3ac2b3.message[_0x3ac2b3.type];
    if (_0x3ac2b3.msg) {
      if (_0x3ac2b3.type === 'viewOnceMessage') {
        _0x3ac2b3.msg.type = getContentType(_0x3ac2b3.message[_0x3ac2b3.type].message);
      }
      var _0x42fcda = _0x3ac2b3.msg.contextInfo != null ? _0x3ac2b3.msg.contextInfo.participant : '';
      var _0xe89f3c = _0x3ac2b3.msg.contextInfo != null ? _0x3ac2b3.msg.contextInfo.mentionedJid : [];
      var _0x2d97a6 = typeof _0xe89f3c == "string" ? [_0xe89f3c] : _0xe89f3c;
      if (_0x2d97a6 != undefined) {
        _0x2d97a6.push(_0x42fcda);
      } else {
        [];
      }
      _0x3ac2b3.mentionUser = _0x2d97a6 != undefined ? _0x2d97a6.filter(_0x318089 => _0x318089) : [];
      _0x3ac2b3.body = _0x3ac2b3.type === 'conversation' ? _0x3ac2b3.msg : _0x3ac2b3.type === "extendedTextMessage" ? _0x3ac2b3.msg.text : _0x3ac2b3.type == "imageMessage" && _0x3ac2b3.msg.caption ? _0x3ac2b3.msg.caption : _0x3ac2b3.type == "videoMessage" && _0x3ac2b3.msg.caption ? _0x3ac2b3.msg.caption : _0x3ac2b3.type == "templateButtonReplyMessage" && _0x3ac2b3.msg.selectedId ? _0x3ac2b3.msg.selectedId : _0x3ac2b3.type == 'buttonsResponseMessage' && _0x3ac2b3.msg.selectedButtonId ? _0x3ac2b3.msg.selectedButtonId : '';
      _0x3ac2b3.quoted = _0x3ac2b3.msg.contextInfo != undefined ? _0x3ac2b3.msg.contextInfo.quotedMessage : null;
      if (_0x3ac2b3.quoted) {
        _0x3ac2b3.quoted.type = getContentType(_0x3ac2b3.quoted);
        _0x3ac2b3.quoted.id = _0x3ac2b3.msg.contextInfo.stanzaId;
        _0x3ac2b3.quoted.sender = _0x3ac2b3.msg.contextInfo.participant;
        _0x3ac2b3.quoted.fromMe = _0x3ac2b3.quoted.sender.split('@')[0x0].includes(_0x40053b.user.id.split(':')[0x0]);
        _0x3ac2b3.quoted.msg = _0x3ac2b3.quoted.type === "viewOnceMessage" ? _0x3ac2b3.quoted[_0x3ac2b3.quoted.type].message[getContentType(_0x3ac2b3.quoted[_0x3ac2b3.quoted.type].message)] : _0x3ac2b3.quoted[_0x3ac2b3.quoted.type];
        if (_0x3ac2b3.quoted.type === "viewOnceMessage") {
          _0x3ac2b3.quoted.msg.type = getContentType(_0x3ac2b3.quoted[_0x3ac2b3.quoted.type].message);
        }
        var _0x4afbaa = _0x3ac2b3.quoted.msg.contextInfo != null ? _0x3ac2b3.quoted.msg.contextInfo.participant : '';
        var _0x367d8b = _0x3ac2b3.quoted.msg.contextInfo != null ? _0x3ac2b3.quoted.msg.contextInfo.mentionedJid : [];
        var _0x47c4ca = typeof _0x367d8b == "string" ? [_0x367d8b] : _0x367d8b;
        if (_0x47c4ca != undefined) {
          _0x47c4ca.push(_0x4afbaa);
        } else {
          [];
        }
        _0x3ac2b3.quoted.mentionUser = _0x47c4ca != undefined ? _0x47c4ca.filter(_0x42f90b => _0x42f90b) : [];
        _0x3ac2b3.quoted.fakeObj = proto.WebMessageInfo.fromObject({
          'key': {
            'remoteJid': _0x3ac2b3.chat,
            'fromMe': _0x3ac2b3.quoted.fromMe,
            'id': _0x3ac2b3.quoted.id,
            'participant': _0x3ac2b3.quoted.sender
          },
          'message': _0x3ac2b3.quoted
        });
        _0x3ac2b3.quoted.download = _0x3d7a9f => downloadMediaMessage(_0x3ac2b3.quoted, _0x3d7a9f);
        _0x3ac2b3.quoted["delete"] = () => _0x40053b.sendMessage(_0x3ac2b3.chat, {
          'delete': _0x3ac2b3.quoted.fakeObj.key
        });
        _0x3ac2b3.quoted.react = _0x4907e7 => _0x40053b.sendMessage(_0x3ac2b3.chat, {
          'react': {
            'text': _0x4907e7,
            'key': _0x3ac2b3.quoted.fakeObj.key
          }
        });
      }
    }
    _0x3ac2b3.download = _0x7aef21 => downloadMediaMessage(_0x3ac2b3, _0x7aef21);
  }
  _0x3ac2b3.reply = (_0x1b03cb, _0x56ee29 = _0x3ac2b3.chat, _0x2619bf = {
    'mentions': [_0x3ac2b3.sender]
  }) => _0x40053b.sendMessage(_0x56ee29, {
    'text': _0x1b03cb,
    'contextInfo': {
      'mentionedJid': _0x2619bf.mentions
    }
  }, {
    'quoted': _0x3ac2b3
  });
  _0x3ac2b3.replyS = (_0x5ab6e4, _0x5cc0b5 = _0x3ac2b3.chat, _0x1745c1 = {
    'mentions': [_0x3ac2b3.sender]
  }) => _0x40053b.sendMessage(_0x5cc0b5, {
    'sticker': _0x5ab6e4,
    'contextInfo': {
      'mentionedJid': _0x1745c1.mentions
    }
  }, {
    'quoted': _0x3ac2b3
  });
  _0x3ac2b3.replyImg = (_0x3da447, _0x427951, _0x5ef2d7 = _0x3ac2b3.chat, _0x1c075a = {
    'mentions': [_0x3ac2b3.sender]
  }) => _0x40053b.sendMessage(_0x5ef2d7, {
    'image': _0x3da447,
    'caption': _0x427951,
    'contextInfo': {
      'mentionedJid': _0x1c075a.mentions
    }
  }, {
    'quoted': _0x3ac2b3
  });
  _0x3ac2b3.replyVid = (_0x5ee500, _0x114adf, _0x3ba27a = _0x3ac2b3.chat, _0x228628 = {
    'mentions': [_0x3ac2b3.sender],
    'gif': false
  }) => _0x40053b.sendMessage(_0x3ba27a, {
    'video': _0x5ee500,
    'caption': _0x114adf,
    'gifPlayback': _0x228628.gif,
    'contextInfo': {
      'mentionedJid': _0x228628.mentions
    }
  }, {
    'quoted': _0x3ac2b3
  });
  _0x3ac2b3.replyAud = (_0x4cf4bc, _0x5d4e4b = _0x3ac2b3.chat, _0x382f34 = {
    'mentions': [_0x3ac2b3.sender],
    'ptt': false
  }) => _0x40053b.sendMessage(_0x5d4e4b, {
    'audio': _0x4cf4bc,
    'ptt': _0x382f34.ptt,
    'mimetype': 'audio/mpeg',
    'contextInfo': {
      'mentionedJid': _0x382f34.mentions
    }
  }, {
    'quoted': _0x3ac2b3
  });
  _0x3ac2b3.replyDoc = (_0x93bf4d, _0x14c6e6 = _0x3ac2b3.chat, _0x2ca35f = {
    'mentions': [_0x3ac2b3.sender],
    'filename': "undefined.pdf",
    'mimetype': 'application/pdf'
  }) => _0x40053b.sendMessage(_0x14c6e6, {
    'document': _0x93bf4d,
    'mimetype': _0x2ca35f.mimetype,
    'fileName': _0x2ca35f.filename,
    'contextInfo': {
      'mentionedJid': _0x2ca35f.mentions
    }
  }, {
    'quoted': _0x3ac2b3
  });
  _0x3ac2b3.replyContact = (_0x7c2312, _0x25b38e, _0x53d8a0) => {
    var _0x657a24 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x7c2312 + "\n" + 'ORG:' + _0x25b38e + ";\n" + "TEL;type=CELL;type=VOICE;waid=" + _0x53d8a0 + ':+' + _0x53d8a0 + "\n" + "END:VCARD";
    _0x40053b.sendMessage(_0x3ac2b3.chat, {
      'contacts': {
        'displayName': _0x7c2312,
        'contacts': [{
          'vcard': _0x657a24
        }]
      }
    }, {
      'quoted': _0x3ac2b3
    });
  };
  _0x3ac2b3.react = _0x5937b7 => _0x40053b.sendMessage(_0x3ac2b3.chat, {
    'react': {
      'text': _0x5937b7,
      'key': _0x3ac2b3.key
    }
  });
  return _0x3ac2b3;
};
module.exports = {
  'sms': sms,
  'downloadMediaMessage': downloadMediaMessage
};