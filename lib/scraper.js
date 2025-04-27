const axios = require("axios");
const cheerio = require("cheerio");
const request = require("request");
const chalk = require("chalk");
const fs = require('fs');
const {
  color,
  bgcolor
} = require('./color');
const gis = require("g-i-s");
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const fetch = require("node-fetch");
const FormData = require("form-data");
const cookie = require("cookie");
const vm = require('vm');
async function savefromV2() {
  let _0x16ac25 = new URLSearchParams({
    'sf_url': encodeURI(arguments[0x0]),
    'sf_submit': '',
    'new': 0x2,
    'lang': 'id',
    'app': '',
    'country': 'id',
    'os': "Windows",
    'browser': "Chrome",
    'channel': " main",
    'sf-nomad': 0x1
  });
  let {
    data: _0x41768d
  } = await axios({
    'url': 'https://worker.sf-tools.com/savefrom.php',
    'method': "POST",
    'data': _0x16ac25,
    'headers': {
      'content-type': "application/x-www-form-urlencoded",
      'origin': 'https://id.savefrom.net',
      'referer': "https://id.savefrom.net/",
      'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36"
    }
  });
  _0x41768d = _0x41768d.replace("[][\"filter\"][\"constructor\"](b).call(a);", "\ntry {\ni++;\nif (i === 2) scriptResult = " + "[][\"filter\"][\"constructor\"](b).call(a);".split(".call")[0x0] + ".toString();\nelse (\n" + "[][\"filter\"][\"constructor\"](b).call(a);".replace(/;/, '') + "\n);\n} catch {}");
  let _0x21d894 = {
    'scriptResult': '',
    'i': 0x0
  };
  vm.createContext(_0x21d894);
  new vm.Script(_0x41768d).runInContext(_0x21d894);
  return JSON.parse(''.split("window.parent.sf.videoResult.show(")?.[0x1]["split"](');')?.[0x0]);
}
async function ChatGpt(_0x12bf33) {
  const _0x38f866 = {
    'method': 'POST',
    'headers': {
      'Content-Type': "application/json",
      'Referer': "https://2chat.c3r.ink/",
      'accept': "application/json, text/plain, */*"
    },
    'body': JSON.stringify({
      'prompt': _0x12bf33,
      'options': {},
      'regenerate': false,
      'roomId': 0x3ea,
      'uuid': Date.now(),
      'systemMessage': "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.",
      'top_p': 0x1,
      'temperature': 0.8
    })
  };
  const _0x45cdcb = await fetch("https://chatapicn.a3r.fun/api/chat-process", _0x38f866);
  const _0x32720e = await _0x45cdcb.text();
  let _0x257cb5 = JSON.parse(_0x32720e.split("\n").pop());
  return _0x257cb5;
}
async function searchfilm(_0x478949) {
  let _0x1a37e2 = [];
  try {
    let _0x19e14f = await axios.get("https://www.filmapik21.sbs/?s=" + _0x478949)['catch'](_0x46a52b => _0x46a52b.response);
    let _0x229120 = _0x19e14f.data;
    let _0x200e6d = cheerio.load(_0x229120);
    _0x200e6d(".search-page > .result-item", _0x229120).each(function () {
      let _0x3421b0 = _0x200e6d(this).find("article > .details > .title").text();
      let _0x15f195 = _0x200e6d(this).find("article > .details > .meta").text();
      let _0x22f6b9 = _0x200e6d(this).find("article > .details > .contenido").text();
      let _0x5159d4 = _0x200e6d(this).find("article > .image > .thumbnail.animation-2 > a > img").attr("src");
      let _0x30e07a = _0x200e6d(this).find("article > .image > .thumbnail.animation-2 > a").attr('href');
      _0x1a37e2.push({
        'title': _0x3421b0,
        'rating': _0x15f195,
        'sinopsis': _0x22f6b9,
        'thumb': _0x5159d4,
        'url': _0x30e07a
      });
    });
    return _0x1a37e2;
  } catch (_0x1aa203) {
    console.error(_0x1aa203);
    return [];
  }
}
;
const tafsir = _0x1ea00f => {
  return new Promise((_0x2c059d, _0x4ea9e4) => {
    axios.get('https://tafsirq.com/topik/' + _0x1ea00f).then(({
      data: _0x430fa4
    }) => {
      const _0x5c936f = cheerio.load(_0x430fa4);
      const _0x16eb38 = [];
      _0x5c936f("body > div:nth-child(4) > div > div.col-md-6 > div ").each(function (_0xea9625, _0x3d4d46) {
        let _0x3e833c = {
          'status': 0xc8,
          'surah': _0x5c936f(_0x3d4d46).find("> div.panel-heading.panel-choco > div > div > a").text(),
          'tafsir': _0x5c936f(_0x3d4d46).find("> div.panel-body.excerpt").text().trim(),
          'type': _0x5c936f(_0x3d4d46).find("> div.panel-heading.panel-choco > div > div > span").text(),
          'source': _0x5c936f(_0x3d4d46).find("> div.panel-heading.panel-choco > div > div > a").attr("href")
        };
        _0x16eb38.push(_0x3e833c);
      });
      _0x2c059d(_0x16eb38);
    })["catch"](_0x4ea9e4);
  });
};
async function instagram4(_0x362cdf) {
  let _0x341aff = await axios("https://indown.io/");
  let _0x9606ec = cheerio.load(_0x341aff.data);
  let _0x28b615 = _0x9606ec("input[name=referer]").val();
  let _0x4ec319 = _0x9606ec("input[name=locale]").val();
  let _0x2c6a0e = _0x9606ec('input[name=_token]').val();
  let {
    data: _0x321fed
  } = await axios.post('https://indown.io/download', new URLSearchParams({
    'link': _0x362cdf,
    'referer': _0x28b615,
    'locale': _0x4ec319,
    '_token': _0x2c6a0e
  }), {
    'headers': {
      'cookie': _0x341aff.headers["set-cookie"].join("; ")
    }
  });
  let _0x198a67 = cheerio.load(_0x321fed);
  let _0x6fe40d = [];
  let _0x5d9745 = cheerio.load(_0x198a67('#result').html());
  _0x5d9745("video").each(function () {
    let _0x5297a3 = _0x198a67(this);
    _0x6fe40d.push({
      'type': 'video',
      'thumbnail': _0x5297a3.attr("poster"),
      'url': _0x5297a3.find("source").attr("src")
    });
  });
  _0x5d9745("img").each(function () {
    let _0x1442b6 = _0x198a67(this);
    _0x6fe40d.push({
      'type': "image",
      'url': _0x1442b6.attr("src")
    });
  });
  return _0x6fe40d;
}
async function capcutdl(_0x24e7eb) {
  try {
    let {
      request: _0x20df31
    } = await axios.get(_0x24e7eb);
    let _0x59dca9 = _0x20df31.res.responseUrl;
    let _0x670a99 = _0x59dca9.match(/\d+/)[0x0];
    const {
      data: _0x2c0baa
    } = await axios({
      'url': "https://ssscap.net/api/download/" + _0x670a99,
      'method': "GET",
      'headers': {
        'Cookie': "sign=2cbe441f7f5f4bdb8e99907172f65a42; device-time=1685437999515"
      }
    });
    return _0x2c0baa;
  } catch (_0xdbf200) {
    console.log(_0xdbf200);
  }
}
async function instagram3(_0xdf3490) {
  const _0x298da7 = [];
  const _0x5bbf69 = {
    'url': _0xdf3490,
    'submit': ''
  };
  const {
    data: _0x4269d
  } = await axios("https://downloadgram.org/", {
    'method': "POST",
    'data': _0x5bbf69
  });
  const _0x1cb573 = cheerio.load(_0x4269d);
  _0x1cb573("#downloadhere > a").each(function (_0x19167, _0x35c18d) {
    const _0x37956d = _0x1cb573(_0x35c18d).attr("href");
    if (_0x37956d) {
      _0x298da7.push(_0x37956d);
    }
  });
  return _0x298da7;
}
async function mediafiredll(_0x5c727d) {
  const _0x5c891a = await axios.get("https://www-mediafire-com.translate.goog/" + _0x5c727d.replace("https://www.mediafire.com/", '') + "?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp");
  const _0x35f9b5 = cheerio.load(_0x5c891a.data);
  const _0x51c1cb = _0x35f9b5("#downloadButton").attr("href");
  const _0x5b2f48 = _0x35f9b5("body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div").attr("title").replaceAll(" ", '').replaceAll("\n", '');
  const _0x2cfe59 = _0x35f9b5("body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span").text();
  const _0x409245 = _0x35f9b5("#downloadButton").text().replace("Download", '').replace('(', '').replace(')', '').replace("\n", '').replace("\n", '').replace("                         ", '').replaceAll(" ", '');
  let _0x51b648 = '';
  let _0x124df2 = await axios.head(_0x51c1cb);
  _0x51b648 = _0x124df2.headers['content-type'];
  return {
    'name': _0x5b2f48,
    'size': _0x409245,
    'date': _0x2cfe59,
    'mime': _0x51b648,
    'link': _0x51c1cb
  };
}
async function instagram2(_0x1544f7) {
  let _0x27bd69 = await axios("https://indown.io/");
  let _0x596aff = cheerio.load(_0x27bd69.data);
  let _0x55b130 = _0x596aff("input[name=referer]").val();
  let _0x1f9b14 = _0x596aff("input[name=locale]").val();
  let _0x802eeb = _0x596aff("input[name=_token]").val();
  let {
    data: _0x2ab109
  } = await axios.post('https://indown.io/download', new URLSearchParams({
    'link': _0x1544f7,
    'referer': _0x55b130,
    'locale': _0x1f9b14,
    '_token': _0x802eeb
  }), {
    'headers': {
      'cookie': _0x27bd69.headers["set-cookie"].join("; ")
    }
  });
  let _0x242b94 = cheerio.load(_0x2ab109);
  let _0x4de755 = [];
  let _0xf7e800 = cheerio.load(_0x242b94("#result").html());
  _0xf7e800("video").each(function () {
    let _0xadc4 = _0x242b94(this);
    _0x4de755.push({
      'type': "video",
      'thumbnail': _0xadc4.attr('poster'),
      'url': _0xadc4.find("source").attr("src")
    });
  });
  _0xf7e800("img").each(function () {
    let _0x575223 = _0x242b94(this);
    _0x4de755.push({
      'type': "image",
      'url': _0x575223.attr('src')
    });
  });
  return _0x4de755;
}
async function cekkuota() {
  return new Promise(async (_0xe8ac1c, _0x293f97) => {
    function _0x177ea1(_0x51e27d) {
      let _0xf45bf0 = '▒'.repeat(0xa).split('');
      for (let _0x49bf8f = 0x1; _0x49bf8f <= _0x51e27d; _0x49bf8f++) {
        if (_0x49bf8f % 0xa === 0x0) {
          _0xf45bf0[_0x49bf8f / 0xa - 0x1] = '█';
        }
      }
      return "[ " + _0xf45bf0.join(" ") + " ]";
    }
    try {
      let _0x39707e = await axios({
        'headers': {
          'x-app-version': "8.11.0",
          'Authorization': "e2dbd0c0-d21b-45d2-b60f-d49940f2d0e7",
          'User-Agent': 'okhttp/4.2.2'
        },
        'method': "GET",
        'url': 'https://quota.api.axis.co.id/quota'
      });
      let {
        result: _0x3b251e
      } = JSON.parse(atob(_0x39707e.data.data));
      let _0x2e081d = '';
      for (let _0x590029 of _0x3b251e.detail) {
        let _0x302fc9 = new Date(_0x590029.benefitData.activeUntil);
        let _0x568f3e = _0x302fc9.toLocaleDateString('id', {
          'month': "long"
        });
        let _0x4ff288 = _0x568f3e[0x0] + _0x568f3e[0x1] + _0x568f3e[0x2];
        _0x2e081d += '*' + _0x590029.name + "*\n" + _0x177ea1(_0x590029.percentRemaining) + "\n" + _0x590029.remaining + '/' + _0x590029.total + " s.d " + _0x302fc9.getDate() + " " + _0x4ff288 + " " + _0x302fc9.getFullYear() + " " + _0x302fc9.getHours() + ':' + _0x302fc9.getMinutes() + "\n\n";
      }
      _0xe8ac1c(_0x2e081d);
    } catch (_0x53bda1) {
      _0x293f97(_0x53bda1);
    }
  });
}
async function tele(_0x4c2754) {
  return new Promise(_0x31805e => {
    axios.get("https://getstickerpack.com/stickers?query=" + _0x4c2754).then(({
      data: _0x3e0133
    }) => {
      const _0x3eca49 = cheerio.load(_0x3e0133);
      const _0x365cf4 = [];
      _0x3eca49("#stickerPacks > div > div:nth-child(3) > div > a").each(function (_0x16c386, _0x1b9a25) {
        _0x365cf4.push(_0x3eca49(_0x1b9a25).attr('href'));
      });
      let _0x4236b2 = _0x365cf4[Math.floor(Math.random() * _0x365cf4.length)];
      axios.get(_0x4236b2).then(({
        data: _0x2c2280
      }) => {
        const _0x404b91 = cheerio.load(_0x2c2280);
        const _0x1fff77 = [];
        _0x404b91("#stickerPack > div > div.row > div > img").each(function (_0x8afba5, _0x4f627b) {
          _0x1fff77.push(_0x404b91(_0x4f627b).attr("src").split("&d=")[0x0]);
        });
        _0x31805e({
          'creator': "Fajar Ihsana",
          'title': _0x404b91("#intro > div > div > h1").text(),
          'author': _0x404b91("#intro > div > div > h5 > a").text(),
          'author_link': _0x404b91("#intro > div > div > h5 > a").attr("href"),
          'sticker': _0x1fff77
        });
      });
    });
  });
}
async function emoji(_0xcce591) {
  return new Promise((_0x1f062b, _0x3cebb3) => {
    axios.get("https://emojipedia.org/search/?q=" + encodeURIComponent(_0xcce591)).then(({
      data: _0x2aadbd
    }) => {
      const _0xa30ec9 = cheerio.load(_0x2aadbd);
      _0x1f062b({
        'creator': "Fajar Ihsana",
        'nama': _0xa30ec9("body > div.container > div.content > article > h1").text(),
        'result': {
          'apple': _0xa30ec9("body").find("li:nth-child(1) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr("src"),
          'google': _0xa30ec9("body").find("li:nth-child(2) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr("src"),
          'samsung': _0xa30ec9("body").find("li:nth-child(3) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr('src'),
          'microsoft': _0xa30ec9('body').find("li:nth-child(4) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr("src"),
          'whatsapp': _0xa30ec9("body").find("li:nth-child(5) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr("src"),
          'twitter': _0xa30ec9("body").find("li:nth-child(6) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr("src"),
          'facebook': _0xa30ec9("body").find("li:nth-child(7) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr('src'),
          'skype': _0xa30ec9("body").find("li:nth-child(8) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr("src"),
          'joypixels': _0xa30ec9('body').find("li:nth-child(9) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr("src"),
          'openemoji': _0xa30ec9('body').find("li:nth-child(10) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr("src"),
          'emojidex': _0xa30ec9("body").find("li:nth-child(11) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr('src'),
          'messenger': _0xa30ec9("body").find("li:nth-child(12) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr('src'),
          'lg': _0xa30ec9("body").find("li:nth-child(13) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr('src'),
          'htc': _0xa30ec9("body").find("li:nth-child(14) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr('src'),
          'mozilla': _0xa30ec9("body").find("li:nth-child(15) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr('src'),
          'softbank': _0xa30ec9("body").find("li:nth-child(16) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr("src"),
          'docomo': _0xa30ec9("body").find("li:nth-child(17) > div.vendor-container.vendor-rollout-target > div.vendor-image > img").attr("src")
        }
      });
    });
  });
}
async function ytPlayMp4(_0x1173e1) {
  return new Promise((_0x418043, _0x5d3d1d) => {
    try {
      const _0x23d64f = yts(_0x1173e1).then(_0x249961 => {
        const _0x3a039d = [];
        const _0x4e4f69 = _0x249961.all;
        for (let _0x51e259 = 0x0; _0x51e259 < _0x4e4f69.length; _0x51e259++) {
          if (_0x4e4f69[_0x51e259].type == "video") {
            let _0x28bc3a = _0x4e4f69[_0x51e259];
            _0x3a039d.push(_0x28bc3a.url);
          }
        }
        const _0x52d25c = ytdl.getVideoID(_0x3a039d[0x0]);
        const _0x2bb5e6 = ytdl.getInfo("https://www.youtube.com/watch?v=" + _0x52d25c).then(_0x303fcd => {
          let _0x3903aa = _0x303fcd.formats;
          let _0x58aca4 = [];
          for (let _0x2fe146 = 0x0; _0x2fe146 < _0x3903aa.length; _0x2fe146++) {
            if (_0x3903aa[_0x2fe146].container == "mp4" && _0x3903aa[_0x2fe146].hasVideo == true && _0x3903aa[_0x2fe146].hasAudio == true) {
              let _0x310d0d = _0x3903aa[_0x2fe146];
              _0x58aca4.push(_0x310d0d.url);
            }
          }
          const _0x544795 = _0x303fcd.player_response.microformat.playerMicroformatRenderer.title.simpleText;
          const _0x5cf665 = _0x303fcd.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0x0].url;
          const _0x342525 = _0x303fcd.player_response.microformat.playerMicroformatRenderer.ownerChannelName;
          const _0x36a9f4 = _0x303fcd.player_response.microformat.playerMicroformatRenderer.viewCount;
          const _0x31ab75 = _0x303fcd.player_response.microformat.playerMicroformatRenderer.publishDate;
          const _0x2e2ebd = {
            'title': _0x544795,
            'thumb': _0x5cf665,
            'channel': _0x342525,
            'published': _0x31ab75,
            'views': _0x36a9f4,
            'url': _0x58aca4[0x0]
          };
          return _0x2e2ebd;
        });
        return _0x2bb5e6;
      });
      _0x418043(_0x23d64f);
    } catch (_0x121310) {
      _0x5d3d1d(_0x121310);
    }
    console.log(error);
  });
}
async function ytPlayMp3(_0xe87586) {
  return new Promise((_0x7d03b6, _0xb6eb4a) => {
    try {
      const _0xdf29a8 = yts(_0xe87586).then(_0x426f2a => {
        const _0x1e7191 = [];
        const _0x37f830 = _0x426f2a.all;
        for (let _0x5b5b75 = 0x0; _0x5b5b75 < _0x37f830.length; _0x5b5b75++) {
          if (_0x37f830[_0x5b5b75].type == "video") {
            let _0x4f03d3 = _0x37f830[_0x5b5b75];
            _0x1e7191.push(_0x4f03d3.url);
          }
        }
        const _0xe5a182 = ytdl.getVideoID(_0x1e7191[0x0]);
        const _0x54ccdf = ytdl.getInfo("https://www.youtube.com/watch?v=" + _0xe5a182).then(_0x571ed9 => {
          let _0xe45a6 = _0x571ed9.formats;
          let _0x25ce61 = [];
          for (let _0x3f5b19 = 0x0; _0x3f5b19 < _0xe45a6.length; _0x3f5b19++) {
            if (_0xe45a6[_0x3f5b19].mimeType == "audio/webm; codecs=\"opus\"") {
              let _0x1624d1 = _0xe45a6[_0x3f5b19];
              _0x25ce61.push(_0x1624d1.url);
            }
          }
          const _0x51375b = _0x571ed9.player_response.microformat.playerMicroformatRenderer.title.simpleText;
          const _0x18d8c5 = _0x571ed9.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0x0].url;
          const _0x9425a1 = _0x571ed9.player_response.microformat.playerMicroformatRenderer.ownerChannelName;
          const _0x32957a = _0x571ed9.player_response.microformat.playerMicroformatRenderer.viewCount;
          const _0x21024b = _0x571ed9.player_response.microformat.playerMicroformatRenderer.publishDate;
          const _0x314a35 = {
            'status': true,
            'code': 0xc8,
            'creator': "@tkim×",
            'title': _0x51375b,
            'thumb': _0x18d8c5,
            'channel': _0x9425a1,
            'published': _0x21024b,
            'views': _0x32957a,
            'url': _0x25ce61[0x0]
          };
          return _0x314a35;
        });
        return _0x54ccdf;
      });
      _0x7d03b6(_0xdf29a8);
    } catch (_0x50971e) {
      _0xb6eb4a(_0x50971e);
    }
    console.log(error);
  });
}
async function ephoto(_0x4ec077, _0x3d2e03) {
  let _0x204842 = new FormData();
  let _0x5d80da = await axios.get(_0x4ec077, {
    'headers': {
      'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
    }
  });
  let _0x2ce3c4 = cheerio.load(_0x5d80da.data);
  let _0x435c72 = _0x2ce3c4("input[name=token]").val();
  let _0x15a05c = _0x2ce3c4("input[name=build_server]").val();
  let _0x5f6689 = _0x2ce3c4("input[name=build_server_id]").val();
  _0x204842.append("text[]", _0x3d2e03);
  _0x204842.append("token", _0x435c72);
  _0x204842.append("build_server", _0x15a05c);
  _0x204842.append("build_server_id", _0x5f6689);
  let _0x31f81d = await axios({
    'url': _0x4ec077,
    'method': "POST",
    'data': _0x204842,
    'headers': {
      'Accept': "*/*",
      'Accept-Language': 'en-US,en;q=0.9',
      'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
      'cookie': _0x5d80da.headers["set-cookie"]?.["join"]("; "),
      ..._0x204842.getHeaders()
    }
  });
  let _0x396c48 = cheerio.load(_0x31f81d.data);
  let _0x42d457 = JSON.parse(_0x396c48("input[name=form_value_input]").val());
  _0x42d457["text[]"] = _0x42d457.text;
  delete _0x42d457.text;
  let {
    data: _0x32728a
  } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(_0x42d457), {
    'headers': {
      'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
      'cookie': _0x5d80da.headers["set-cookie"].join("; ")
    }
  });
  return _0x15a05c + _0x32728a.image;
}
async function surah(_0x3e6fe1) {
  let {
    data: _0x32e304
  } = await axios.get("https://litequran.net/" + _0x3e6fe1);
  const _0x14d5af = cheerio.load(_0x32e304);
  const _0x199767 = [];
  const _0x14679b = [];
  var _0xb9c153 = _0x14d5af("body > main > article > h1").text();
  var _0x581820 = _0x14d5af("body > main > article > p").text();
  _0x14d5af("body > main > article > ol > li:nth-child(n)").each((_0x3629c7, _0x3e46d0) => {
    const _0x12adfb = _0x14d5af(_0x3e46d0).find("p.arabic").text();
    const _0x1754a3 = _0x14d5af(_0x3e46d0).find('p.translate').text();
    const _0x1105db = _0x14d5af(_0x3e46d0).find("p.meaning").text();
    _0x14679b.push({
      'arabic': _0x12adfb,
      'baca': _0x1754a3,
      'arti': _0x1105db
    });
  });
  _0x199767.push({
    'surah': _0xb9c153,
    'bismillah': _0x581820
  }, _0x14679b);
  return _0x199767;
}
async function listsurah() {
  let {
    data: _0x2149e5
  } = await axios.get("https://litequran.net/");
  const _0x3898df = cheerio.load(_0x2149e5);
  const _0x5300a0 = [];
  _0x3898df("body > main > ol > li:nth-child(n)").each((_0x47bdaa, _0x54daa9) => {
    const _0x40e271 = _0x3898df(_0x54daa9).find('a').text();
    const _0x91e7e4 = "https://litequran.net/" + _0x3898df(_0x54daa9).find('a').attr("href");
    _0x5300a0.push({
      'link': _0x91e7e4,
      'name_surah': _0x40e271
    });
  });
  return _0x5300a0;
}
async function selectSurah(_0x5ac482) {
  let {
    data: _0x509ce2
  } = await axios.get(_0x5ac482);
  const _0x3609cd = cheerio.load(_0x509ce2);
  const _0x24fe17 = [];
  const _0x1848d7 = [];
  var _0x4c3e5f = _0x3609cd("body > main > article > h1").text();
  var _0x569cac = _0x3609cd("body > main > article > p").text();
  _0x3609cd("body > main > article > ol > li:nth-child(n)").each((_0x271f02, _0x1bf362) => {
    const _0x560c2d = _0x3609cd(_0x1bf362).find("p.arabic").text();
    const _0x3318c5 = _0x3609cd(_0x1bf362).find('p.translate').text();
    const _0x5be391 = _0x3609cd(_0x1bf362).find("p.meaning").text();
    _0x1848d7.push({
      'arabic': _0x560c2d,
      'baca': _0x3318c5,
      'arti': _0x5be391
    });
  });
  _0x24fe17.push({
    'surah': _0x4c3e5f,
    'bismillah': _0x569cac
  }, _0x1848d7);
  return _0x24fe17;
}
async function getSurah(_0x18f47d) {
  const _0x18b4c1 = await listsurah();
  if (_0x18f47d < 0x1 || _0x18f47d > _0x18b4c1.length) {
    return "Nomor surah tidak valid.";
  }
  const _0x333906 = _0x18b4c1[_0x18f47d - 0x1];
  const _0x519861 = await selectSurah(_0x333906.link);
  let _0x45f8e8 = "*Berikut " + _0x519861[0x0].surah + "*\n\n";
  _0x519861[0x1].forEach(_0x4a798a => {
    _0x45f8e8 += _0x4a798a.arabic + "\n" + _0x4a798a.baca + "\n" + _0x4a798a.arti + "\n\n\n";
  });
  return _0x45f8e8;
}
const clean = _0x40a6c8 => {
  let _0x4282b2 = /(<([^>]+)>)/gi;
  _0x40a6c8 = _0x40a6c8.replace(/(<br?\s?\/>)/gi, " \n");
  return _0x40a6c8.replace(_0x4282b2, '');
};
async function shortener(_0x116d52) {
  return _0x116d52;
}
async function Tiktok(_0x385a53) {
  let _0x31a426 = await axios('https://lovetik.com/api/ajax/search', {
    'method': "POST",
    'data': new URLSearchParams(Object.entries({
      'query': _0x385a53
    }))
  });
  result = {};
  result.creator = "takim";
  result.title = clean(_0x31a426.data.desc);
  result.author = clean(_0x31a426.data.author);
  result.nowm = await _0x116d52;
  result.watermark = await _0x116d52;
  result.audio = await _0x116d52;
  result.thumbnail = await _0x116d52;
  return result;
}
async function ffstalk(_0x2f8ad6) {
  let _0x4ee0be = {
    'voucherPricePoint.id': 0x1f72,
    'voucherPricePoint.price': '',
    'voucherPricePoint.variablePrice': '',
    'email': '',
    'n': '',
    'userVariablePrice': '',
    'order.data.profile': '',
    'user.userId': _0x2f8ad6,
    'voucherTypeName': "FREEFIRE",
    'affiliateTrackingId': '',
    'impactClickId': '',
    'checkoutId': '',
    'tmwAccessToken': '',
    'shopLang': 'in_ID'
  };
  let _0x29edcd = await axios({
    'headers': {
      'Content-Type': "application/json; charset=utf-8"
    },
    'method': 'POST',
    'url': "https://order.codashop.com/id/initPayment.action",
    'data': _0x4ee0be
  });
  return {
    'id': _0x2f8ad6,
    'nickname': _0x29edcd.data.confirmationFields.roles[0x0].role
  };
}
async function mlstalk(_0x3ada9, _0x476f30) {
  return new Promise(async (_0x4d4038, _0x32dfb6) => {
    axios.post('https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store', new URLSearchParams(Object.entries({
      'productId': '1',
      'itemId': '2',
      'catalogId': '57',
      'paymentId': '352',
      'gameId': _0x3ada9,
      'zoneId': _0x476f30,
      'product_ref': "REG",
      'product_ref_denom': 'AE'
    })), {
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded",
        'Referer': "https://www.duniagames.co.id/",
        'Accept': "application/json"
      }
    }).then(_0x29bc80 => {
      _0x4d4038(_0x29bc80.data.data.gameDetail);
    })["catch"](_0xda89ae => {
      _0x32dfb6(_0xda89ae);
    });
  });
}
async function mediafire(_0x5659c1) {
  const _0x2acadc = await axios.get(_0x5659c1);
  const _0x276ad4 = cheerio.load(_0x2acadc.data);
  const _0x2ad500 = _0x276ad4('a#downloadButton').attr("href");
  const _0x1002f5 = _0x276ad4("a#downloadButton").text().replace("Download", '').replace('(', '').replace(')', '').replace("\n", '').replace("\n", '').replace("                         ", '');
  const _0x434d75 = _0x2ad500.split('/');
  const _0x56f3a9 = _0x434d75[0x5];
  mime = _0x56f3a9.split('.');
  mime = mime[0x1];
  return {
    'nama': _0x56f3a9,
    'mime': mime,
    'size': _0x1002f5,
    'link': _0x2ad500
  };
}
async function post(_0x3e295e, _0xec30d1 = {}, _0x183867) {
  let _0x36cfe7 = Object.keys(_0xec30d1).map(_0x8be928 => {
    let _0x233ab5 = _0xec30d1[_0x8be928];
    let _0x19fbeb = Array.isArray(_0x233ab5);
    let _0x1729d1 = encodeURIComponent(_0x8be928 + (_0x19fbeb ? '[]' : ''));
    if (!_0x19fbeb) {
      _0x233ab5 = [_0x233ab5];
    }
    let _0x268756 = [];
    for (let _0x2a6adc of _0x233ab5) _0x268756.push(_0x1729d1 + '=' + encodeURIComponent(_0x2a6adc));
    return _0x268756.join('&');
  }).join('&');
  return await fetch(_0x3e295e + '?' + _0x36cfe7, {
    'method': "GET",
    'headers': {
      'Accept': '*/*',
      'Accept-Language': "en-US,en;q=0.9",
      'User-Agent': "GoogleBot",
      'Cookie': _0x183867
    }
  });
}
async function textpro(_0x4494ab, _0x257cf2) {
  if (!/^https:\/\/textpro\.me\/.+\.html$/.test(_0x4494ab)) {
    throw new Error("Url Salah!!");
  }
  const _0x4f4f33 = await fetch(_0x4494ab, {
    'method': "GET",
    'headers': {
      'User-Agent': "GoogleBot"
    }
  });
  const _0xc6bddd = await _0x4f4f33.text();
  let _0x279f8c = _0x4f4f33.headers.get("set-cookie").split(',').map(_0x418eb5 => cookie.parse(_0x418eb5)).reduce((_0x2243a1, _0x1a235e) => {
    return {
      ..._0x2243a1,
      ..._0x1a235e
    };
  }, {});
  _0x279f8c = {
    '__cfduid': _0x279f8c.__cfduid,
    'PHPSESSID': _0x279f8c.PHPSESSID
  };
  _0x279f8c = Object.entries(_0x279f8c).map(([_0x3b563d, _0x2a9bd7]) => cookie.serialize(_0x3b563d, _0x2a9bd7)).join("; ");
  const _0x873420 = cheerio.load(_0xc6bddd);
  const _0x2c0be5 = _0x873420("input[name=\"token\"]").attr("value");
  const _0x2caf2d = new FormData();
  if (typeof _0x257cf2 === 'string') {
    _0x257cf2 = [_0x257cf2];
  }
  for (let _0x20cf56 of _0x257cf2) _0x2caf2d.append('text[]', _0x20cf56);
  _0x2caf2d.append('submit', 'Go');
  _0x2caf2d.append("token", _0x2c0be5);
  _0x2caf2d.append("build_server", "https://textpro.me");
  _0x2caf2d.append("build_server_id", 0x1);
  const _0x3449df = await fetch(_0x4494ab, {
    'method': "POST",
    'headers': {
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9',
      'User-Agent': "GoogleBot",
      'Cookie': _0x279f8c,
      ..._0x2caf2d.getHeaders()
    },
    'body': _0x2caf2d.getBuffer()
  });
  const _0x7b1963 = await _0x3449df.text();
  const _0x1c4040 = /<div.*?id="form_value".+>(.*?)<\/div>/.exec(_0x7b1963);
  if (!_0x1c4040) {
    throw new Error("Token Tidak Ditemukan!!");
  }
  const _0x5b1563 = await post("https://textpro.me/effect/create-image", JSON.parse(_0x1c4040[0x1]), _0x279f8c);
  const _0x432087 = await _0x5b1563.json();
  return "https://textpro.me" + _0x432087.fullsize_image;
}
async function pinterest(_0x4a94d5) {
  return new Promise((_0x450097, _0x588940) => {
    let _0x584375 = {
      'status': 0x194,
      'message': "Terjadi kesalahan"
    };
    gis({
      'searchTerm': _0x4a94d5 + " site:id.pinterest.com"
    }, (_0x160ab0, _0x229188) => {
      if (_0x160ab0) {
        return _0x584375;
      }
      let _0x2d0f9e = {
        'status': 0xc8,
        'creator': "@takim._×",
        'result': []
      };
      _0x229188.forEach(_0x5a7d65 => _0x2d0f9e.result.push(_0x5a7d65.url));
      _0x450097(_0x2d0f9e);
    });
  });
}
async function kodepos(_0x29def7) {
  return new Promise(async (_0x39f330, _0xce2d0d) => {
    let _0x500c8d = "https://carikodepos.com/?s=" + _0x29def7;
    await request.get({
      'headers': {
        'Accept': "application/json, text/javascript, */*;",
        'User-Agent': "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4209.3 Mobile Safari/537.36",
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
        'Accept-Language': "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
        'Origin': "https://carikodepos.com/",
        'Referer': "https://carikodepos.com/"
      },
      'url': _0x500c8d
    }, function (_0x41981d, _0x1d9c92, _0x17b596) {
      if (_0x41981d) {
        return _0xce2d0d(_0x41981d);
      }
      let _0xca969d = cheerio.load(_0x17b596);
      var _0x17dca1 = _0xca969d('tr');
      if (!_0x17dca1.length) {
        return _0xce2d0d("No result could be found");
      }
      var _0x575fcc = [];
      _0x17dca1.each(function (_0x5369d9) {
        if (_0x5369d9 != 0x0) {
          var _0x4b3695 = _0xca969d(this).find('td');
          var _0x4e605b = {};
          _0x4b3695.each(function (_0x1b8119) {
            var _0x3eec4b = _0xca969d(this).find('a').html();
            var _0x263c13 = _0x1b8119 == 0x0 ? 'province' : _0x1b8119 == 0x1 ? "city" : _0x1b8119 == 0x2 ? "subdistrict" : _0x1b8119 == 0x3 ? "urban" : "postalcode";
            _0x4e605b[_0x263c13] = _0x3eec4b;
          });
          _0x575fcc.push(_0x4e605b);
        }
      });
      return _0x39f330(_0x575fcc);
      console.log(_0x575fcc);
    });
  });
}
;
async function igdl(_0x50e9e0) {
  return new Promise(async (_0x4e1bcf, _0x5e37e6) => {
    try {
      const _0x3c75d2 = await axios("https://instasupersave.com/");
      const _0x187207 = _0x3c75d2.headers['set-cookie'];
      const _0x4809f5 = _0x187207[0x0].split(';')[0x0].replace("XSRF-TOKEN=", '').replace('%3D', '');
      var _0x5456e7 = {
        'method': "post",
        'url': "https://instasupersave.com/api/convert",
        'headers': {
          'origin': "https://instasupersave.com",
          'referer': "https://instasupersave.com/pt/",
          'sec-fetch-dest': "empty",
          'sec-fetch-mode': "cors",
          'sec-fetch-site': "same-origin",
          'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52",
          'x-xsrf-token': _0x4809f5,
          'Content-Type': 'application/json',
          'Cookie': "XSRF-TOKEN=" + _0x4809f5 + "; instasupersave_session=" + _0x4809f5
        },
        'data': {
          'url': _0x50e9e0
        }
      };
      axios(_0x5456e7).then(function (_0xc69273) {
        let _0x39b23e = [];
        if (Array.isArray(_0xc69273.data)) {
          _0xc69273.data.forEach(_0x274754 => {
            _0x39b23e.push(_0x274754.sd === undefined ? _0x274754.thumb : _0x274754.sd.url);
          });
        } else {
          _0x39b23e.push(_0xc69273.data.url[0x0].url);
        }
        _0x4e1bcf({
          'results_number': _0x39b23e.length,
          'url_list': _0x39b23e
        });
      })['catch'](function (_0x39828f) {
        _0x5e37e6(_0x39828f.message);
      });
    } catch (_0x58eb95) {
      _0x5e37e6(_0x58eb95.message);
    }
  });
}
module.exports = {
  'savefromV2': savefromV2,
  'ChatGpt': ChatGpt,
  'searchfilm': searchfilm,
  'getSurah': getSurah,
  'tafsir': tafsir,
  'instagram4': instagram4,
  'capcutdl': capcutdl,
  'instagram3': instagram3,
  'mediafiredll': mediafiredll,
  'cekkuota': cekkuota,
  'tele': tele,
  'instagram2': instagram2,
  'ytPlayMp4': ytPlayMp4,
  'ytPlayMp3': ytPlayMp3,
  'kodepos': kodepos,
  'pinterest': pinterest,
  'igdl': igdl,
  'textpro': textpro,
  'mediafire': mediafire,
  'ffstalk': ffstalk,
  'mlstalk': mlstalk,
  'Tiktok': Tiktok,
  'surah': surah,
  'listsurah': listsurah,
  'ephoto': ephoto,
  'emoji': emoji
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.bgGreen(color("[  UPDATE ]", "black")), chalk.white('' + __filename));
  delete require.cache[file];
  require(file);
});