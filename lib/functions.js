const axios = require("axios");
const getBuffer = async (_0x3ee1ab, _0x72c270) => {
  try {
    if (_0x72c270) {
      _0x72c270;
    } else {
      ({});
    }
    var _0x5aff33 = await axios({
      'method': "get",
      'url': _0x3ee1ab,
      'headers': {
        'DNT': 0x1,
        'Upgrade-Insecure-Request': 0x1
      },
      ..._0x72c270,
      'responseType': 'arraybuffer'
    });
    return _0x5aff33.data;
  } catch (_0x2b3738) {
    console.log(_0x2b3738);
  }
};
const getGroupAdmins = _0x2901c9 => {
  var _0x3e7f53 = [];
  for (let _0x3ddfd8 of _0x2901c9) {
    if (_0x3ddfd8.admin !== null) {
      _0x3e7f53.push(_0x3ddfd8.id);
    } else {
      '';
    }
  }
  return _0x3e7f53;
};
const getRandom = _0x2158d6 => {
  return '' + Math.floor(Math.random() * 0x2710) + _0x2158d6;
};
const h2k = _0x316474 => {
  var _0x204cc5 = ['', 'K', 'M', 'B', 'T', 'P', 'E'];
  var _0x3647c8 = Math.log10(Math.abs(_0x316474)) / 0x3 | 0x0;
  if (_0x3647c8 == 0x0) {
    return _0x316474;
  }
  var _0x2c43fb = _0x204cc5[_0x3647c8];
  var _0x3ec430 = Math.pow(0xa, _0x3647c8 * 0x3);
  var _0x4bf8d4 = _0x316474 / _0x3ec430;
  var _0x2eee9f = _0x4bf8d4.toFixed(0x1);
  if (/\.0$/.test(_0x2eee9f)) {
    _0x2eee9f = _0x2eee9f.substr(0x0, _0x2eee9f.length - 0x2);
  }
  return _0x2eee9f + _0x2c43fb;
};
const isUrl = _0x45b078 => {
  return _0x45b078.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
};
const Json = _0x428a06 => {
  return JSON.stringify(_0x428a06, null, 0x2);
};
const runtime = _0x3602fb => {
  _0x3602fb = Number(_0x3602fb);
  var _0x25fbaf = Math.floor(_0x3602fb / 86400);
  var _0x3c532d = Math.floor(_0x3602fb % 86400 / 0xe10);
  var _0x4ebbb8 = Math.floor(_0x3602fb % 0xe10 / 0x3c);
  var _0x26fe6b = Math.floor(_0x3602fb % 0x3c);
  var _0x2578ef = _0x25fbaf > 0x0 ? _0x25fbaf + (_0x25fbaf == 0x1 ? " day, " : " days, ") : '';
  var _0x201b85 = _0x3c532d > 0x0 ? _0x3c532d + (_0x3c532d == 0x1 ? " hour, " : " hours, ") : '';
  var _0x3cb531 = _0x4ebbb8 > 0x0 ? _0x4ebbb8 + (_0x4ebbb8 == 0x1 ? " minute, " : " minutes, ") : '';
  var _0x58e4d8 = _0x26fe6b > 0x0 ? _0x26fe6b + (_0x26fe6b == 0x1 ? " second" : " seconds") : '';
  return _0x2578ef + _0x201b85 + _0x3cb531 + _0x58e4d8;
};
const sleep = async _0x47209a => {
  return new Promise(_0x540aa3 => setTimeout(_0x540aa3, _0x47209a));
};
const fetchJson = async (_0x42bc77, _0x375283) => {
  try {
    if (_0x375283) {
      _0x375283;
    } else {
      ({});
    }
    const _0x4a58dd = await axios({
      'method': "GET",
      'url': _0x42bc77,
      'headers': {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
      },
      ..._0x375283
    });
    return _0x4a58dd.data;
  } catch (_0x6a48dc) {
    return _0x6a48dc;
  }
};
module.exports = {
  'getBuffer': getBuffer,
  'getGroupAdmins': getGroupAdmins,
  'getRandom': getRandom,
  'h2k': h2k,
  'isUrl': isUrl,
  'Json': Json,
  'runtime': runtime,
  'sleep': sleep,
  'fetchJson': fetchJson
};