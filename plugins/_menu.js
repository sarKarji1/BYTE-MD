const path = require("path");
const configPath = path.join(__dirname, '../config.cjs');
let config = require(configPath);
const fs = require('fs');
const {
  Hamza,
  commands
} = require("../lib/command");
const {
  runtime,
  fetchJson
} = require('../lib/functions');
Hamza({
  'pattern': 'menu',
  'desc': "To get the menu.",
  'react': '✅',
  'alias': "list",
  'category': "main",
  'filename': __filename
}, async (_0x4ddd71, _0x562f06, _0x4b5a8e, {
  from: _0x246c73,
  users: _0x20db4a,
  quoted: _0x361cab,
  body: _0x10a3cc,
  isCmd: _0xf0f3e4,
  command: _0x95cb97,
  args: _0x9ed146,
  q: _0x9114fd,
  isGroup: _0x14f952,
  sender: _0x591689,
  senderNumber: _0x3cdd5f,
  botNumber2: _0x4e831f,
  botNumber: _0x59f713,
  pushname: _0x1bf21c,
  isMe: _0x25534d,
  isOwner: _0x5cd82a,
  groupMetadata: _0x84e41,
  groupName: _0x346764,
  participants: _0x2f43e2,
  groupAdmins: _0x35370b,
  isBotAdmins: _0xadc97d,
  isAdmins: _0xd3a0aa,
  reply: _0x2f86e3
}) => {
  try {
    let _0x139610 = {
      'main': '',
      'download': '',
      'group': '',
      'owner': '',
      'convert': '',
      'search': '',
      'ai': '',
      'fun': '',
      'other': '',
      'nsfw': '',
      'settings': '',
      'anime': ''
    };
    for (let _0x407489 = 0x0; _0x407489 < commands.length; _0x407489++) {
      if (commands[_0x407489].pattern && !commands[_0x407489].dontAddCommandList) {
        _0x139610[commands[_0x407489].category] += "┃  " + config.PREFIX + commands[_0x407489].pattern + "\n";
      }
    }
    let _0x55948f = await fetchJson('https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/xByteLogo.json');
    let _0x12897e = "┏━━━━❮  *BYTE-MD* ❯\n┃PREFIX : " + config.PREFIX + "\n┃OWNER : " + config.OWNER_NAME + "\n┃MODE : " + config.MODE + "\n┃\n┗< *COMMANDS* >━━━━━━━━\n┃O: *1. OWNER COMMANDS*\n┃O: *2. CONVERT OPTIONS*\n┃O: *3. FUN MENU*\n┃O: *4. SEARCH ZONE*\n┃O: *5. DOWNLOAD ZONE*\n┃O: *6. FUN MENU*\n┃O: *7. MAIN MENU*\n┃O: *8. LOGO MENU*\n┃O: *9. GROUP GAMES*\n┃O: *10. USEFUL TOOLS*\n┃O: *11. SETTINGS* \n┃\n┗━━━━━━━━━━━━━━━━\nReply with number!";
    let _0x4dc529 = "┏━━━━❮  *BYTE-MD* ❯\n┃PREFIX : " + config.PREFIX + "\n┃OWNER : " + config.OWNER_NAME + "\n┃MODE : " + config.MODE + "\n┃\n┗━━━━━━━━━━━━━━━\n┏━━━❮ COMMANDS ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/HyHamza/BYTE-MD\n*_POWERED BY TALKDROVE_*";
    let _0x4ce91f = "┏━━━━❮  *BYTE-MD* ❯\n┃PREFIX : " + config.PREFIX + "\n┃OWNER : " + config.OWNER_NAME + "\n┃MODE : " + config.MODE + "\n┃\n┗━━━━━━━━━━━━━━━\n┏━━━❮ COMMANDS ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/HyHamza/BYTE-MD\n*_POWERED BY TALKDROVE_*";
    let _0x39a271 = "┏━━━━❮  *BYTE-MD* ❯\n┃PREFIX : " + config.PREFIX + "\n┃OWNER : " + config.OWNER_NAME + "\n┃MODE : " + config.MODE + "\n┃\n\n┗━━━━━━━━━━━━━━━\n┏━━━❮ COMMANDS ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/HyHamza/BYTE-MD";
    let _0x4220d9 = "┏━━━━❮  *BYTE-MD* ❯\n┃PREFIX : " + config.PREFIX + "\n┃OWNER : " + config.OWNER_NAME + "\n┃MODE : " + config.MODE + "\n┃\n\n┗━━━━━━━━━━━━━━━\n┏━━━❮ COMMANDS ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/HyHamza/BYTE-MD\n*_POWERED BY TALKDROVE_*";
    let _0x22d686 = "\n┏━━━━❮  *BYTE-MD* ❯\n┃PREFIX : " + config.PREFIX + "\n┃OWNER : " + config.OWNER_NAME + "\n┃MODE : " + config.MODE + "\n┃\n\n┗━━━━━━━━━━━━━━━\n┏━━━❮ COMMANDS ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/HyHamza/BYTE-MD\n*_POWERED BY TALKDROVE_*";
    let _0x55f0e6 = "\n┏━━━━❮  *BYTE-MD* ❯\n┃PREFIX : " + config.PREFIX + "\n┃OWNER : " + config.OWNER_NAME + "\n┃MODE : " + config.MODE + "\n┃\n\n┗━━━━━━━━━━━━━━━\n┏━━━❮ COMMANDS ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/HyHamza/BYTE-MD\n*_POWERED BY TALKDROVE_*";
    let _0x499f12 = "┏━━━━❮  *BYTE-MD* ❯\n┃PREFIX : " + config.PREFIX + "\n┃OWNER : " + config.OWNER_NAME + "\n┃MODE : " + config.MODE + "\n┃\n\n┗━━━━━━━━━━━━━━━\n┏━━━❮ COMMANDS ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/HyHamza/BYTE-MD\n*_POWERED BY TALKDROVE_*";
    let _0x2dd7fb = "┏━━━━❮  *BYTE-MD* ❯\n┃PREFIX : " + config.PREFIX + "\n┃OWNER : " + config.OWNER_NAME + "\n┃MODE : " + config.MODE + "\n┃\n\n┗━━━━━━━━━━━━━━━\n┏━━━❮ COMMANDS ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/HyHamza/BYTE-MD\n*_POWERED BY TALKDROVE_*";
    let _0x4a8555 = "┏━━━━❮  *BYTE-MD* ❯\n┃PREFIX : " + config.PREFIX + "\n┃OWNER : " + config.OWNER_NAME + "\n┃MODE : " + config.MODE + "\n┃\n\n┗━━━━━━━━━━━━━━━\n┏━━━❮ COMMANDS ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/HyHamza/BYTE-MD\n*_POWERED BY TALKDROVE_*";
    let _0x3e362b = "┏━━━━❮  *BYTE-MD* ❯\n┃PREFIX : " + config.PREFIX + "\n┃OWNER : " + config.OWNER_NAME + "\n┃MODE : " + config.MODE + "\n┃\n\n┗━━━━━━━━━━━━━━━\n┏━━━❮ COMMANDS ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/HyHamza/BYTE-MD\n*_POWERED BY TALKDROVE_*";
    let _0x10b96c = " \n┏━━━━❮  *BYTE-MD* ❯\n┃PREFIX : " + config.PREFIX + "\n┃OWNER : " + config.OWNER_NAME + "\n┃MODE : " + config.MODE + "\n┃\n\n┗━━━━━━━━━━━━━━━\n┏━━━❮ COMMANDS ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/HyHamza/BYTE-MD\n*_POWERED BY TALKDROVE_*";
    let _0x2ca6ee = "🧚\n┏━━━━❮  *BYTE-MD* ❯\n┃PREFIX : " + config.PREFIX + "\n┃OWNER : " + config.OWNER_NAME + "\n┃MODE : " + config.MODE + "\n┃\n\n┗━━━━━━━━━━━━━━━\n┏━━━❮ COMMANDS ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/HyHamza/BYTE-MD\n*_POWERED BY TALKDROVE_*";
    const _0x52c1db = await _0x4ddd71.sendMessage(_0x246c73, {
      'image': {
        'url': _0x55948f.allmenu
      },
      'caption': _0x12897e,
      'contextInfo': {
        'mentionedJid': ["923072380380@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363252060326102@newsletter",
          'newsletterName': 'TalkDrove',
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "TalkDrove",
          'body': "TalkDrove",
          'mediaType': 0x1,
          'sourceUrl': "https://talkdrove.com",
          'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
          'renderLargerThumbnail': true,
          'showAdAttribution': true
        }
      }
    });
    const _0x449b83 = _0x52c1db.key.id;
    _0x4ddd71.ev.on('messages.upsert', async _0xf17f57 => {
      const _0x5a4848 = _0xf17f57.messages[0x0];
      if (!_0x5a4848.message) {
        return;
      }
      const _0x5298e2 = _0x5a4848.message.conversation || _0x5a4848.message.extendedTextMessage?.["text"];
      const _0x2dc04f = _0x5a4848.key.remoteJid;
      const _0x5dbd16 = _0x5a4848.message.extendedTextMessage && _0x5a4848.message.extendedTextMessage.contextInfo.stanzaId === _0x449b83;
      if (_0x5dbd16) {
        await _0x4ddd71.sendMessage(_0x2dc04f, {
          'react': {
            'text': '🐼',
            'key': _0x5a4848.key
          }
        });
        if (_0x5298e2 === '1') {
          await _0x4ddd71.sendMessage(_0x2dc04f, {
            'image': {
              'url': _0x55948f.ownermenu
            },
            'caption': _0x4dc529,
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
                'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
                'renderLargerThumbnail': true,
                'showAdAttribution': true
              }
            }
          });
        } else {
          if (_0x5298e2 === '2') {
            await _0x4ddd71.sendMessage(_0x2dc04f, {
              'image': {
                'url': _0x55948f.convertmenu
              },
              'caption': _0x4ce91f,
              'contextInfo': {
                'mentionedJid': ["923072380380@s.whatsapp.net"],
                'groupMentions': [],
                'forwardingScore': 0x3e7,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': '120363252060326102@newsletter',
                  'newsletterName': "TalkDrove",
                  'serverMessageId': 0x3e7
                },
                'externalAdReply': {
                  'title': "TalkDrove",
                  'body': "TalkDrove",
                  'mediaType': 0x1,
                  'sourceUrl': 'https://talkdrove.com',
                  'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
                  'renderLargerThumbnail': true,
                  'showAdAttribution': true
                }
              }
            });
          } else {
            if (_0x5298e2 === '3') {
              await _0x4ddd71.sendMessage(_0x2dc04f, {
                'image': {
                  'url': _0x55948f.aimenu
                },
                'caption': _0x2dd7fb,
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
                    'body': "TalkDrove",
                    'mediaType': 0x1,
                    'sourceUrl': "https://talkdrove.com",
                    'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
                    'renderLargerThumbnail': true,
                    'showAdAttribution': true
                  }
                }
              });
            } else {
              if (_0x5298e2 === '4') {
                await _0x4ddd71.sendMessage(_0x2dc04f, {
                  'image': {
                    'url': _0x55948f.searchmenu
                  },
                  'caption': _0x4a8555,
                  'contextInfo': {
                    'mentionedJid': ["923072380380@s.whatsapp.net"],
                    'groupMentions': [],
                    'forwardingScore': 0x3e7,
                    'isForwarded': true,
                    'forwardedNewsletterMessageInfo': {
                      'newsletterJid': "120363252060326102@newsletter",
                      'newsletterName': 'TalkDrove',
                      'serverMessageId': 0x3e7
                    },
                    'externalAdReply': {
                      'title': 'TalkDrove',
                      'body': 'TalkDrove',
                      'mediaType': 0x1,
                      'sourceUrl': 'https://talkdrove.com',
                      'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg',
                      'renderLargerThumbnail': true,
                      'showAdAttribution': true
                    }
                  }
                });
              } else {
                if (_0x5298e2 === '5') {
                  await _0x4ddd71.sendMessage(_0x2dc04f, {
                    'image': {
                      'url': _0x55948f.dlmenu
                    },
                    'caption': _0x39a271,
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
                        'body': "TalkDrove",
                        'mediaType': 0x1,
                        'sourceUrl': "https://talkdrove.com",
                        'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg',
                        'renderLargerThumbnail': true,
                        'showAdAttribution': true
                      }
                    }
                  });
                } else {
                  if (_0x5298e2 === '6') {
                    await _0x4ddd71.sendMessage(_0x2dc04f, {
                      'image': {
                        'url': _0x55948f.funmenu
                      },
                      'caption': _0x55f0e6,
                      'contextInfo': {
                        'mentionedJid': ["923072380380@s.whatsapp.net"],
                        'groupMentions': [],
                        'forwardingScore': 0x3e7,
                        'isForwarded': true,
                        'forwardedNewsletterMessageInfo': {
                          'newsletterJid': '120363252060326102@newsletter',
                          'newsletterName': "TalkDrove",
                          'serverMessageId': 0x3e7
                        },
                        'externalAdReply': {
                          'title': "TalkDrove",
                          'body': "TalkDrove",
                          'mediaType': 0x1,
                          'sourceUrl': "https://talkdrove.com",
                          'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
                          'renderLargerThumbnail': true,
                          'showAdAttribution': true
                        }
                      }
                    });
                  } else {
                    if (_0x5298e2 === '7') {
                      await _0x4ddd71.sendMessage(_0x2dc04f, {
                        'image': {
                          'url': _0x55948f.mainmenu
                        },
                        'caption': _0x4220d9,
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
                            'title': 'TalkDrove',
                            'body': 'TalkDrove',
                            'mediaType': 0x1,
                            'sourceUrl': "https://talkdrove.com",
                            'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
                            'renderLargerThumbnail': true,
                            'showAdAttribution': true
                          }
                        }
                      });
                    } else {
                      if (_0x5298e2 === '9') {
                        await _0x4ddd71.sendMessage(_0x2dc04f, {
                          'image': {
                            'url': _0x55948f.groupmenu
                          },
                          'caption': _0x499f12,
                          'contextInfo': {
                            'mentionedJid': ["923072380380@s.whatsapp.net"],
                            'groupMentions': [],
                            'forwardingScore': 0x3e7,
                            'isForwarded': true,
                            'forwardedNewsletterMessageInfo': {
                              'newsletterJid': '120363252060326102@newsletter',
                              'newsletterName': 'TalkDrove',
                              'serverMessageId': 0x3e7
                            },
                            'externalAdReply': {
                              'title': 'TalkDrove',
                              'body': "TalkDrove",
                              'mediaType': 0x1,
                              'sourceUrl': "https://talkdrove.com",
                              'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
                              'renderLargerThumbnail': true,
                              'showAdAttribution': true
                            }
                          }
                        });
                      } else {
                        if (_0x5298e2 === '10') {
                          await _0x4ddd71.sendMessage(_0x2dc04f, {
                            'image': {
                              'url': _0x55948f.usefulmenu
                            },
                            'caption': _0x3e362b,
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
                                'body': "TalkDrove",
                                'mediaType': 0x1,
                                'sourceUrl': "https://talkdrove.com",
                                'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
                                'renderLargerThumbnail': true,
                                'showAdAttribution': true
                              }
                            }
                          });
                        } else {
                          if (_0x5298e2 === '12') {
                            await _0x4ddd71.sendMessage(_0x2dc04f, {
                              'image': {
                                'url': _0x55948f.nsfwmenu
                              },
                              'caption': _0x2ca6ee,
                              'contextInfo': {
                                'mentionedJid': ['923072380380@s.whatsapp.net'],
                                'groupMentions': [],
                                'forwardingScore': 0x3e7,
                                'isForwarded': true,
                                'forwardedNewsletterMessageInfo': {
                                  'newsletterJid': '120363252060326102@newsletter',
                                  'newsletterName': "TalkDrove",
                                  'serverMessageId': 0x3e7
                                },
                                'externalAdReply': {
                                  'title': 'TalkDrove',
                                  'body': 'TalkDrove',
                                  'mediaType': 0x1,
                                  'sourceUrl': "https://talkdrove.com",
                                  'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
                                  'renderLargerThumbnail': true,
                                  'showAdAttribution': true
                                }
                              }
                            });
                          } else {
                            if (_0x5298e2 === '11') {
                              await _0x4ddd71.sendMessage(_0x2dc04f, {
                                'image': {
                                  'url': _0x55948f.settingmenu
                                },
                                'caption': _0x10b96c,
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
                                    'body': "TalkDrove",
                                    'mediaType': 0x1,
                                    'sourceUrl': "https://talkdrove.com",
                                    'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg',
                                    'renderLargerThumbnail': true,
                                    'showAdAttribution': true
                                  }
                                }
                              });
                            } else if (_0x5298e2 === '8') {
                              await _0x4ddd71.sendMessage(_0x2dc04f, {
                                'image': {
                                  'url': _0x55948f.logomenu
                                },
                                'caption': _0x22d686,
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
                                    'body': "TalkDrove",
                                    'mediaType': 0x1,
                                    'sourceUrl': "https://talkdrove.com",
                                    'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
                                    'renderLargerThumbnail': true,
                                    'showAdAttribution': true
                                  }
                                }
                              });
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  } catch (_0x4c1c14) {
    console.log(_0x4c1c14);
    _0x2f86e3('' + _0x4c1c14);
  }
});
Hamza({
  'pattern': "settings",
  'desc': "To get the settings.",
  'react': '⚙',
  'category': 'main',
  'filename': __filename
}, async (_0x436d80, _0x5dc520, _0x341a7f, {
  from: _0x2c9950,
  users: _0x5d2025,
  quoted: _0x4e441f,
  body: _0x7776d7,
  isCmd: _0x5cce6e,
  command: _0x3c12e6,
  args: _0x1168d4,
  q: _0x4a2e20,
  isGroup: _0x5b0a0f,
  sender: _0x461764,
  senderNumber: _0x447f6d,
  botNumber2: _0x55ec72,
  botNumber: _0x2c2c2e,
  pushname: _0x5ad18d,
  isMe: _0x2717f6,
  isOwner: _0x22b72a,
  groupMetadata: _0x5531f7,
  groupName: _0x16a861,
  participants: _0xb6ae8e,
  groupAdmins: _0x231c0b,
  isBotAdmins: _0x3d1166,
  isAdmins: _0x525d43,
  reply: _0x527da1
}) => {
  if (!_0x22b72a) {
    return _0x527da1("❌ You are not the owner!");
  }
  try {
    let _0x49a822 = await fetchJson('https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/xByteLogo.json');
    let _0x558b50 = " \n┏━━━━❮  *BYTE-MD* ❯\n┃PREFIX : " + config.PREFIX + "\n┃OWNER : " + config.OWNER_NAME + "\n┃MODE : " + config.MODE + "\n┃\n\n┗━━━━━━━━━━━━━━━\n\n--- *Current Settings:*\n✦» *PREFIX:* " + config.PREFIX + "\n✦» *MODE:* " + config.MODE + "\n✦» *AUTO READ STATUS:* " + (config.AUTO_READ_STATUS ? "Enabled" : "Disabled") + "\n✦» *READ CMD:* " + (config.READ_CMD ? "Enabled" : "Disabled") + "\n✦» *AUTO VOICE:* " + (config.AUTO_VOICE ? "Enabled" : "Disabled") + "\n✦» *AUTO STICKER:* " + (config.AUTO_STICKER ? "Enabled" : "Disabled") + "\n✦» *AUTO REPLY:* " + (config.AUTO_REPLY ? 'Enabled' : "Disabled") + "\n✦» *AUTO REACT:* " + (config.AUTO_REACT ? "Enabled" : "Disabled") + "\n✦» *WELCOME:* " + (config.WELCOME ? "Enabled" : 'Disabled') + "\n✦» *ANTI BAD:* " + (config.ANTI_BAD ? "Enabled" : 'Disabled') + "\n✦» *ANTI BOT:* " + (config.ANTI_BOT ? "Enabled" : "Disabled") + "\n✦» *ANTI LINK:* " + (config.ANTI_LINK ? "Enabled" : "Disabled") + "\n✦» *ALWAYS ONLINE:* " + (config.ALLWAYS_ONLINE ? "Enabled" : "Disabled") + "\n✦» *COUNTRY BLOCK:* " + (config.COUNTRY_BLOCK ? "Enabled" : "Disabled") + "\n✦» *AUTO NEWS:* " + (config.AUTO_NEWS ? "Enabled" : "Disabled") + "\n✦» *AUTO TYPING:* " + (config.AUTO_TYPING ? "Enabled" : "Disabled") + "\n✦» *AUTO RECORDING:* " + (config.AUTO_RECORDING ? 'Enabled' : "Disabled") + "\n    \n┏━━━❮ COMMANDS ❯━━\n┃\n┃ *MODE SETTINGS*\n┃ 1.1 Set mode to public  \n┃ 1.2 Set mode to private  \n┃ 1.3 Set mode to groups  \n┃ 1.4 Set mode to inbox  \n┃ \n┃ *AUTO READ STATUS SETTINGS*\n┃ 2.1 Turn on auto status view  \n┃ 2.2 Turn off auto status view  \n┃ \n┃ *READ COMMAND SETTINGS*\n┃ 3.1 Enable read command  \n┃ 3.2 Disable read command  \n┃ \n┃ *AUTO VOICE SETTINGS*\n┃ 4.1 Enable auto voice  \n┃ 4.2 Disable auto voice  \n┃ \n┃ *AUTO STICKER SETTINGS*\n┃ 5.1 Enable auto sticker  \n┃ 5.2 Disable auto sticker  \n┃ \n┃ *AUTO REPLY SETTINGS*\n┃ 6.1 Enable auto reply  \n┃ 6.2 Disable auto reply  \n┃ \n┃ *AUTO REACT SETTINGS*\n┃ 7.1 Enable auto react  \n┃ 7.2 Disable auto react  \n┃ \n┃ *WELCOME SETTINGS*\n┃ 8.1 Enable welcome  \n┃ 8.2 Disable welcome  \n┃ \n┃ *ANTI BAD WORD SETTINGS*\n┃ 9.1 Enable anti bad word filter  \n┃ 9.2 Disable anti bad word filter  \n┃ \n┃ *ANTI BOT SETTINGS*\n┃ 10.1 Enable anti bot filter  \n┃ 10.2 Disable anti bot filter  \n┃ \n┃ *ANTI LINK SETTINGS*\n┃ 11.1 Enable anti link  \n┃ 11.2 Disable anti link  \n┃ \n┃ *ALWAYS ONLINE SETTINGS*\n┃ 12.1 Enable always online  \n┃ 12.2 Disable always online  \n┃ \n┃ *COUNTRY BLOCK SETTINGS*\n┃ 13.1 Enable COUNTRY block  \n┃ 13.2 Disable COUNTRY block  \n┃ \n┃ *AUTO NEWS SETTINGS*\n┃ 14.1 Enable auto news  \n┃ 14.2 Disable auto news  \n┃ \n┃ *AUTO TYPING SETTINGS*\n┃ 15.1 Enable auto typing  \n┃ 15.2 Disable auto typing  \n┃ \n┃ *AUTO RECORDING SETTINGS*\n┃ 16.1 Enable auto recording  \n┃ 16.2 Disable auto recording\n┃\n┗━━━━━━━━━━━━━━━━\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/HyHamza/BYTE-MD\n*_POWERED BY TALKDROVE_*";
    const _0x165cce = await _0x436d80.sendMessage(_0x2c9950, {
      'image': {
        'url': _0x49a822.settingmenu
      },
      'caption': _0x558b50,
      'contextInfo': {
        'mentionedJid': ["923072380380@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363252060326102@newsletter',
          'newsletterName': "TalkDrove",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': 'TalkDrove',
          'body': "TalkDrove",
          'mediaType': 0x1,
          'sourceUrl': "https://talkdrove.com",
          'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg',
          'renderLargerThumbnail': true,
          'showAdAttribution': true
        }
      }
    });
    const _0x7f235a = _0x165cce.key.id;
    _0x436d80.ev.on("messages.upsert", async _0xfc7f5d => {
      const _0x2c5de5 = _0xfc7f5d.messages[0x0];
      if (!_0x2c5de5.message) {
        return;
      }
      const _0x3445d5 = _0x2c5de5.message.conversation || _0x2c5de5.message.extendedTextMessage?.["text"];
      const _0x23a5a8 = _0x2c5de5.key.remoteJid;
      const _0x2db2d9 = _0x2c5de5.message.extendedTextMessage && _0x2c5de5.message.extendedTextMessage.contextInfo.stanzaId === _0x7f235a;
      if (_0x2db2d9) {
        await _0x436d80.sendMessage(_0x23a5a8, {
          'react': {
            'text': '🎃',
            'key': _0x2c5de5.key
          }
        });
        switch (_0x3445d5) {
          case "1.1":
            config.MODE = "public";
            _0x527da1("Bot mode has been set to 'public'.");
            break;
          case "1.2":
            config.MODE = "private";
            _0x527da1("Bot mode has been set to 'private'.");
            break;
          case "1.3":
            config.MODE = "groups";
            _0x527da1("Bot mode has been set to 'groups'.");
            break;
          case "1.4":
            config.MODE = "inbox";
            _0x527da1("Bot mode has been set to 'inbox'.");
            break;
          case "2.1":
            config.AUTO_READ_STATUS = true;
            _0x527da1("Auto-read status has been enabled.");
            break;
          case '2.2':
            config.AUTO_READ_STATUS = false;
            _0x527da1("Auto-read status has been disabled.");
            break;
          case "3.1":
            config.READ_CMD = true;
            _0x527da1("Read command has been enabled.");
            break;
          case "3.2":
            config.READ_CMD = false;
            _0x527da1("Read command has been disabled.");
            break;
          case "4.1":
            config.AUTO_VOICE = true;
            _0x527da1("Auto voice has been enabled.");
            break;
          case "4.2":
            config.AUTO_VOICE = false;
            _0x527da1("Auto voice has been disabled.");
            break;
          case '5.1':
            config.AUTO_STICKER = true;
            _0x527da1("Auto sticker has been enabled.");
            break;
          case "5.2":
            config.AUTO_STICKER = false;
            _0x527da1("Auto sticker has been disabled.");
            break;
          case '6.1':
            config.AUTO_REPLY = true;
            _0x527da1("Auto reply has been enabled.");
            break;
          case "6.2":
            config.AUTO_REPLY = false;
            _0x527da1("Auto reply has been disabled.");
            break;
          case '7.1':
            config.AUTO_REACT = true;
            _0x527da1("Auto react has been enabled.");
            break;
          case "7.2":
            config.AUTO_REACT = false;
            _0x527da1("Auto react has been disabled.");
            break;
          case "8.1":
            config.WELCOME = true;
            _0x527da1("Welcome feature has been enabled.");
            break;
          case "8.2":
            config.WELCOME = false;
            _0x527da1("Welcome feature has been disabled.");
            break;
          case "9.1":
            config.ANTI_BAD = true;
            _0x527da1("Anti bad word filter has been enabled.");
            break;
          case "9.2":
            config.ANTI_BAD = false;
            _0x527da1("Anti bad word filter has been disabled.");
            break;
          case "10.1":
            config.ANTI_BOT = true;
            _0x527da1("Anti bot filter has been enabled.");
            break;
          case '10.2':
            config.ANTI_BOT = false;
            _0x527da1("Anti bot filter has been disabled.");
            break;
          case "11.1":
            config.ANTI_LINK = true;
            _0x527da1("Anti link filter has been enabled.");
            break;
          case "11.2":
            config.ANTI_LINK = false;
            _0x527da1("Anti link filter has been disabled.");
            break;
          case "12.1":
            config.ALWAYS_ONLINE = true;
            _0x527da1("Always online mode has been enabled.");
            break;
          case "12.2":
            config.ALWAYS_ONLINE = false;
            _0x527da1("Always online mode has been disabled.");
            break;
          case "13.1":
            config.COUNTRY_BLOCK = true;
            _0x527da1("COUNTRY block has been enabled.");
            break;
          case "13.2":
            config.COUNTRY_BLOCK = false;
            _0x527da1("COUNTRY block has been disabled.");
            break;
          case '14.1':
            config.AUTO_NEWS = true;
            _0x527da1("Auto news has been enabled.");
            break;
          case "14.2":
            config.AUTO_NEWS = false;
            _0x527da1("Auto news has been disabled.");
            break;
          case "15.1":
            config.AUTO_TYPING = true;
            _0x527da1("Auto typing has been enabled.");
            break;
          case "15.2":
            config.AUTO_TYPING = false;
            _0x527da1("Auto typing has been disabled.");
            break;
          case "16.1":
            config.AUTO_RECORDING = true;
            _0x527da1("Auto recording has been enabled.");
            break;
          case "16.2":
            config.AUTO_RECORDING = false;
            _0x527da1("Auto recording has been disabled.");
            break;
          default:
            _0x527da1("Invalid setting option.");
            return;
        }
        fs.writeFileSync(configPath, "module.exports = " + JSON.stringify(config, null, 0x2) + ';');
      }
    });
  } catch (_0x466f9d) {
    console.log(_0x466f9d);
    _0x527da1('' + _0x466f9d);
  }
});