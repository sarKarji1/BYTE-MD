const {
  fetchJson
} = require("../lib/functions");
const {
  Hamza,
  commands
} = require("../lib/command");
const cheerio = require("cheerio");
const config = require("../config.cjs");
const axios = require("axios");
const {
  Buffer
} = require("buffer");
const Esana = require("@sl-code-lords/esana-news");
var {
  subsearch,
  subdl
} = require('@sl-code-lords/si-subdl');
const {
  text
} = require("stream/consumers");
const {
  savefromV2,
  ChatGpt,
  searchfilm,
  getSurah,
  tafsir,
  instagram4,
  capcutdl,
  instagram3,
  mediafiredll,
  cekkuota,
  tele,
  instagram2,
  ytPlayMp4,
  ytPlayMp3,
  kodepos,
  pinterest,
  igdl,
  textpro,
  mediafire,
  ffstalk,
  mlstalk,
  Tiktok,
  surah,
  listsurah,
  ephoto,
  emoji
} = require("../lib/scraper");
var api = new Esana();
Hamza({
  'pattern': "img",
  'desc': "Search and send images from Google.",
  'react': "🖼️",
  'category': "search",
  'filename': __filename
}, async (_0x88cc4e, _0x3d8b4d, _0x30f048, {
  from: _0x498d1c,
  quoted: _0x5d7193,
  body: _0x2810a6,
  isCmd: _0x52d699,
  command: _0x3c5c5b,
  args: _0x2c84fd,
  q: _0x3dcb7f,
  isGroup: _0x5eb167,
  sender: _0x1f1c6e,
  senderNumber: _0x1f47d7,
  botNumber2: _0x191c61,
  botNumber: _0x4230f2,
  pushname: _0x3dc57c,
  isMe: _0x276f29,
  isOwner: _0x12ee09,
  groupMetadata: _0x1355b5,
  groupName: _0x4f49a5,
  participants: _0x5d4a05,
  groupAdmins: _0x21f61c,
  isBotAdmins: _0x548e3,
  isAdmins: _0x4c3125,
  reply: _0x1d9594
}) => {
  try {
    if (!_0x3dcb7f) {
      return _0x1d9594("Please provide a search query and a number for the image.\n.img black panther / 10");
    }
    let _0x421e04 = _0x3dcb7f.split(" / ")[0x0];
    let _0x5e429e = _0x3dcb7f.split(" / ")[0x1];
    const _0xf4e5db = encodeURIComponent(_0x421e04);
    const _0x72563b = "https://www.googleapis.com/customsearch/v1?q=" + _0xf4e5db + "&cx=" + "b3ec93d32b13a43e3" + "&key=" + "AIzaSyB1NeECj7GlMMSEi9mxra_PhsGb7rX7VvI" + "&searchType=image&num=" + _0x5e429e;
    const _0x49fd19 = await fetchJson(_0x72563b);
    if (!_0x49fd19.items || _0x49fd19.items.length === 0x0) {
      return _0x1d9594("No images found for your query.");
    }
    for (let _0x419f7f = 0x0; _0x419f7f < _0x49fd19.items.length; _0x419f7f++) {
      const _0x4ce59d = _0x49fd19.items[_0x419f7f];
      const _0x2a0638 = _0x4ce59d.link;
      const _0x4f3910 = _0x4ce59d.title || "No Title Available";
      const _0xcf8ac1 = await axios.get(_0x2a0638, {
        'responseType': "arraybuffer"
      });
      const _0x3ace15 = Buffer.from(_0xcf8ac1.data, "binary");
      await _0x88cc4e.sendMessage(_0x498d1c, {
        'image': _0x3ace15,
        'caption': "🌟 *Image " + (_0x419f7f + 0x1) + " from your search!* 🌟\n\n✨ *Title:* " + _0x4f3910 + "\n🔗 *Link:* " + _0x2a0638 + "\n\n✨ *QUEEN ANJU MD IMG DOWNLOADER* ✨\nEnjoy these images! 📸",
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
      }, {
        'quoted': _0x3d8b4d
      });
    }
  } catch (_0x3395b3) {
    console.error(_0x3395b3);
    _0x1d9594("Error: " + _0x3395b3.message);
  }
});
Hamza({
  'pattern': "movie",
  'desc': "Fetch detailed information about a movie.",
  'category': 'search',
  'react': '🎬',
  'filename': __filename
}, async (_0x2aff24, _0x508c6c, _0x1825a9, {
  from: _0x4ac6eb,
  quoted: _0x322061,
  body: _0x232874,
  isCmd: _0x171d42,
  command: _0x43dcb0,
  args: _0x4cceab,
  q: _0x52f499,
  isGroup: _0x4035b9,
  sender: _0xe2d3be,
  senderNumber: _0x1c73aa,
  botNumber2: _0xb60f1e,
  botNumber: _0x213742,
  pushname: _0x51c6fe,
  isMe: _0x4ff3e9,
  isOwner: _0x4f3ea0,
  groupMetadata: _0xa46f2c,
  groupName: _0x1cf720,
  participants: _0x5ee585,
  groupAdmins: _0x3eafc8,
  isBotAdmins: _0x4a6d28,
  isAdmins: _0x21922e,
  reply: _0x109274
}) => {
  try {
    const _0x3f1619 = _0x4cceab.join(" ");
    if (!_0x3f1619) {
      return _0x109274("📽️ Please provide the name of the movie.");
    }
    const _0x21a3df = "http://www.omdbapi.com/?t=" + encodeURIComponent(_0x3f1619) + "&apikey=" + config.OMDB_API_KEY;
    const _0x5a1e29 = await axios.get(_0x21a3df);
    const _0x81792e = _0x5a1e29.data;
    if (_0x81792e.Response === "False") {
      return _0x109274("🚫 Movie not found.");
    }
    const _0x5877ec = "\n🎬 *Movie Information* 🎬\n\n🎥 *Title:* " + _0x81792e.Title + "\n📅 *Year:* " + _0x81792e.Year + "\n🌟 *Rated:* " + _0x81792e.Rated + "\n📆 *Released:* " + _0x81792e.Released + "\n⏳ *Runtime:* " + _0x81792e.Runtime + "\n🎭 *Genre:* " + _0x81792e.Genre + "\n🎬 *Director:* " + _0x81792e.Director + "\n✍️ *Writer:* " + _0x81792e.Writer + "\n🎭 *Actors:* " + _0x81792e.Actors + "\n📝 *Plot:* " + _0x81792e.Plot + "\n🌍 *Language:* " + _0x81792e.Language + "\n🇺🇸 *Country:* " + _0x81792e.Country + "\n🏆 *Awards:* " + _0x81792e.Awards + "\n⭐ *IMDB Rating:* " + _0x81792e.imdbRating + "\n🗳️ *IMDB Votes:* " + _0x81792e.imdbVotes + "\n";
    const _0x5b1207 = _0x81792e.Poster && _0x81792e.Poster !== "N/A" ? _0x81792e.Poster : config.ALIVE_IMG;
    await _0x2aff24.sendMessage(_0x4ac6eb, {
      'image': {
        'url': _0x5b1207
      },
      'caption': _0x5877ec + "\n> QUEEN ANJU-MD",
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
      'quoted': _0x508c6c
    });
  } catch (_0x174225) {
    console.log(_0x174225);
    _0x109274("❌ Error: " + _0x174225.message);
  }
});
Hamza({
  'pattern': "news",
  'desc': "Get the latest news headlines.",
  'category': 'search',
  'react': '📰',
  'filename': __filename
}, async (_0x364e24, _0x45fbea, _0x241627, {
  from: _0x31f838,
  reply: _0x336160
}) => {
  try {
    const _0x5a4c8a = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=0f2c43ab11324578a7b1709651736382");
    const _0xcecb8f = _0x5a4c8a.data.articles;
    if (!_0xcecb8f.length) {
      return _0x336160("No news articles found.");
    }
    for (let _0x5aa79d = 0x0; _0x5aa79d < Math.min(_0xcecb8f.length, 0x5); _0x5aa79d++) {
      const _0x4e0ee5 = _0xcecb8f[_0x5aa79d];
      let _0x57a285 = "\n📰 *" + _0x4e0ee5.title + "*\n⚠️ _" + _0x4e0ee5.description + "_\n🔗 _" + _0x4e0ee5.url + "_\n\n*© BYTE* \n*💻 GitHub:* github.com/HyHamza/BYTE  \n            ";
      console.log("Article URL:", _0x4e0ee5.urlToImage);
      if (_0x4e0ee5.urlToImage) {
        await _0x364e24.sendMessage(_0x31f838, {
          'image': {
            'url': _0x4e0ee5.urlToImage
          },
          'caption': _0x57a285,
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
      } else {
        await _0x364e24.sendMessage(_0x31f838, {
          'text': _0x57a285,
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
      }
    }
    ;
  } catch (_0x584cbc) {
    console.error("Error fetching news:", _0x584cbc);
    _0x336160("Could not fetch news. Please try again later.");
  }
});
async function xnxxs(_0x582cc2) {
  return new Promise((_0x50bd8f, _0x281b74) => {
    fetch("https://www.xnxx.com/search/" + _0x582cc2 + '/' + (Math.floor(Math.random() * 0x3) + 0x1), {
      'method': "get"
    }).then(_0xb43332 => _0xb43332.text()).then(_0x4b4156 => {
      const _0x52cf66 = cheerio.load(_0x4b4156, {
        'xmlMode': false
      });
      const _0x36d516 = [];
      const _0x3657a8 = [];
      const _0x548e9b = [];
      const _0x305d92 = [];
      _0x52cf66("div.mozaique").each(function (_0x53fd72, _0x543e98) {
        _0x52cf66(_0x543e98).find("div.thumb").each(function (_0x588aae, _0x237cbe) {
          _0x3657a8.push('https://www.xnxx.com' + _0x52cf66(_0x237cbe).find('a').attr('href').replace("/THUMBNUM/", '/'));
        });
      });
      _0x52cf66("div.mozaique").each(function (_0x1e07ce, _0x3dd195) {
        _0x52cf66(_0x3dd195).find("div.thumb-under").each(function (_0x1f0954, _0x100941) {
          _0x548e9b.push(_0x52cf66(_0x100941).find("p.metadata").text());
          _0x52cf66(_0x100941).find('a').each(function (_0x4d3779, _0x364c73) {
            _0x36d516.push(_0x52cf66(_0x364c73).attr("title"));
          });
        });
      });
      for (let _0x6dde7b = 0x0; _0x6dde7b < _0x36d516.length; _0x6dde7b++) {
        _0x305d92.push({
          'title': _0x36d516[_0x6dde7b],
          'info': _0x548e9b[_0x6dde7b],
          'link': _0x3657a8[_0x6dde7b]
        });
      }
      _0x50bd8f({
        'status': true,
        'result': _0x305d92
      });
    })["catch"](_0xb412ff => _0x281b74({
      'status': false,
      'result': _0xb412ff
    }));
  });
}
Hamza({
  'pattern': "xnxxs",
  'alias': ["xnxxsearch"],
  'use': ".yts <song name>",
  'react': '🫣',
  'desc': "Search and get details from xnxx.",
  'category': 'nsfw',
  'filename': __filename
}, async (_0x57cfaf, _0x54ff95, _0x103f86, {
  from: _0x1e5a87,
  l: _0x540254,
  quoted: _0x1f50e2,
  body: _0x2b5f08,
  isCmd: _0x2ddd27,
  command: _0x4cc533,
  args: _0x59308a,
  q: _0x1b3d54,
  isGroup: _0x5a77f3,
  sender: _0x2bbe35,
  senderNumber: _0x120942,
  botNumber2: _0x23ce56,
  botNumber: _0x23a123,
  pushname: _0x62fed2,
  isMe: _0x585995,
  isOwner: _0x1d5a29,
  groupMetadata: _0x251c71,
  groupName: _0x1ee752,
  participants: _0x565992,
  groupAdmins: _0x4be73e,
  isBotAdmins: _0x43678d,
  isAdmins: _0x5ba61c,
  reply: _0x15e58d
}) => {
  try {
    if (!_0x1b3d54) {
      return _0x15e58d("🚩 *Please give me words to search*");
    }
    let _0x570bc3 = await xnxxs(_0x1b3d54);
    let _0x302cd4 = _0x570bc3.result.map(_0x146084 => "乂 S-XNXX 乂\n◦ *Title:* " + _0x146084.title + "\n◦ *Info:* " + _0x146084.info + "\n◦ *Link:* " + _0x146084.link).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`;
    await _0x57cfaf.sendMessage(_0x1e5a87, {
      'text': _0x302cd4,
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
          'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png',
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x54ff95
    });
  } catch (_0x39deec) {
    console.log(_0x39deec);
    await _0x57cfaf.sendMessage(_0x1e5a87, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x54ff95
    });
  }
});
Hamza({
  'pattern': "xvs",
  'alias': ["xvideossearch"],
  'react': '🫣',
  'desc': "Search and get details from xvideos.",
  'category': "nsfw",
  'use': ".xvs <query>",
  'filename': __filename
}, async (_0x589d44, _0x986a70, _0x210d0b, {
  from: _0x9b3b8,
  q: _0x40c9cf,
  quoted: _0x4dc902,
  reply: _0x15dcca
}) => {
  try {
    if (!_0x40c9cf) {
      return _0x15dcca("🚩 Please provide a search term!");
    }
    const _0x1ef6a5 = await fetchJson("https://www.dark-yasiya-api.site/search/xvideo?q=" + _0x40c9cf);
    if (!_0x1ef6a5 || _0x1ef6a5.result.length === 0x0) {
      return _0x15dcca("No results found!");
    }
    let _0x177092 = _0x1ef6a5.result.map((_0x4ea5ad, _0x13f214) => "乂 *XVIDEOS Result " + (_0x13f214 + 0x1) + "* 乂\n◦ *Title:* " + _0x4ea5ad.title + "\n◦ *Info:* " + _0x4ea5ad.info + "\n◦ *Link:* " + _0x4ea5ad.url).join("\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n");
    await _0x589d44.sendMessage(_0x9b3b8, {
      'text': _0x177092,
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
          'body': 'TalkDrove',
          'mediaType': 0x1,
          'sourceUrl': "https://talkdrove.com",
          'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x986a70
    });
  } catch (_0x465898) {
    console.log(_0x465898);
    _0x15dcca("🚩 An error occurred while searching on XVIDEOS.");
  }
});
const LyricsAuth = require('lyrics-search');
const lyricsAuth = new LyricsAuth();
Hamza({
  'pattern': "lyrics",
  'react': '🎶',
  'category': "entertainment",
  'desc': "Fetch lyrics of a song from Genius",
  'filename': __filename
}, async (_0x16748e, _0x24413e, _0x375e33, {
  from: _0xa01fae,
  q: _0x53f067,
  reply: _0x2913d7
}) => {
  try {
    if (!_0x53f067) {
      return await _0x2913d7("*Please provide a song name and/or artist! (e.g., \"Imagine Dragons Believer\")*");
    }
    const _0x303092 = _0x53f067.split(" & ")[0x0];
    const _0x2f9061 = _0x53f067.split(" & ")[0x1];
    const _0x35c204 = await lyricsAuth.searchLyrics(_0x303092, _0x2f9061);
    if (_0x35c204.length === 0x0) {
      return await _0x2913d7("No lyrics found for this song!");
    }
    const _0x488a64 = "🎶 *Lyrics for " + _0x303092 + '-' + _0x2f9061 + "* 🎶\n\n" + _0x35c204;
    await _0x16748e.sendMessage(_0xa01fae, {
      'text': _0x488a64,
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
    });
  } catch (_0xf3e210) {
    console.error("Error fetching lyrics:", _0xf3e210);
    await _0x2913d7("An error occurred while fetching lyrics. Please try again later.");
  }
});
Hamza({
  'pattern': 'pinterest',
  'react': '🎀',
  'desc': "Search and send images from Pinterest",
  'category': "search",
  'use': ".pinterest <query> / <number>",
  'filename': __filename
}, async (_0x132b20, _0x27a05f, _0x2b3f15, {
  from: _0xc337a1,
  prefix: _0x5c80e5,
  quoted: _0x1ea315,
  body: _0x345498,
  isCmd: _0x3ceec5,
  command: _0x2a1862,
  args: _0x40a5d0,
  q: _0x41ad15,
  reply: _0x22cb5c,
  mnu: _0x1a3776
}) => {
  try {
    if (!_0x41ad15) {
      return _0x22cb5c("Please provide a query and optionally the number of images.\nExample: .pinterest Spider-Man / 10");
    }
    const [_0x41b3fc, _0x3f2e1e] = _0x41ad15.split('/').map(_0xc85cde => _0xc85cde.trim());
    const _0x245a0f = parseInt(_0x3f2e1e) || 0x5;
    if (isNaN(_0x245a0f) || _0x245a0f <= 0x0) {
      return _0x22cb5c("Please provide a valid number of images to send.");
    }
    let _0x369c00 = await pinterest(_0x41b3fc);
    if (!_0x369c00 || !_0x369c00.result || _0x369c00.result.length === 0x0) {
      return _0x22cb5c("No images found for your query.");
    }
    const _0xb95ef2 = _0x369c00.result.slice(0x0, _0x245a0f);
    for (const _0x7b46e7 of _0xb95ef2) {
      await _0x132b20.sendMessage(_0xc337a1, {
        'image': {
          'url': _0x7b46e7
        },
        'caption': "🌟 *Pinterest Search Result* 🌟\n\n🔍 *Query*: " + _0x41b3fc + "\n📷 *Source*: Pinterest\n\nTalkDrove PINTEREST SEARCH",
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
      }, {
        'quoted': _0x1a3776
      });
    }
    _0x22cb5c("✅ Sent " + _0xb95ef2.length + " image(s) for the query: *" + _0x41b3fc + '*');
  } catch (_0x24a524) {
    console.log(_0x24a524);
    _0x22cb5c("Error: " + _0x24a524.message);
  }
});