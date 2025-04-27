const DYXT_NEWS = require("@dark-yasiya/news-scrap");
const news = new DYXT_NEWS();
let lastNewsTitles = {
  'hiru': {},
  'sirasa': {},
  'derana': {},
  'lankadeepa': {}
};
async function getHiruNews() {
  try {
    const _0x283944 = await news.hiru();
    if (_0x283944.status) {
      const _0x4aa2d6 = _0x283944.result;
      return {
        'title': _0x4aa2d6.title,
        'content': _0x4aa2d6.desc,
        'date': _0x4aa2d6.date,
        'url': _0x4aa2d6.url,
        'image': _0x4aa2d6.image
      };
    }
    return null;
  } catch (_0x27e26d) {
    console.error("Error fetching Hiru News: " + _0x27e26d.message);
    return null;
  }
}
async function getlankadeepaNews() {
  try {
    const _0x2d0cea = await news.lankadeepa();
    if (_0x2d0cea.status) {
      const _0x3a7347 = _0x2d0cea.result;
      return {
        'title': _0x3a7347.title,
        'content': _0x3a7347.desc,
        'date': _0x3a7347.date,
        'url': _0x3a7347.url,
        'image': _0x3a7347.image
      };
    }
    return null;
  } catch (_0x3aebb5) {
    console.error("Error fetching Lankadeepa News: " + _0x3aebb5.message);
    return null;
  }
}
async function getSirasaNews() {
  try {
    const _0x499cbd = await news.sirasa();
    if (_0x499cbd.status) {
      const _0x4f73e9 = _0x499cbd.result;
      return {
        'title': _0x4f73e9.title,
        'content': _0x4f73e9.desc,
        'date': _0x4f73e9.date,
        'url': _0x4f73e9.url,
        'image': _0x4f73e9.image
      };
    }
    return null;
  } catch (_0x46cbd2) {
    console.error("Error fetching Sirasa News: " + _0x46cbd2.message);
    return null;
  }
}
async function getDeranaNews() {
  try {
    const _0x36bd67 = await news.derana();
    if (_0x36bd67.status) {
      const _0x1382fa = _0x36bd67.result;
      return {
        'title': _0x1382fa.title,
        'content': _0x1382fa.desc,
        'date': _0x1382fa.date,
        'url': _0x1382fa.url,
        'image': _0x1382fa.image
      };
    }
    return null;
  } catch (_0x30f33f) {
    console.error("Error fetching Derana News: " + _0x30f33f.message);
    return null;
  }
}
async function sendNews(_0x299807, _0xf72cd4, _0x5d8302, _0x59bab1) {
  if (_0x5d8302) {
    if (lastNewsTitles[_0x59bab1][_0xf72cd4] !== _0x5d8302.title) {
      lastNewsTitles[_0x59bab1][_0xf72cd4] = _0x5d8302.title;
      let _0x441d25 = "📰 *" + _0x59bab1 + " News*\n\n*Title:* " + _0x5d8302.title + "\n\n*Description:* " + _0x5d8302.content + "\n\n*Published On:* " + _0x5d8302.date;
      if (_0x5d8302.url) {
        _0x441d25 += "\n\n*Read more:* " + _0x5d8302.url;
      }
      _0x441d25 += "\n\n> *POWERD BY QUEEN ANJU MD*";
      if (_0x5d8302.image) {
        await _0x299807.sendMessage(_0xf72cd4, {
          'image': {
            'url': _0x5d8302.image
          },
          'caption': _0x441d25,
          'contextInfo': {
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
        });
      } else {
        await _0x299807.sendMessage(_0xf72cd4, {
          'text': _0x441d25,
          'contextInfo': {
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
      }
    }
  }
}
async function checkAndPostNews(_0x43ac61, _0x203cba) {
  const _0x408400 = await getHiruNews();
  const _0x38c1f8 = await getSirasaNews();
  const _0x11dc92 = await getDeranaNews();
  const _0x11dab6 = await getlankadeepaNews();
  await sendNews(_0x43ac61, _0x203cba, _0x408400, "hiru");
  await sendNews(_0x43ac61, _0x203cba, _0x38c1f8, "sirasa");
  await sendNews(_0x43ac61, _0x203cba, _0x11dc92, "derana");
  await sendNews(_0x43ac61, _0x203cba, _0x11dab6, "lankadeepa");
}
function startNewsService(_0x126c11, _0x1ae2bc) {
  if (!startNewsService.interval) {
    startNewsService.interval = setInterval(async () => {
      if (_0x1ae2bc) {
        await checkAndPostNews(_0x126c11, _0x1ae2bc);
      }
    }, 0xea60);
  }
}
module.exports = {
  'startNewsService': startNewsService,
  'checkAndPostNews': checkAndPostNews,
  'sendNews': sendNews
};