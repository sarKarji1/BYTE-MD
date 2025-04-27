const {
  fetchJson
} = require('../lib/functions');
const {
  downloadTiktok
} = require("@mrnima/tiktok-downloader");
const getFBInfo = require("@xaviabot/fb-downloader");
const cheerio = require("cheerio");
const config = require("../config.cjs");
const {
  igdl
} = require("ruhend-scraper");
const axios = require("axios");
const {
  Hamza,
  commands
} = require("../lib/command");
const fetch = require("node-fetch");
Hamza({
  'pattern': "tiktok",
  'alias': ['tt'],
  'react': '🎥',
  'desc': "download tt videos",
  'category': "download",
  'filename': __filename
}, async (_0x392491, _0x2268a3, _0x14f4a0, {
  from: _0x3903c8,
  quoted: _0x4d9b8f,
  body: _0x232c9b,
  isCmd: _0x14b656,
  command: _0x523ad8,
  args: _0x4c77d9,
  q: _0x21492b,
  isGroup: _0x4a6c20,
  sender: _0x123630,
  senderNumber: _0x183152,
  botNumber2: _0x2f6463,
  botNumber: _0x5f3bd6,
  pushname: _0x49cb59,
  isMe: _0x356c73,
  isOwner: _0x4cf3f8,
  groupMetadata: _0x47fe45,
  groupName: _0x5ef597,
  participants: _0xd0f2f0,
  groupAdmins: _0x5b8281,
  isBotAdmins: _0x3f723e,
  isAdmins: _0x30fbae,
  reply: _0x184aae
}) => {
  try {
    if (!_0x21492b && !_0x21492b.startsWith('https://')) {
      return _0x184aae("*give me tiktok url ❌*");
    }
    _0x14f4a0.react('⬇️');
    let _0x3667fa = await downloadTiktok(_0x21492b);
    let _0x5a20b1 = "*BYTE TIKTOK DOWNLOADER* \n\n *Please reply with a number*\n\nTitle * " + _0x3667fa.result.title + "\n\n*!.* Tiktok Video\n\n   1 |  SD QUALITY\n   2 |  HD QUALITY\n\n*!.* Tiktok Audio\n\n   3 |  Audio file\n   \n*URL:* " + _0x21492b;
    const _0x314dcc = await _0x392491.sendMessage(_0x3903c8, {
      'image': {
        'url': _0x3667fa.result.image
      },
      'caption': _0x5a20b1,
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
          'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png',
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    });
    const _0x1099d4 = _0x314dcc.key.id;
    _0x392491.ev.on("messages.upsert", async _0x158510 => {
      const _0x334af8 = _0x158510.messages[0x0];
      if (!_0x334af8.message) {
        return;
      }
      const _0x2ddff6 = _0x334af8.message.conversation || _0x334af8.message.extendedTextMessage?.["text"];
      const _0x36bf10 = _0x334af8.key.remoteJid;
      const _0x3c0a1f = _0x334af8.message.extendedTextMessage && _0x334af8.message.extendedTextMessage.contextInfo.stanzaId === _0x1099d4;
      if (_0x3c0a1f) {
        await _0x392491.sendMessage(_0x36bf10, {
          'react': {
            'text': '⬇️',
            'key': _0x334af8.key
          }
        });
        let _0x5835cf = _0x3667fa.result;
        await _0x392491.sendMessage(_0x36bf10, {
          'react': {
            'text': '⬆️',
            'key': _0x334af8.key
          }
        });
        if (_0x2ddff6 === '1') {
          await _0x392491.sendMessage(_0x36bf10, {
            'video': {
              'url': _0x5835cf.dl_link.download_mp4_1
            },
            'caption': "BYTE WHATSAPP BOT",
            'contextInfo': {
              'mentionedJid': ['923072380380@s.whatsapp.net'],
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
          });
        } else {
          if (_0x2ddff6 === '2') {
            await _0x392491.sendMessage(_0x36bf10, {
              'video': {
                'url': _0x5835cf.dl_link.download_mp4_2
              },
              'caption': "BYTE WHATSAPP BOT",
              'contextInfo': {
                'mentionedJid': ['923072380380@s.whatsapp.net'],
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
            });
          } else if (_0x2ddff6 === '3') {
            await _0x392491.sendMessage(_0x36bf10, {
              'audio': {
                'url': _0x5835cf.dl_link.download_mp3
              },
              'mimetype': "audio/mpeg"
            }, {
              'quoted': _0x334af8
            });
          }
        }
        await _0x392491.sendMessage(_0x36bf10, {
          'react': {
            'text': '✅',
            'key': _0x334af8.key
          }
        });
        console.log("Response sent successfully");
      }
    });
  } catch (_0x1912fe) {
    console.log(_0x1912fe);
    _0x184aae('' + _0x1912fe);
  }
});
Hamza({
  'pattern': 'fb',
  'alias': ["facebook"],
  'desc': "Download Facebook videos",
  'category': "download",
  'filename': __filename
}, async (_0x391156, _0x420077, _0x4993df, {
  from: _0x184f73,
  quoted: _0x223264,
  body: _0x28ee77,
  isCmd: _0x11a392,
  command: _0x1f047a,
  args: _0x28d08c,
  q: _0x2a7aab,
  isGroup: _0x25a34f,
  sender: _0x5da333,
  senderNumber: _0x372622,
  botNumber2: _0x3012f2,
  botNumber: _0x2faadf,
  pushname: _0x2de9a7,
  isMe: _0x434eba,
  isOwner: _0x58e23e,
  groupMetadata: _0x290855,
  groupName: _0x1ee546,
  participants: _0x3f11ad,
  groupAdmins: _0x4989ad,
  isBotAdmins: _0x2d025b,
  isAdmins: _0x353b3b,
  reply: _0x2450d1
}) => {
  try {
    if (!_0x2a7aab || !_0x2a7aab.startsWith("https://")) {
      return _0x391156.sendMessage(_0x184f73, {
        'text': "❌ Please provide a valid URL."
      }, {
        'quoted': _0x420077
      });
    }
    await _0x391156.sendMessage(_0x184f73, {
      'react': {
        'text': '⏳',
        'key': _0x420077.key
      }
    });
    const _0xdd4451 = await getFBInfo(_0x2a7aab);
    const _0x2171a6 = "BYTE FB DOWNLOADER \n\n🎞 TITLE 🎞 " + _0xdd4451.title + "\n\n Please reply with a number!\n\n[1] facebook Video\n1.1 |  SD QUALITY\n1.2 |  HD QUALITY\n\n[2] facebook Audio\n2.1 |  Audio file\n2.2 |  Document file\n2.3 |  Voice cut [ptt]\n\n\nFb-Url: -=-" + _0x2a7aab + " ";
    const _0x33d7d8 = await _0x391156.sendMessage(_0x184f73, {
      'image': {
        'url': _0xdd4451.thumbnail
      },
      'caption': _0x2171a6,
      'contextInfo': {
        'mentionedJid': ['923072380380@s.whatsapp.net'],
        'groupMentions': [],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363252060326102@newsletter',
          'newsletterName': 'TalkDrove',
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
    });
    const _0x1fd76f = _0x33d7d8.key.id;
    _0x391156.ev.on("messages.upsert", async _0x5ec131 => {
      const _0x5bd60d = _0x5ec131.messages[0x0];
      if (!_0x5bd60d.message) {
        return;
      }
      const _0xe363c0 = _0x5bd60d.message.conversation || _0x5bd60d.message.extendedTextMessage?.["text"];
      const _0x3eb046 = _0x5bd60d.key.remoteJid;
      const _0x582224 = _0x5bd60d.message.extendedTextMessage && _0x5bd60d.message.extendedTextMessage.contextInfo.stanzaId === _0x1fd76f;
      if (_0x582224) {
        await _0x391156.sendMessage(_0x3eb046, {
          'react': {
            'text': '⬇️',
            'key': _0x5bd60d.key
          }
        });
        await _0x391156.sendMessage(_0x3eb046, {
          'react': {
            'text': '⬆️',
            'key': _0x5bd60d.key
          }
        });
        if (_0xe363c0 === "1.1") {
          await _0x391156.sendMessage(_0x3eb046, {
            'video': {
              'url': _0xdd4451.sd
            },
            'caption': "BYTE WHATSAPP BOT",
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
                'sourceUrl': 'https://talkdrove.com',
                'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          });
        } else {
          if (_0xe363c0 === "1.2") {
            await _0x391156.sendMessage(_0x3eb046, {
              'video': {
                'url': _0xdd4451.hd
              },
              'caption': "BYTE WHATSAPP BOT",
              'contextInfo': {
                'mentionedJid': ['923072380380@s.whatsapp.net'],
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
                  'body': "TalkDrove",
                  'mediaType': 0x1,
                  'sourceUrl': "https://talkdrove.com",
                  'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            });
          } else {
            if (_0xe363c0 === "2.1") {
              await _0x391156.sendMessage(_0x3eb046, {
                'audio': {
                  'url': _0xdd4451.sd
                },
                'mimetype': "audio/mpeg"
              }, {
                'quoted': _0x5bd60d
              });
            } else {
              if (_0xe363c0 === "2.2") {
                await _0x391156.sendMessage(_0x3eb046, {
                  'document': {
                    'url': _0xdd4451.sd
                  },
                  'mimetype': "audio/mpeg",
                  'fileName': "Hamza/FBDL.mp3",
                  'caption': "*TalkDrove*",
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
                      'body': "TalkDrove",
                      'mediaType': 0x1,
                      'sourceUrl': "https://talkdrove.com",
                      'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                      'renderLargerThumbnail': false,
                      'showAdAttribution': true
                    }
                  }
                }, {
                  'quoted': _0x5bd60d
                });
              } else if (_0xe363c0 === "2.3") {
                await _0x391156.sendMessage(_0x3eb046, {
                  'audio': {
                    'url': _0xdd4451.sd
                  },
                  'mimetype': "audio/mp4",
                  'ptt': true
                }, {
                  'quoted': _0x5bd60d
                });
              }
            }
          }
        }
        await _0x391156.sendMessage(_0x3eb046, {
          'react': {
            'text': '✅',
            'key': _0x5bd60d.key
          }
        });
        console.log("Response sent successfully");
      }
    });
  } catch (_0x325fca) {
    console.log(_0x325fca);
    _0x2450d1('' + _0x325fca);
  }
});
Hamza({
  'pattern': "twitter",
  'alias': ["tweet", "twdl"],
  'desc': "Download Twitter videos",
  'category': 'download',
  'filename': __filename
}, async (_0x4c3b4f, _0x5dea3a, _0x44c488, {
  from: _0x2bcb97,
  quoted: _0x3821ac,
  body: _0x5b6cfe,
  isCmd: _0x23b295,
  command: _0x50c592,
  args: _0xce0361,
  q: _0x1abfcc,
  isGroup: _0x2e91f2,
  sender: _0xeecb72,
  senderNumber: _0x30231d,
  botNumber2: _0xf6fc91,
  botNumber: _0x1a1fc5,
  pushname: _0x2fc3c6,
  isMe: _0x268ad0,
  isOwner: _0x455712,
  groupMetadata: _0x298a08,
  groupName: _0x2c2015,
  participants: _0xb6d597,
  groupAdmins: _0x397f9b,
  isBotAdmins: _0x3fb0ae,
  isAdmins: _0xce24c5,
  reply: _0x4282af
}) => {
  try {
    if (!_0x1abfcc || !_0x1abfcc.startsWith("https://")) {
      return _0x4c3b4f.sendMessage(_0x2bcb97, {
        'text': "❌ Please provide a valid Twitter URL."
      }, {
        'quoted': _0x5dea3a
      });
    }
    await _0x4c3b4f.sendMessage(_0x2bcb97, {
      'react': {
        'text': '⏳',
        'key': _0x5dea3a.key
      }
    });
    const _0x2b0781 = await axios.get("https://www.dark-yasiya-api.site/download/twitter?url=" + _0x1abfcc);
    const _0x6aabc7 = _0x2b0781.data;
    if (!_0x6aabc7 || !_0x6aabc7.status || !_0x6aabc7.result) {
      return _0x44c488.reply("Failed to retrieve Twitter video. Please check the link and try again.");
    }
    const {
      desc: _0x581507,
      thumb: _0x3bcc5c,
      video_sd: _0x1f742c,
      video_hd: _0x5ae3dd
    } = _0x6aabc7.result;
    const _0x3553f4 = "BYTE TWITTER DOWNLOADER \n\n Description: " + (_0x581507 || "No description") + "\n\n Please reply with the number for your selection:\n\n[1] Twitter Video\n  1.1 |  SD QUALITY\n  1.2 |  HD QUALITY\n\n[2] Twitter Audio\n  2.1 |  Audio file\n  2.2 |  Document file\n  2.3 |  Voice (ptt)\n\nTwitter URL: " + _0x1abfcc;
    const _0x37f276 = await _0x4c3b4f.sendMessage(_0x2bcb97, {
      'image': {
        'url': _0x3bcc5c
      },
      'caption': _0x3553f4,
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
          'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    });
    const _0xec49b1 = _0x37f276.key.id;
    _0x4c3b4f.ev.on('messages.upsert', async _0x2a6a63 => {
      const _0x2b8f3e = _0x2a6a63.messages[0x0];
      if (!_0x2b8f3e.message) {
        return;
      }
      const _0x1dde55 = _0x2b8f3e.message.conversation || _0x2b8f3e.message.extendedTextMessage?.['text'];
      const _0x33e015 = _0x2b8f3e.key.remoteJid;
      const _0x38f150 = _0x2b8f3e.message.extendedTextMessage && _0x2b8f3e.message.extendedTextMessage.contextInfo.stanzaId === _0xec49b1;
      if (_0x38f150) {
        await _0x4c3b4f.sendMessage(_0x33e015, {
          'react': {
            'text': '⬇️',
            'key': _0x2b8f3e.key
          }
        });
        if (_0x1dde55 === "1.1") {
          await _0x4c3b4f.sendMessage(_0x33e015, {
            'video': {
              'url': _0x1f742c
            },
            'caption': "BYTE",
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
                'sourceUrl': 'https://talkdrove.com',
                'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          });
        } else {
          if (_0x1dde55 === "1.2") {
            await _0x4c3b4f.sendMessage(_0x33e015, {
              'video': {
                'url': _0x5ae3dd
              },
              'caption': "BYTE WHATSAPP BOT",
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
                  'body': "TalkDrove",
                  'mediaType': 0x1,
                  'sourceUrl': "https://talkdrove.com",
                  'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            });
          } else {
            if (_0x1dde55 === "2.1") {
              await _0x4c3b4f.sendMessage(_0x33e015, {
                'audio': {
                  'url': _0x1f742c
                },
                'mimetype': "audio/mpeg"
              }, {
                'quoted': _0x2b8f3e
              });
            } else {
              if (_0x1dde55 === "2.2") {
                await _0x4c3b4f.sendMessage(_0x33e015, {
                  'document': {
                    'url': _0x1f742c
                  },
                  'mimetype': 'audio/mpeg',
                  'fileName': "Hamza/TWDL.mp3",
                  'caption': "*TalkDrove*",
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
                      'body': "TalkDrove",
                      'mediaType': 0x1,
                      'sourceUrl': "https://talkdrove.com",
                      'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                      'renderLargerThumbnail': false,
                      'showAdAttribution': true
                    }
                  }
                }, {
                  'quoted': _0x2b8f3e
                });
              } else if (_0x1dde55 === '2.3') {
                await _0x4c3b4f.sendMessage(_0x33e015, {
                  'audio': {
                    'url': _0x1f742c
                  },
                  'mimetype': 'audio/mp4',
                  'ptt': true
                }, {
                  'quoted': _0x2b8f3e
                });
              }
            }
          }
        }
        await _0x4c3b4f.sendMessage(_0x33e015, {
          'react': {
            'text': '✅',
            'key': _0x2b8f3e.key
          }
        });
        console.log("Twitter response sent successfully");
      }
    });
  } catch (_0x286f06) {
    console.log(_0x286f06);
    _0x4282af("An error occurred: " + _0x286f06);
  }
});
Hamza({
  'pattern': "mediafire",
  'desc': "To download MediaFire files.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x33a941, _0x5d8e28, _0x2c004b, {
  from: _0xcf4602,
  quoted: _0x233a4f,
  body: _0x485ca3,
  isCmd: _0x397789,
  command: _0x31f656,
  args: _0x3dea33,
  q: _0x3ab42c,
  isGroup: _0xd84974,
  sender: _0x3c53f6,
  senderNumber: _0x234639,
  botNumber2: _0x49628d,
  botNumber: _0x40f47f,
  pushname: _0x423224,
  isMe: _0x381602,
  isOwner: _0x1acdb9,
  groupMetadata: _0x9266ff,
  groupName: _0x246bb4,
  participants: _0x3a7565,
  groupAdmins: _0x31b687,
  isBotAdmins: _0x3daebe,
  isAdmins: _0x5052aa,
  reply: _0x46a3ba
}) => {
  try {
    if (!_0x3ab42c) {
      return _0x2c004b.reply("Please provide a valid MediaFire link.");
    }
    _0x2c004b.react('⬇️');
    const _0x208ef0 = await axios.get("https://www.dark-yasiya-api.site/download/mfire?url=" + _0x3ab42c);
    const _0x276d7c = _0x208ef0.data;
    if (!_0x276d7c || !_0x276d7c.status || !_0x276d7c.result || !_0x276d7c.result.dl_link) {
      return _0x2c004b.reply("Failed to fetch MediaFire download link. Ensure the link is valid and public.");
    }
    const _0x2340c1 = _0x276d7c.result.dl_link;
    const _0x5d9a06 = _0x276d7c.result.fileName || "mediafire_download";
    const _0x18b8c9 = _0x276d7c.result.fileType || "application/octet-stream";
    _0x2c004b.react('⬆️');
    let _0x25d83f = "  BYTE MEDIAFIRE DL\n\n        File Name : " + _0x5d9a06 + "\n\n        File Type : " + _0x18b8c9 + "\n        ";
    await _0x33a941.sendMessage(_0xcf4602, {
      'document': {
        'url': _0x2340c1
      },
      'mimetype': _0x18b8c9,
      'fileName': _0x5d9a06,
      'caption': _0x25d83f,
      'contextInfo': {
        'mentionedJid': ['923072380380@s.whatsapp.net'],
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
          'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png',
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    });
  } catch (_0x5ed770) {
    console.error(_0x5ed770);
    _0x46a3ba("An error occurred: " + _0x5ed770.message);
  }
});
Hamza({
  'pattern': 'ig',
  'desc': "To download instagram videos.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x1774f0, _0x4ff590, _0x5e2205, {
  from: _0x580714,
  quoted: _0x230818,
  body: _0x39c32e,
  isCmd: _0x5a30ed,
  command: _0x9de67b,
  args: _0x2bbfb1,
  q: _0x3695bf,
  isGroup: _0x3fa7cf,
  sender: _0x504e27,
  senderNumber: _0xb2d263,
  botNumber2: _0x3a4908,
  botNumber: _0x5f44f0,
  pushname: _0x354096,
  isMe: _0x32595a,
  isOwner: _0x2204f7,
  groupMetadata: _0x1a2510,
  groupName: _0x4fb558,
  participants: _0x18fe3c,
  groupAdmins: _0x3897c1,
  isBotAdmins: _0x24e541,
  isAdmins: _0x34ac8d,
  reply: _0x57b5ed
}) => {
  try {
    if (!_0x3695bf) {
      return _0x5e2205.reply("Please Give Me a vaild Link...");
    }
    _0x5e2205.react('⬇️');
    let _0x1ad62b = await igdl(_0x3695bf);
    let _0x2cbc32 = await _0x1ad62b.data;
    for (let _0x3ce1ca = 0x0; _0x3ce1ca < 0x14; _0x3ce1ca++) {
      let _0x284b97 = _0x2cbc32[_0x3ce1ca];
      let _0x3328fe = _0x284b97.url;
      _0x5e2205.react('⬆️');
      await _0x1774f0.sendMessage(_0x580714, {
        'video': {
          'url': _0x3328fe
        },
        'mimetype': 'video/mp4',
        'caption': 'TalkDrove',
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
            'sourceUrl': 'https://talkdrove.com',
            'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
            'renderLargerThumbnail': false,
            'showAdAttribution': true
          }
        }
      }, {
        'quoted': _0x4ff590
      });
      _0x5e2205.react('✅');
    }
  } catch (_0x83ea66) {
    console.log(_0x83ea66);
  }
});
async function xdl(_0x1dc150) {
  return new Promise((_0x404942, _0x1dd5b1) => {
    fetch('' + _0x1dc150, {
      'method': "get"
    }).then(_0x72b89f => _0x72b89f.text()).then(_0x10ad7e => {
      const _0x1900e6 = cheerio.load(_0x10ad7e, {
        'xmlMode': false
      });
      const _0x4ec761 = _0x1900e6("meta[property=\"og:title\"]").attr("content");
      const _0x392d83 = _0x1900e6("meta[property=\"og:duration\"]").attr("content");
      const _0x3c1a4d = _0x1900e6("meta[property=\"og:image\"]").attr("content");
      const _0x25d421 = _0x1900e6("meta[property=\"og:video:type\"]").attr("content");
      const _0x47bc42 = _0x1900e6("meta[property=\"og:video:width\"]").attr("content");
      const _0x39c1c1 = _0x1900e6("meta[property=\"og:video:height\"]").attr("content");
      const _0x1222d1 = _0x1900e6("span.metadata").text();
      const _0x16faa1 = _0x1900e6("#video-player-bg > script:nth-child(6)").html();
      const _0x1f47ec = {
        'low': (_0x16faa1.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[0x1],
        'high': _0x16faa1.match("html5player.setVideoUrlHigh\\('(.*?)'\\);" || [])[0x1],
        'HLS': _0x16faa1.match("html5player.setVideoHLS\\('(.*?)'\\);" || [])[0x1],
        'thumb': _0x16faa1.match("html5player.setThumbUrl\\('(.*?)'\\);" || [])[0x1],
        'thumb69': _0x16faa1.match("html5player.setThumbUrl169\\('(.*?)'\\);" || [])[0x1],
        'thumbSlide': _0x16faa1.match("html5player.setThumbSlide\\('(.*?)'\\);" || [])[0x1],
        'thumbSlideBig': _0x16faa1.match("html5player.setThumbSlideBig\\('(.*?)'\\);" || [])[0x1]
      };
      _0x404942({
        'status': true,
        'result': {
          'title': _0x4ec761,
          'URL': _0x1dc150,
          'duration': _0x392d83,
          'image': _0x3c1a4d,
          'videoType': _0x25d421,
          'videoWidth': _0x47bc42,
          'videoHeight': _0x39c1c1,
          'info': _0x1222d1,
          'files': _0x1f47ec
        }
      });
    })["catch"](_0x50e3db => _0x1dd5b1({
      'status': false,
      'result': _0x50e3db
    }));
  });
}
Hamza({
  'pattern': "xnxxdown",
  'alias': ["dlxnxx", 'xnxxdl'],
  'react': '🫣',
  'desc': "Download xnxx videos",
  'category': "nsfw",
  'use': ".xnxx <xnxx link>",
  'filename': __filename
}, async (_0x2cf502, _0x2fc4bd, _0x5096a9, {
  from: _0x2e6efe,
  l: _0x11547d,
  quoted: _0x34a955,
  body: _0x43bc57,
  isCmd: _0x5b4976,
  command: _0x2d2b70,
  args: _0x358de3,
  q: _0x5509df,
  isGroup: _0x107a58,
  sender: _0x4305a4,
  senderNumber: _0x120165,
  botNumber2: _0x292936,
  botNumber: _0x445687,
  pushname: _0x485024,
  isMe: _0x1d7e2c,
  isOwner: _0x2fbb92,
  groupMetadata: _0x2ff0a1,
  groupName: _0x5357b2,
  participants: _0x2f31da,
  groupAdmins: _0x5ebbb5,
  isBotAdmins: _0x977b6e,
  isAdmins: _0x184535,
  reply: _0x4893e2
}) => {
  try {
    if (!_0x5509df) {
      return _0x4893e2("*Please give me url !!*");
    }
    let _0x485fb4 = await xdl(_0x5509df);
    let _0x1e30b4 = _0x485fb4.result.title;
    await _0x2cf502.sendMessage(_0x2e6efe, {
      'video': {
        'url': _0x485fb4.result.files.high
      },
      'caption': _0x1e30b4,
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
          'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x2fc4bd
    });
  } catch (_0x5680be) {
    _0x4893e2("*Error !!*");
    console.log(_0x5680be);
  }
});
Hamza({
  'pattern': "xvdown",
  'alias': ['dlxv', "xvdl"],
  'react': '🫣',
  'desc': "Download xvideos videos",
  'category': 'nsfw',
  'use': ".xv <xvideos link>",
  'filename': __filename
}, async (_0x3161c9, _0x11b36d, _0xc52419, {
  from: _0x25085b,
  l: _0x229d9d,
  quoted: _0xb01c38,
  body: _0x2156f4,
  isCmd: _0xce863,
  command: _0x1545ae,
  args: _0xe7d10f,
  q: _0x445b07,
  isGroup: _0x220806,
  sender: _0x3be075,
  senderNumber: _0x22c7a4,
  botNumber2: _0x196294,
  botNumber: _0x3cf498,
  pushname: _0x5c3b0c,
  isMe: _0x4e8b2d,
  isOwner: _0x3eb26d,
  groupMetadata: _0x55297b,
  groupName: _0x2c4119,
  participants: _0x200b09,
  groupAdmins: _0x17ae40,
  isBotAdmins: _0x2371a4,
  isAdmins: _0x1224c1,
  reply: _0x58bc8c
}) => {
  try {
    if (!_0x445b07) {
      return _0x58bc8c("*Please give me url !!*");
    }
    let _0x4cba75 = await fetchJson('https://www.dark-yasiya-api.site/download/xvideo?url=' + _0x445b07);
    const _0x1333b7 = "   🔞 *XVIDEO DOWNLOADER* 🔞\n\n     \n• *Title* - " + _0x4cba75.result.title + "\n\n• *Views* - " + _0x4cba75.result.views + "\n\n• *Like* - " + _0x4cba75.result.like + "\n\n• *Deslike* - " + _0x4cba75.result.deslike + "\n\n• *Size* - " + _0x4cba75.result.size;
    await _0x3161c9.sendMessage(_0x25085b, {
      'video': {
        'url': _0x4cba75.result.dl_link
      },
      'caption': _0x1333b7,
      'contextInfo': {
        'mentionedJid': ['923072380380@s.whatsapp.net'],
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
          'body': "TalkDrove",
          'mediaType': 0x1,
          'sourceUrl': 'https://talkdrove.com',
          'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    });
  } catch (_0x31d5a8) {
    _0x58bc8c("*Error !!*");
    console.log(_0x31d5a8);
  }
});
const fs = require('fs');
const path = require("path");
Hamza({
  'pattern': "baiscope",
  'react': '📑',
  'category': "download",
  'desc': "baiscope.lk",
  'filename': __filename
}, async (_0x39c6a5, _0x2b7f21, _0x326fbd, {
  from: _0x788a5c,
  q: _0x676388,
  isDev: _0x404577,
  reply: _0x8c10bf
}) => {
  try {
    if (!_0x676388) {
      return await _0x8c10bf("*Please provide a search query! (e.g., Avatar)*");
    }
    const _0xd9efc6 = "https://www.baiscope.lk/?s=" + encodeURIComponent(_0x676388);
    const _0x528192 = await axios.get(_0xd9efc6);
    const _0x1a9b58 = cheerio.load(_0x528192.data);
    let _0x129b2f = [];
    _0x1a9b58("article.elementor-post").each((_0x962032, _0xaddd9a) => {
      const _0x3c0af5 = _0x1a9b58(_0xaddd9a).find("h5.elementor-post__title > a").text().trim();
      const _0x56cef7 = _0x1a9b58(_0xaddd9a).find("h5.elementor-post__title > a").attr("href");
      const _0x4ae5bc = _0x1a9b58(_0xaddd9a).find(".elementor-post__thumbnail img").attr("src");
      if (_0x3c0af5 && _0x56cef7 && _0x4ae5bc) {
        _0x129b2f.push({
          'title': _0x3c0af5,
          'episodeLink': _0x56cef7,
          'imgUrl': _0x4ae5bc
        });
      }
    });
    if (_0x129b2f.length === 0x0) {
      return await _0x8c10bf("No results found for: " + _0x676388);
    }
    let _0x1a0eb0 = "📺 Search Results for *" + _0x676388 + ":*\n\n";
    _0x129b2f.forEach((_0x50b216, _0xb3d605) => {
      _0x1a0eb0 += '*' + (_0xb3d605 + 0x1) + ".* " + _0x50b216.title + "\n🔗 Link: " + _0x50b216.episodeLink + "\n\n";
    });
    const _0x575d31 = await _0x39c6a5.sendMessage(_0x788a5c, {
      'text': _0x1a0eb0,
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
          'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x326fbd
    });
    const _0x4575c5 = _0x575d31.key.id;
    _0x39c6a5.ev.on("messages.upsert", async _0x38eaf1 => {
      const _0x357127 = _0x38eaf1.messages[0x0];
      if (!_0x357127.message) {
        return;
      }
      const _0x32b083 = _0x357127.message.conversation || _0x357127.message.extendedTextMessage?.["text"];
      const _0x4b1b85 = _0x357127.key.remoteJid;
      const _0x594d9f = _0x357127.message.extendedTextMessage && _0x357127.message.extendedTextMessage.contextInfo.stanzaId === _0x4575c5;
      if (_0x594d9f) {
        const _0x13a1fa = parseInt(_0x32b083.trim());
        if (!isNaN(_0x13a1fa) && _0x13a1fa > 0x0 && _0x13a1fa <= _0x129b2f.length) {
          const _0x1087d4 = _0x129b2f[_0x13a1fa - 0x1];
          const _0x286fd7 = await axios.get(_0x1087d4.episodeLink);
          const _0x367cd4 = cheerio.load(_0x286fd7.data);
          const _0x3917d7 = _0x367cd4('a.dlm-buttons-button').attr("href");
          if (_0x3917d7) {
            await _0x39c6a5.sendMessage(_0x4b1b85, {
              'image': {
                'url': _0x1087d4.imgUrl
              },
              'caption': "🎬 *" + _0x1087d4.title + "*\n🔗 Link: " + _0x1087d4.episodeLink + "\n⬇️ Download will follow.",
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
                  'body': "TalkDrove",
                  'mediaType': 0x1,
                  'sourceUrl': 'https://talkdrove.com',
                  'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x357127
            });
            const _0x275241 = path.join(__dirname, "downloaded_episode.zip");
            const _0x3968d1 = fs.createWriteStream(_0x275241);
            const _0x50d748 = await axios({
              'url': _0x3917d7,
              'method': "GET",
              'responseType': "stream"
            });
            _0x50d748.data.pipe(_0x3968d1);
            _0x3968d1.on("finish", async () => {
              await _0x39c6a5.sendMessage(_0x4b1b85, {
                'document': {
                  'url': _0x275241
                },
                'mimetype': "application/zip",
                'fileName': _0x1087d4.title + '.zip',
                'caption': '*' + _0x1087d4.title + "*\n\nTalkDrove",
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
                    'sourceUrl': "https://talkdrove.com",
                    'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                    'renderLargerThumbnail': false,
                    'showAdAttribution': true
                  }
                }
              }, {
                'quoted': _0x357127
              });
              fs.unlinkSync(_0x275241);
            });
            _0x3968d1.on("error", _0x451309 => {
              console.error("Error downloading ZIP file:", _0x451309);
              _0x8c10bf("*Error downloading the episode ZIP file.*");
            });
          } else {
            await _0x8c10bf("*Download link not found for the selected episode.*");
          }
        } else {
          await _0x8c10bf("*Invalid selection. Please choose a valid number.*");
        }
      }
    });
  } catch (_0x25461) {
    console.error(_0x25461);
    await _0x8c10bf("*An error occurred while scraping the data.*");
  }
});
Hamza({
  'pattern': "ginisisila",
  'react': '📑',
  'category': 'download',
  'desc': "ginisisilacartoon.net",
  'filename': __filename
}, async (_0x47999f, _0x39fc2a, _0x27b9d, {
  from: _0x4f7f7e,
  q: _0x465ab3,
  isDev: _0x2342e1,
  reply: _0x32f17c
}) => {
  try {
    if (!_0x465ab3) {
      return await _0x32f17c("*Please provide a search query! (e.g., Garfield)*");
    }
    const _0x3a1ee7 = 'https://ginisisilacartoon.net/search.php?q=' + encodeURIComponent(_0x465ab3);
    const _0x12064d = await axios.get(_0x3a1ee7);
    const _0x975b1c = cheerio.load(_0x12064d.data);
    let _0x10447d = [];
    _0x975b1c("div.inner-video-cell").each((_0x108b38, _0x44bb01) => {
      const _0xfff64e = _0x975b1c(_0x44bb01).find("div.video-title > a").attr("title");
      const _0x225a5c = _0x975b1c(_0x44bb01).find('div.posted-time').text().trim();
      const _0x214b6e = _0x975b1c(_0x44bb01).find("div.video-title > a").attr("href");
      const _0x182f61 = _0x975b1c(_0x44bb01).find("div.inner-video-thumb-wrapper img").attr("src");
      if (_0xfff64e && _0x214b6e) {
        _0x10447d.push({
          'title': _0xfff64e,
          'postedTime': _0x225a5c,
          'episodeLink': "https://ginisisilacartoon.net/" + _0x214b6e,
          'imageUrl': _0x182f61
        });
      }
    });
    if (_0x10447d.length === 0x0) {
      return await _0x32f17c("No results found for: " + _0x465ab3);
    }
    let _0x32aa56 = "📺 Search Results for *" + _0x465ab3 + ":*\n\n";
    _0x10447d.forEach((_0x4d8551, _0x4be5c5) => {
      _0x32aa56 += '*' + (_0x4be5c5 + 0x1) + ".* " + _0x4d8551.title + "\n🗓️ Posted: " + _0x4d8551.postedTime + "\n🔗 Link: " + _0x4d8551.episodeLink + "\n\n";
    });
    const _0x5f2211 = await _0x47999f.sendMessage(_0x4f7f7e, {
      'text': _0x32aa56,
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
          'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x27b9d
    });
    const _0x6ae76c = _0x5f2211.key.id;
    _0x47999f.ev.on("messages.upsert", async _0x30f921 => {
      const _0x7d402e = _0x30f921.messages[0x0];
      if (!_0x7d402e.message) {
        return;
      }
      const _0x5b9286 = _0x7d402e.message.conversation || _0x7d402e.message.extendedTextMessage?.['text'];
      const _0x1ea1b5 = _0x7d402e.key.remoteJid;
      const _0x184c04 = _0x7d402e.message.extendedTextMessage && _0x7d402e.message.extendedTextMessage.contextInfo.stanzaId === _0x6ae76c;
      if (_0x184c04) {
        const _0x71d613 = parseInt(_0x5b9286.trim());
        if (!isNaN(_0x71d613) && _0x71d613 > 0x0 && _0x71d613 <= _0x10447d.length) {
          const _0x4cf0c6 = _0x10447d[_0x71d613 - 0x1];
          const _0x4ab878 = "*🪄 ɴᴀᴍᴇ:-* " + _0x4cf0c6.title + "\n⏳ *ᴅᴀᴛᴇ:-* " + _0x4cf0c6.postedTime + "\n📎 *ᴇᴘɪꜱᴏᴅᴇ ʟɪɴᴋ*:- " + _0x4cf0c6.episodeLink + "\n\n☘ *We are uploading the Movie/Episode you requested.*";
          const _0x509425 = {
            'image': {
              'url': _0x4cf0c6.imageUrl
            },
            'caption': _0x4ab878,
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
                'body': "TalkDrove",
                'mediaType': 0x1,
                'sourceUrl': "https://talkdrove.com",
                'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          };
          await _0x47999f.sendMessage(_0x1ea1b5, _0x509425, {
            'quoted': _0x7d402e
          });
          const _0x183f8d = await axios.get(_0x4cf0c6.episodeLink);
          const _0x4b08e4 = cheerio.load(_0x183f8d.data);
          const _0x3316f5 = _0x4b08e4("div#player-holder iframe").attr("src");
          if (_0x3316f5) {
            const _0x50aed1 = "https://api.fgmods.xyz/api/downloader/gdrive?url=" + _0x3316f5 + '&apikey=mnp3grlZ';
            try {
              const _0xee09fb = await axios.get(_0x50aed1);
              const _0x7f94f = _0xee09fb.data.result.downloadUrl;
              if (_0x7f94f) {
                await _0x47999f.sendMessage(_0x1ea1b5, {
                  'document': {
                    'url': _0x7f94f
                  },
                  'mimetype': "video/mp4",
                  'fileName': 'Hamza|' + _0x4cf0c6.title + ".mp4",
                  'caption': _0x4cf0c6.title + " |  BYTE\n\nTalkDrove",
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
                      'sourceUrl': 'https://talkdrove.com',
                      'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                      'renderLargerThumbnail': false,
                      'showAdAttribution': true
                    }
                  }
                }, {
                  'quoted': _0x7d402e
                });
              } else {
                await _0x32f17c("Failed to retrieve the download link for this episode.");
              }
            } catch (_0x5c87d9) {
              console.error("Error fetching the download link:", _0x5c87d9);
              await _0x32f17c("An error occurred while trying to fetch the download link.");
            }
          } else {
            await _0x32f17c("No downloadable link found for this episode.");
          }
        } else {
          await _0x32f17c("Please reply with a valid number from the list.");
        }
      }
    });
  } catch (_0x8291ab) {
    _0x32f17c("*Error occurred while scraping!*");
    console.error(_0x8291ab);
  }
});
Hamza({
  'pattern': "apk",
  'desc': "Download apk.",
  'category': "download",
  'filename': __filename
}, async (_0x314eb1, _0x3572c5, _0x347a7b, {
  from: _0x42bc4a,
  quoted: _0x23adac,
  body: _0x50a40d,
  isCmd: _0x5f5bb8,
  command: _0x3801c9,
  args: _0x5ce85d,
  q: _0x1b6b4a,
  isGroup: _0x7bbc33,
  sender: _0x278d83,
  senderNumber: _0x3919fc,
  botNumber2: _0x55b9d2,
  botNumber: _0x20c146,
  pushname: _0x42ba0e,
  isMe: _0xcf93f,
  isOwner: _0x4ff8b8,
  groupMetadata: _0x359081,
  groupName: _0x36a501,
  participants: _0x42a36c,
  groupAdmins: _0x274cbd,
  isBotAdmins: _0x3acc2b,
  isAdmins: _0x488ed2,
  reply: _0xf50450
}) => {
  try {
    await _0x347a7b.react('⬇');
    const _0xc1f9e7 = "http://ws75.aptoide.com/api/7/apps/search/query=" + _0x1b6b4a + '/limit=1';
    const _0x15516d = await axios.get(_0xc1f9e7);
    const _0x270f9d = _0x15516d.data;
    let _0x43b438 = _0x270f9d.datalist.list[0x0].size % 0xf4240;
    let _0x31428f = '.' + _0x43b438;
    let _0x4b0f81 = _0x270f9d.datalist.list[0x0].size / 0xf4240;
    let _0x4395c1 = _0x4b0f81 - _0x31428f;
    let _0x208f8d = "\n*「 BYTE APK DOWNLOADER 」*\n\n*╭── APK Details ──◦•◦•*\n*╎*\n*╎* *NAME :* " + _0x270f9d.datalist.list[0x0].name + "\n*╎* *SIZE :* " + _0x4395c1 + "MB\n*╎* *PACKAGE :* " + _0x270f9d.datalist.list[0x0]["package"] + "\n*╎* *LAST UPDATE :* " + _0x270f9d.datalist.list[0x0].updated + "\n*╎* *DEVELOPER :* " + _0x270f9d.datalist.list[0x0].developer.name + "\n*╎*\n*╰────────────────────◦•◦❥•*\n*POWERED BY TALKDROVE*";
    await _0x347a7b.react('⬆');
    await _0x314eb1.sendMessage(_0x42bc4a, {
      'document': {
        'url': _0x270f9d.datalist.list[0x0].file.path_alt
      },
      'fileName': _0x270f9d.datalist.list[0x0].name,
      'mimetype': 'application/vnd.android.package-archive',
      'caption': _0x208f8d,
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
          'body': "TalkDrove",
          'mediaType': 0x1,
          'sourceUrl': "https://talkdrove.com",
          'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png',
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x3572c5
    });
    await _0x347a7b.react('✅');
  } catch (_0x11a444) {
    console.log(_0x11a444);
    _0xf50450('' + _0x11a444);
  }
});
const {
  sinhalaSub
} = require("mrnima-moviedl");
Hamza({
  'pattern': "sinhalasub",
  'react': '📑',
  'category': "download",
  'desc': "Search movies on sinhalasub and get download links",
  'filename': __filename
}, async (_0x42d15c, _0x20d791, _0x4944a1, {
  from: _0x69a81c,
  q: _0x25d0eb,
  reply: _0x386ee3
}) => {
  try {
    if (!_0x25d0eb) {
      return await _0x386ee3("*Please provide a search query! (e.g., Deadpool)*");
    }
    var _0x434424 = await sinhalaSub();
    const _0x57d743 = await _0x434424.search(_0x25d0eb);
    const _0x452bf3 = _0x57d743.result.slice(0x0, 0xa);
    if (!_0x452bf3 || _0x452bf3.length === 0x0) {
      return await _0x386ee3("No results found for: " + _0x25d0eb);
    }
    let _0x59042b = "📽️ *Search Results for* \"" + _0x25d0eb + "\":\n\n";
    _0x452bf3.forEach((_0xfaa5e0, _0x281c0e) => {
      _0x59042b += '*' + (_0x281c0e + 0x1) + ".* " + _0xfaa5e0.title + "\n🔗 Link: " + _0xfaa5e0.link + "\n\n";
    });
    const _0x419115 = await _0x42d15c.sendMessage(_0x69a81c, {
      'text': _0x59042b
    }, {
      'quoted': _0x4944a1
    });
    const _0x358f3e = _0x419115.key.id;
    _0x42d15c.ev.on('messages.upsert', async _0x3d90d7 => {
      const _0x346b20 = _0x3d90d7.messages[0x0];
      if (!_0x346b20.message) {
        return;
      }
      const _0x2c6ed0 = _0x346b20.message.conversation || _0x346b20.message.extendedTextMessage?.["text"];
      const _0x589803 = _0x346b20.message.extendedTextMessage && _0x346b20.message.extendedTextMessage.contextInfo.stanzaId === _0x358f3e;
      if (_0x589803) {
        const _0x42938e = parseInt(_0x2c6ed0.trim());
        if (!isNaN(_0x42938e) && _0x42938e > 0x0 && _0x42938e <= _0x452bf3.length) {
          const _0x4de0f1 = _0x452bf3[_0x42938e - 0x1];
          const _0xc5cbc = "https://api-site-2.vercel.app/api/sinhalasub/movie?url=" + encodeURIComponent(_0x4de0f1.link);
          try {
            const _0x416b70 = await axios.get(_0xc5cbc);
            const _0x181401 = _0x416b70.data.result;
            const _0x59d7b1 = _0x181401.dl_links || [];
            if (_0x59d7b1.length === 0x0) {
              return await _0x386ee3("No PixelDrain links found.");
            }
            let _0x29b51e = "🎥 *" + _0x181401.title + "*\n\n";
            _0x29b51e += "*Available PixelDrain Download Links:*\n";
            _0x59d7b1.forEach((_0xa7de4, _0x1dae22) => {
              _0x29b51e += '*' + (_0x1dae22 + 0x1) + ".* " + _0xa7de4.quality + " - " + _0xa7de4.size + "\n🔗 Link: " + _0xa7de4.link + "\n\n";
            });
            const _0x271493 = await _0x42d15c.sendMessage(_0x69a81c, {
              'text': _0x29b51e
            }, {
              'quoted': _0x346b20
            });
            const _0x364754 = _0x271493.key.id;
            _0x42d15c.ev.on("messages.upsert", async _0x2e71bb => {
              const _0x13be9f = _0x2e71bb.messages[0x0];
              if (!_0x13be9f.message) {
                return;
              }
              const _0x3ffb50 = _0x13be9f.message.conversation || _0x13be9f.message.extendedTextMessage?.["text"];
              const _0x4f254f = _0x13be9f.message.extendedTextMessage && _0x13be9f.message.extendedTextMessage.contextInfo.stanzaId === _0x364754;
              if (_0x4f254f) {
                const _0x1e8cba = parseInt(_0x3ffb50.trim());
                if (!isNaN(_0x1e8cba) && _0x1e8cba > 0x0 && _0x1e8cba <= _0x59d7b1.length) {
                  const _0x13a233 = _0x59d7b1[_0x1e8cba - 0x1];
                  const _0x4738b9 = _0x13a233.link.split('/').pop();
                  await _0x42d15c.sendMessage(_0x69a81c, {
                    'react': {
                      'text': '⬇️',
                      'key': _0x4944a1.key
                    }
                  });
                  const _0x3af3ff = 'https://pixeldrain.com/api/file/' + _0x4738b9;
                  await _0x42d15c.sendMessage(_0x69a81c, {
                    'react': {
                      'text': '⬆',
                      'key': _0x4944a1.key
                    }
                  });
                  await _0x42d15c.sendMessage(_0x69a81c, {
                    'document': {
                      'url': _0x3af3ff
                    },
                    'mimetype': "video/mp4",
                    'fileName': _0x181401.title + " - " + _0x13a233.quality + ".mp4",
                    'caption': _0x181401.title + "\nQuality: " + _0x13a233.quality + "\nPowered by SinhalaSub",
                    'contextInfo': {
                      'mentionedJid': [],
                      'externalAdReply': {
                        'title': _0x181401.title,
                        'body': "Download powered by SinhalaSub",
                        'mediaType': 0x1,
                        'sourceUrl': _0x4de0f1.link,
                        'thumbnailUrl': _0x181401.image
                      }
                    }
                  }, {
                    'quoted': _0x13be9f
                  });
                  await _0x42d15c.sendMessage(_0x69a81c, {
                    'react': {
                      'text': '✅',
                      'key': _0x4944a1.key
                    }
                  });
                } else {
                  await _0x386ee3("Invalid selection. Please reply with a valid number.");
                }
              }
            });
          } catch (_0x4874c9) {
            console.error("Error fetching movie details:", _0x4874c9);
            await _0x386ee3("An error occurred while fetching movie details. Please try again.");
          }
        } else {
          await _0x386ee3("Invalid selection. Please reply with a valid number.");
        }
      }
    });
  } catch (_0x4529fd) {
    console.error("Error during search:", _0x4529fd);
    _0x386ee3("*An error occurred while searching!*");
  }
});
Hamza({
  'pattern': 'gdrive',
  'desc': "To download Gdrive files.",
  'react': '🌐',
  'category': "download",
  'filename': __filename
}, async (_0x364666, _0x5dcba2, _0x28c997, {
  from: _0xc9c50c,
  quoted: _0x43ffa4,
  body: _0x1bdbad,
  isCmd: _0x2d3403,
  command: _0x5e07bb,
  args: _0xa6802c,
  q: _0x56248c,
  isGroup: _0x5a557c,
  sender: _0x4e0f8c,
  senderNumber: _0x53ece9,
  botNumber2: _0x103654,
  botNumber: _0x19cb75,
  pushname: _0x142ef1,
  isMe: _0x5c6ce5,
  isOwner: _0x240c82,
  groupMetadata: _0x11173d,
  groupName: _0x2492e2,
  participants: _0x443f38,
  groupAdmins: _0x1ae2fb,
  isBotAdmins: _0xdb1b58,
  isAdmins: _0x6c8ddb,
  reply: _0x1302c8
}) => {
  try {
    await _0x364666.sendMessage(_0xc9c50c, {
      'react': {
        'text': '⬇️',
        'key': _0x5dcba2.key
      }
    });
    if (!_0x56248c) {
      return _0x28c997.reply("Please Give Me a vaild Link...");
    }
    const _0x4bc877 = "https://api.fgmods.xyz/api/downloader/gdrive?url=" + _0x56248c + "&apikey=mnp3grlZ";
    const _0x1cff67 = await axios.get(_0x4bc877);
    const _0xf742c3 = _0x1cff67.data.result.downloadUrl;
    if (_0xf742c3) {
      await _0x364666.sendMessage(_0xc9c50c, {
        'react': {
          'text': '⬆️',
          'key': _0x5dcba2.key
        }
      });
      await _0x364666.sendMessage(_0xc9c50c, {
        'document': {
          'url': _0xf742c3
        },
        'mimetype': _0x1cff67.data.result.mimetype,
        'fileName': _0x1cff67.data.result.fileName,
        'caption': "|  BYTE\n\nTalkDrove",
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
            'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
            'renderLargerThumbnail': false,
            'showAdAttribution': true
          }
        }
      }, {
        'quoted': _0x5dcba2
      });
    }
    await _0x364666.sendMessage(_0xc9c50c, {
      'react': {
        'text': '✅',
        'key': _0x5dcba2.key
      }
    });
  } catch (_0x2163d4) {
    console.log(_0x2163d4);
  }
});
Hamza({
  'pattern': "cinesubz",
  'alias': ['cine'],
  'react': '🎬',
  'desc': "Search and download movies from CineSubz",
  'category': 'download',
  'filename': __filename
}, async (_0x25c7b7, _0x55731a, _0x2d73fc, {
  from: _0x547ec2,
  q: _0x1558d5,
  senderNumber: _0x1e3fc3,
  reply: _0x37f6c7
}) => {
  try {
    const _0x5bf6e5 = config.PREMIUM_USERS;
    if (!_0x5bf6e5.includes(_0x1e3fc3)) {
      return await _0x37f6c7("⚠️ *This feature is only available for premium users.*\n\nUpgrade to premium to access this command!\n\nContact BYTE OWNER TO GET PREMIUM.");
    }
    if (!_0x1558d5) {
      return await _0x37f6c7("*Please provide a movie name to search! (e.g., Avatar)*");
    }
    const _0x227b94 = await fetchJson('https://cinesubz-api-zazie.vercel.app/api/search?q=' + encodeURIComponent(_0x1558d5));
    if (!_0x227b94.status) {
      return await _0x37f6c7("*No results found for:* \"" + _0x1558d5 + "\"");
    }
    const _0x3aeaf3 = _0x227b94.result.data;
    let _0x320280 = "✨ *BYTE CINESUBZ DOWNLOADER* ✨\n\n🎥 *Search Results for* \"" + _0x1558d5 + "\":\n\n";
    _0x3aeaf3.forEach((_0x117116, _0x5e3f07) => {
      _0x320280 += '*' + (_0x5e3f07 + 0x1) + ".* " + _0x117116.title + " (" + _0x117116.year + ")\n🔗 Link: " + _0x117116.link + "\n\n";
    });
    const _0x516720 = await _0x25c7b7.sendMessage(_0x547ec2, {
      'text': _0x320280
    }, {
      'quoted': _0x2d73fc
    });
    const _0x13b85f = _0x516720.key.id;
    _0x25c7b7.ev.on("messages.upsert", async _0x111fb0 => {
      const _0xcd95f8 = _0x111fb0.messages[0x0];
      if (!_0xcd95f8.message) {
        return;
      }
      const _0xf1bb6e = _0xcd95f8.message.conversation || _0xcd95f8.message.extendedTextMessage?.["text"];
      const _0x5d634b = _0xcd95f8.message.extendedTextMessage && _0xcd95f8.message.extendedTextMessage.contextInfo.stanzaId === _0x13b85f;
      if (_0x5d634b) {
        const _0xd0c0ee = parseInt(_0xf1bb6e.trim());
        if (!isNaN(_0xd0c0ee) && _0xd0c0ee > 0x0 && _0xd0c0ee <= _0x3aeaf3.length) {
          const _0x2bcc27 = _0x3aeaf3[_0xd0c0ee - 0x1];
          const _0x2d573f = await fetchJson("https://cinesubz-api-zazie.vercel.app/api/movie?url=" + encodeURIComponent(_0x2bcc27.link));
          if (!_0x2d573f.status || !_0x2d573f.result.data.dl_links) {
            return await _0x37f6c7("*Error fetching download links for this movie.*");
          }
          const {
            title: _0x4ed769,
            imdbRate: _0x5f47d5,
            image: _0x3d4769,
            date: _0x50b63f,
            country: _0x522cd8,
            duration: _0x36060a,
            dl_links: _0x27db70
          } = _0x2d573f.result.data;
          if (_0x27db70.length === 0x0) {
            return await _0x37f6c7("*No download links available for this movie.*");
          }
          let _0x236c81 = '*' + _0x4ed769 + "*\n\n";
          _0x236c81 += "*Rating:* " + _0x5f47d5 + "\n*Release Date:* " + _0x50b63f + "\n*Country:* " + _0x522cd8 + "\n*Duration:* " + _0x36060a + "\n⚠TELEGRAM LINKS NOT ALLOWED..\n\n";
          _0x236c81 += "*Available Download Links:*\n";
          _0x27db70.forEach((_0x16322b, _0xf5a3b0) => {
            _0x236c81 += '*' + (_0xf5a3b0 + 0x1) + ".* " + _0x16322b.quality + " - " + _0x16322b.size + "\n" + _0x16322b.link + "\n\n";
          });
          const _0x4dc2fb = await _0x25c7b7.sendMessage(_0x547ec2, {
            'image': {
              'url': _0x3d4769
            },
            'caption': _0x236c81,
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
                'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0xcd95f8
          });
          const _0x293753 = _0x4dc2fb.key.id;
          _0x25c7b7.ev.on("messages.upsert", async _0x50c466 => {
            const _0x3ba62a = _0x50c466.messages[0x0];
            if (!_0x3ba62a.message) {
              return;
            }
            const _0x42822b = _0x3ba62a.message.conversation || _0x3ba62a.message.extendedTextMessage?.["text"];
            const _0x53a26a = _0x3ba62a.message.extendedTextMessage && _0x3ba62a.message.extendedTextMessage.contextInfo.stanzaId === _0x293753;
            if (_0x53a26a) {
              const _0x4882b2 = parseInt(_0x42822b.trim());
              if (!isNaN(_0x4882b2) && _0x4882b2 > 0x0 && _0x4882b2 <= _0x27db70.length) {
                const _0x5af4da = _0x27db70[_0x4882b2 - 0x1];
                const _0x326d4f = await fetchJson("https://cinesubz-api-zazie.vercel.app/api/links?url=" + encodeURIComponent(_0x5af4da.link));
                const _0x299aa6 = _0x326d4f.result.direct;
                await _0x25c7b7.sendMessage(_0x547ec2, {
                  'react': {
                    'text': '⬆️',
                    'key': _0x2d73fc.key
                  }
                });
                await _0x25c7b7.sendMessage(_0x547ec2, {
                  'document': {
                    'url': _0x299aa6
                  },
                  'mimetype': "video/mp4",
                  'fileName': _0x4ed769 + " - " + _0x5af4da.quality + ".mp4",
                  'caption': "|  BYTE\n\nTalkDrove",
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
                      'body': "TalkDrove",
                      'mediaType': 0x1,
                      'sourceUrl': "https://talkdrove.com",
                      'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                      'renderLargerThumbnail': false,
                      'showAdAttribution': true
                    }
                  }
                }, {
                  'quoted': _0x3ba62a
                });
                await _0x25c7b7.sendMessage(_0x547ec2, {
                  'react': {
                    'text': '✅',
                    'key': _0x2d73fc.key
                  }
                });
              } else {
                await _0x37f6c7("Invalid selection. Please reply with a valid number.");
              }
            }
          });
        } else {
          await _0x37f6c7("Invalid selection. Please reply with a valid number.");
        }
      }
    });
  } catch (_0x5755de) {
    console.error("Error during CineSubz command execution:", _0x5755de);
    _0x37f6c7("*An error occurred while processing your request.*");
  }
});