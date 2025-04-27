const crypto = require("crypto");
const {
  Hamza,
  commands
} = require("../lib/command");
const fetch = require("node-fetch");
const axios = require("axios");
const cheerio = require("cheerio");
const emailDataStore = {};
Hamza({
  'pattern': "gpass",
  'desc': "Generate a strong password.",
  'category': "other",
  'react': '🔐',
  'filename': __filename
}, async (_0xcd822d, _0x4d92a6, _0x32c86d, {
  from: _0x3cb86a,
  quoted: _0x40e246,
  body: _0x2f76ba,
  isCmd: _0x28a422,
  command: _0x2782fc,
  args: _0x342908,
  q: _0x3fc747,
  isGroup: _0x4afd04,
  sender: _0x59433e,
  senderNumber: _0x2ba1c4,
  botNumber2: _0x2edc1b,
  botNumber: _0xa7ea96,
  pushname: _0x5ea1f0,
  isMe: _0x4297ca,
  isOwner: _0x17a27e,
  groupMetadata: _0x36f46d,
  groupName: _0x35c8bd,
  participants: _0x38cf34,
  groupAdmins: _0x33d642,
  isBotAdmins: _0x42a698,
  isAdmins: _0x37f790,
  reply: _0x1bab99
}) => {
  try {
    const _0x4f3b0c = _0x342908[0x0] ? parseInt(_0x342908[0x0]) : 0xc;
    if (isNaN(_0x4f3b0c) || _0x4f3b0c < 0x8) {
      return _0x1bab99("Please provide a valid length for the password (minimum 8 characters).");
    }
    const _0x45e0d7 = _0x39bb40 => {
      let _0x3e35e3 = '';
      for (let _0x2a87df = 0x0; _0x2a87df < _0x39bb40; _0x2a87df++) {
        const _0x46932d = crypto.randomInt(0x0, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?".length);
        _0x3e35e3 += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?"[_0x46932d];
      }
      return _0x3e35e3;
    };
    const _0x1662a3 = _0x45e0d7(_0x4f3b0c);
    await _0xcd822d.sendMessage(_0x3cb86a, {
      'text': "🔐 *Your Strong Password* 🔐\n\nPlease find your generated password below:\n\n> QUEEN ANJU-MD"
    }, {
      'quoted': _0x4d92a6
    });
    await _0xcd822d.sendMessage(_0x3cb86a, {
      'text': _0x1662a3
    }, {
      'quoted': _0x4d92a6
    });
  } catch (_0xb572e) {
    console.log(_0xb572e);
    _0x1bab99("❌ Error generating password: " + _0xb572e.message);
  }
});
Hamza({
  'pattern': "githubstalk",
  'desc': "Fetch detailed GitHub user profile including profile picture.",
  'category': "other",
  'react': "🖥️",
  'filename': __filename
}, async (_0x3affd3, _0x3684f3, _0x3b10a5, {
  from: _0x1d4b9b,
  quoted: _0x4cbc7c,
  body: _0x25bd06,
  isCmd: _0x4f023c,
  command: _0x153cc0,
  args: _0x3cbd0e,
  q: _0x4d8083,
  isGroup: _0x3e393a,
  sender: _0x2da824,
  senderNumber: _0x454174,
  botNumber2: _0x27fbdc,
  botNumber: _0x3f6a6a,
  pushname: _0x49fe40,
  isMe: _0x161ae1,
  isOwner: _0x152165,
  groupMetadata: _0x2e6647,
  groupName: _0x3698ab,
  participants: _0x4ee303,
  groupAdmins: _0x5d2e7d,
  isBotAdmins: _0x36160c,
  isAdmins: _0x1a6eac,
  reply: _0x3f1faa
}) => {
  try {
    const _0x3c0210 = _0x3cbd0e[0x0];
    if (!_0x3c0210) {
      return _0x3f1faa("Please provide a GitHub username.");
    }
    const _0x21251c = "https://api.github.com/users/" + _0x3c0210;
    const _0x57ccfd = await axios.get(_0x21251c);
    const _0x57dd25 = _0x57ccfd.data;
    let _0x3e9203 = "     🔍_*QUEEN ANJU-MD GIT STALK*_🔎\n        \n👤 *Username*: " + (_0x57dd25.name || _0x57dd25.login) + "\n🔗 *Github Url*:(" + _0x57dd25.html_url + ")\n📝 *Bio*: " + (_0x57dd25.bio || "Not available") + "\n🏙️ *Location*: " + (_0x57dd25.location || 'Unknown') + "\n📊 *Public Repos*: " + _0x57dd25.public_repos + "\n👥 *Followers*: " + _0x57dd25.followers + " | Following: " + _0x57dd25.following + "\n📅 *Created At*: " + new Date(_0x57dd25.created_at).toDateString() + "\n🔭 *Public Gists*: " + _0x57dd25.public_gists + "\n\n> QUEEN ANJU-MD-GIT-STALK\n";
    await _0x3affd3.sendMessage(_0x1d4b9b, {
      'image': {
        'url': _0x57dd25.avatar_url
      },
      'caption': _0x3e9203
    }, {
      'quoted': _0x3684f3
    });
  } catch (_0x1597bb) {
    console.log(_0x1597bb);
    _0x3f1faa("Error fetching data: " + (_0x1597bb.response ? _0x1597bb.response.data.message : _0x1597bb.message));
  }
});
Hamza({
  'pattern': 'srepo',
  'desc': "Fetch information about a GitHub repository.",
  'category': "other",
  'react': '📁',
  'filename': __filename
}, async (_0x308d1c, _0x3ff206, _0x3324bc, {
  from: _0x4ba4fa,
  quoted: _0x3fe0de,
  body: _0x5a0748,
  isCmd: _0x118575,
  command: _0x51ba6d,
  args: _0x1d7997,
  q: _0x4ce961,
  isGroup: _0x3989f4,
  sender: _0x522828,
  senderNumber: _0xb717c7,
  botNumber2: _0x1602df,
  botNumber: _0x783a0d,
  pushname: _0x1356a2,
  isMe: _0x148177,
  isOwner: _0x131f39,
  groupMetadata: _0x264748,
  groupName: _0xa07882,
  participants: _0xc7b4da,
  groupAdmins: _0x41f2c3,
  isBotAdmins: _0x1df367,
  isAdmins: _0x33cf4,
  reply: _0x40d89b
}) => {
  try {
    const _0x22ba97 = _0x1d7997.join(" ");
    if (!_0x22ba97) {
      return _0x40d89b("Please provide a GitHub repository name in the format `owner/repo`.");
    }
    const _0x253ab9 = "https://api.github.com/repos/" + _0x22ba97;
    const _0x5dc7c5 = await axios.get(_0x253ab9);
    const _0x598ad3 = _0x5dc7c5.data;
    let _0x4c44a3 = "📁_*GitHub Repository Info*_📁\n\n";
    _0x4c44a3 += "📌 *Name*: " + _0x598ad3.name + "\n";
    _0x4c44a3 += "🔗 *URL*: " + _0x598ad3.html_url + "\n";
    _0x4c44a3 += "📝 *Description*: " + _0x598ad3.description + "\n";
    _0x4c44a3 += "⭐ *Stars*: " + _0x598ad3.stargazers_count + "\n";
    _0x4c44a3 += "🍴 *Forks*: " + _0x598ad3.forks_count + "\n";
    _0x4c44a3 += "\n";
    _0x4c44a3 += "> QUEEN ANJU-MD\n";
    await _0x308d1c.sendMessage(_0x4ba4fa, {
      'text': _0x4c44a3
    }, {
      'quoted': _0x3ff206
    });
  } catch (_0x381865) {
    console.log(_0x381865);
    _0x40d89b("Error fetching repository info: " + _0x381865.message);
  }
});
Hamza({
  'pattern': "weather",
  'desc': "🌤 Get weather information for a location",
  'react': '🌤',
  'category': "other",
  'filename': __filename
}, async (_0x17c3a1, _0x1569f0, _0x52bd3f, {
  from: _0x110bff,
  q: _0x2b29aa,
  reply: _0x5e1bcc
}) => {
  try {
    if (!_0x2b29aa) {
      return _0x5e1bcc("❗ Please provide a city name. Usage: .weather [city name]");
    }
    const _0x4a6bf9 = 'http://api.openweathermap.org/data/2.5/weather?q=' + _0x2b29aa + "&appid=" + "2d61a72574c11c4f36173b627f8cb177" + '&units=metric';
    const _0x32eceb = await axios.get(_0x4a6bf9);
    const _0x46b2b5 = _0x32eceb.data;
    const _0x198cbe = "\n🌍 *Weather Information for " + _0x46b2b5.name + ", " + _0x46b2b5.sys.country + "* 🌍\n\n🌡️ *Temperature*: " + _0x46b2b5.main.temp + "°C\n🌡️ *Feels Like*: " + _0x46b2b5.main.feels_like + "°C\n🌡️ *Min Temp*: " + _0x46b2b5.main.temp_min + "°C\n🌡️ *Max Temp*: " + _0x46b2b5.main.temp_max + "°C\n💧 *Humidity*: " + _0x46b2b5.main.humidity + "%\n☁️ *Weather*: " + _0x46b2b5.weather[0x0].main + "\n🌫️ *Description*: " + _0x46b2b5.weather[0x0].description + "\n💨 *Wind Speed*: " + _0x46b2b5.wind.speed + " m/s\n🔽 *Pressure*: " + _0x46b2b5.main.pressure + " hPa\n\nPowered by OpenWeatherMap 🌦️\n";
    return _0x5e1bcc(_0x198cbe);
  } catch (_0x3edcb9) {
    console.log(_0x3edcb9);
    if (_0x3edcb9.response && _0x3edcb9.response.status === 0x194) {
      return _0x5e1bcc("🚫 City not found. Please check the spelling and try again.");
    }
    return _0x5e1bcc("⚠️ An error occurred while fetching the weather information. Please try again later.");
  }
});
Hamza({
  'pattern': "cal",
  'desc': "Calculate a mathematical expression.",
  'use': ".calc <expression>",
  'react': '📠',
  'category': 'other',
  'filename': __filename
}, async (_0x34c915, _0x9da491, _0x54558f, {
  from: _0x5c428e,
  args: _0x5e1c14,
  quoted: _0x249fb4,
  body: _0x25d4bf,
  isCmd: _0xc850b4,
  command: _0x1be3d4,
  q: _0x201f8b,
  isGroup: _0x41e6c5,
  sender: _0xb7f388,
  senderNumber: _0x2e5fe3,
  botNumber2: _0x137f18,
  botNumber: _0x41dbd8,
  pushname: _0x2b6aac,
  isMe: _0x4813e7,
  isOwner: _0x43131c,
  groupMetadata: _0x45f34a,
  groupName: _0x587ef5,
  participants: _0x3e1525,
  groupAdmins: _0x180053,
  isBotAdmins: _0x2ee8b4,
  isAdmins: _0x4c8be7,
  reply: _0x4f1fde
}) => {
  try {
    if (_0x5e1c14.length === 0x0) {
      return _0x4f1fde("Please provide a mathematical expression.");
    }
    const _0x455628 = _0x5e1c14.join(" ");
    let _0x362e91;
    try {
      _0x362e91 = new Function("return " + _0x455628)();
    } catch (_0x552c75) {
      return _0x4f1fde("Invalid mathematical expression.");
    }
    await _0x34c915.sendMessage(_0x5c428e, {
      'text': "Calculater: " + _0x362e91
    }, {
      'quoted': _0x9da491
    });
  } catch (_0x38af04) {
    console.log(_0x38af04);
    await _0x34c915.sendMessage(_0x5c428e, {
      'react': {
        'text': '❌',
        'key': _0x9da491.key
      }
    });
    _0x4f1fde("Error: " + _0x38af04.message);
  }
});
Hamza({
  'pattern': "currency",
  'desc': "Convert an amount from one currency to another.",
  'use': ".currency <amount> <source currency> <target currency>",
  'react': '💻',
  'category': 'other',
  'filename': __filename
}, async (_0x19810f, _0x35cb27, _0x1acab5, {
  from: _0x3c8345,
  args: _0x1dff8c,
  quoted: _0x30dc2a,
  body: _0x1a2beb,
  isCmd: _0x2b4bed,
  command: _0x31ce92,
  q: _0x25034f,
  isGroup: _0x92154,
  sender: _0xb8a335,
  senderNumber: _0x11c626,
  botNumber2: _0x4a58e3,
  botNumber: _0x2719d0,
  pushname: _0x3e4a73,
  isMe: _0x42543a,
  isOwner: _0x132f96,
  groupMetadata: _0xd0abfa,
  groupName: _0x545502,
  participants: _0x3bc9a8,
  groupAdmins: _0x2ae32a,
  isBotAdmins: _0x1ae5e0,
  isAdmins: _0x43862c,
  reply: _0x4d16a2
}) => {
  try {
    if (_0x1dff8c.length < 0x3) {
      return _0x4d16a2("Please provide the amount, source currency, and target currency (e.g., 100 USD EUR).");
    }
    const _0x29e9b5 = parseFloat(_0x1dff8c[0x0]);
    const _0x52168c = _0x1dff8c[0x1].toUpperCase();
    const _0x23fe65 = _0x1dff8c[0x2].toUpperCase();
    const _0x4f497a = await fetch("https://api.exchangerate-api.com/v4/latest/" + _0x52168c);
    const _0x4200b8 = await _0x4f497a.json();
    if (_0x4200b8.rates[_0x23fe65]) {
      const _0x437f3b = (_0x29e9b5 * _0x4200b8.rates[_0x23fe65]).toFixed(0x2);
      return await _0x19810f.sendMessage(_0x3c8345, {
        'text': _0x29e9b5 + " " + _0x52168c + " is equal to " + _0x437f3b + " " + _0x23fe65
      }, {
        'quoted': _0x35cb27
      });
    } else {
      return _0x4d16a2("Could not find conversion rate for: " + _0x23fe65);
    }
  } catch (_0xdd965e) {
    console.log(_0xdd965e);
    await _0x19810f.sendMessage(_0x3c8345, {
      'react': {
        'text': '❌',
        'key': _0x35cb27.key
      }
    });
    _0x4d16a2("Error: " + _0xdd965e.message);
  }
});
Hamza({
  'pattern': "translate",
  'desc': "Translate text to another language.",
  'react': '💡',
  'category': "other",
  'use': ".translate <language code> <text>",
  'filename': __filename
}, async (_0xbb19c5, _0x510b31, _0x11cbf7, {
  from: _0x4ccda8,
  args: _0x237672,
  reply: _0x126c57
}) => {
  try {
    if (_0x237672.length < 0x2) {
      return _0x126c57("Please provide a language code and text to translate.");
    }
    const [_0x581451, ..._0x2e77ee] = _0x237672;
    const _0x5bf737 = _0x2e77ee.join(" ");
    if (_0x581451.length !== 0x2) {
      return _0x126c57("Invalid language code. Use a 2-letter code (e.g., \"es\" for Spanish).");
    }
    const _0x3d434b = await fetch("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(_0x5bf737) + "&langpair=en|" + _0x581451);
    const _0x1130b9 = await _0x3d434b.json();
    return _0x1130b9.responseData && _0x1130b9.responseData.translatedText ? await _0xbb19c5.sendMessage(_0x4ccda8, {
      'text': _0x1130b9.responseData.translatedText
    }, {
      'quoted': _0x510b31
    }) : _0x126c57("Translation failed. Please check the language code and text.");
  } catch (_0x56fce7) {
    console.log(_0x56fce7);
    await _0xbb19c5.sendMessage(_0x4ccda8, {
      'react': {
        'text': '❌',
        'key': _0x510b31.key
      }
    });
    return _0x126c57("Error: " + _0x56fce7.message);
  }
});
Hamza({
  'pattern': 'tempmail',
  'desc': "Create temporary email address and use it as needed.",
  'react': '📧',
  'use': ".tempmail",
  'category': "other",
  'filename': __filename
}, async (_0x5ff013, _0x71a2f5, _0xd707e2, {
  from: _0x4b2189,
  sender: _0x3a819a,
  reply: _0xa7c4d5
}) => {
  try {
    if (!emailDataStore[_0x3a819a]) {
      const _0x2ec863 = await tempmail.create();
      if (!_0x2ec863 || !_0x2ec863[0x0]) {
        return await _0xa7c4d5("Request Denied!");
      }
      const [_0x3cf7dc, _0x1a69e4] = _0x2ec863[0x0].split('@');
      emailDataStore[_0x3a819a] = {
        'email': _0x2ec863[0x0],
        'login': _0x3cf7dc,
        'domain': _0x1a69e4
      };
    }
    const _0x5d8d95 = emailDataStore[_0x3a819a];
    await _0x5ff013.sendMessage(_0x4b2189, {
      'text': "NEW MAIL\n\nEMAIL: " + _0x5d8d95.email + "\nLOGIN: " + _0x5d8d95.login + "\nADDRESS: " + _0x5d8d95.domain + "\n"
    }, {
      'quoted': _0x71a2f5
    });
  } catch (_0x43a944) {
    console.log(_0x43a944);
    await _0x5ff013.sendMessage(_0x4b2189, {
      'react': {
        'text': '❌',
        'key': _0x71a2f5.key
      }
    });
    return _0xa7c4d5("Request Denied!");
  }
});
Hamza({
  'pattern': 'checkmail',
  'desc': "Check mails in your temporary email address.",
  'react': '📧',
  'use': '.checkmail',
  'category': 'other',
  'filename': __filename
}, async (_0x2a486a, _0x2474c7, _0x2b5a1c, {
  from: _0x4ab68b,
  sender: _0x30abb3,
  reply: _0x4c4890
}) => {
  try {
    const _0x39f1b2 = emailDataStore[_0x30abb3];
    if (!_0x39f1b2 || !_0x39f1b2.email) {
      return await _0x2a486a.sendMessage(_0x4ab68b, {
        'text': "You Didn't Create Any Mail"
      }, {
        'quoted': _0x2474c7
      });
    }
    const _0x3f98bf = await tempmail.mails(_0x39f1b2.login, _0x39f1b2.domain);
    if (!_0x3f98bf || _0x3f98bf.length === 0x0) {
      return await _0x2a486a.sendMessage(_0x4ab68b, {
        'text': "EMPTY ➪ No Mails Here"
      }, {
        'quoted': _0x2474c7
      });
    }
    for (const _0x56aa9e of _0x3f98bf) {
      const _0x2eb6d8 = await tempmail.emailContent(_0x39f1b2.login, _0x39f1b2.domain, _0x56aa9e.id);
      if (_0x2eb6d8) {
        const _0x80d2d1 = "From ➪ " + _0x56aa9e.from + "\nDate ➪ " + _0x56aa9e.date + "\nEMAIL ID ➪ [\n                " + _0x56aa9e.id + "]\nSubject ➪ " + _0x56aa9e.subject + "\nContent ➪ " + _0x2eb6d8;
        await _0x2a486a.sendMessage(_0x4ab68b, {
          'text': _0x80d2d1
        }, {
          'quoted': _0x2474c7
        });
      }
    }
  } catch (_0x5f49e2) {
    console.log(_0x5f49e2);
    await _0x2a486a.sendMessage(_0x4ab68b, {
      'react': {
        'text': '❌',
        'key': _0x2474c7.key
      }
    });
    return _0x4c4890("Request Denied!");
  }
});
Hamza({
  'pattern': "delmail",
  'desc': "Delete temporary email address.",
  'react': '❌',
  'use': ".delmail",
  'category': "other",
  'filename': __filename
}, async (_0x51eaff, _0x1b8aa6, _0x2a36c5, {
  from: _0x3e2c47,
  sender: _0x522436,
  reply: _0x46efba
}) => {
  try {
    return emailDataStore[_0x522436] ? (delete emailDataStore[_0x522436], await _0x51eaff.sendMessage(_0x3e2c47, {
      'text': "Deleted the email address."
    }, {
      'quoted': _0x1b8aa6
    })) : await _0x51eaff.sendMessage(_0x3e2c47, {
      'text': "No email address to delete."
    }, {
      'quoted': _0x1b8aa6
    });
  } catch (_0x29e2b2) {
    console.log(_0x29e2b2);
    await _0x51eaff.sendMessage(_0x3e2c47, {
      'react': {
        'text': '❌',
        'key': _0x1b8aa6.key
      }
    });
    return _0x46efba("Request Denied!");
  }
});
const tempmail = {
  'create': async () => {
    try {
      const _0x866a2a = await axios.get('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1');
      return _0x866a2a.data;
    } catch (_0x598a0b) {
      console.log(_0x598a0b);
      return null;
    }
  },
  'mails': async (_0x1819a7, _0x2771cb) => {
    const _0xadfb4e = "https://www.1secmail.com/api/v1/?action=getMessages&login=" + _0x1819a7 + "&domain=" + _0x2771cb;
    try {
      const _0x21e745 = await axios.get(_0xadfb4e);
      return _0x21e745.data;
    } catch (_0x198050) {
      console.log(_0x198050);
      return null;
    }
  },
  'emailContent': async (_0x19f387, _0x5f12c0, _0x1b562c) => {
    const _0x3c00e1 = 'https://www.1secmail.com/api/v1/?action=readMessage&login=' + _0x19f387 + "&domain=" + _0x5f12c0 + "&id=" + _0x1b562c;
    try {
      const _0xe91282 = await axios.get(_0x3c00e1);
      const _0x37d390 = _0xe91282.data;
      const _0xb5bf02 = _0x37d390.htmlBody;
      const _0x5ac88e = cheerio.load(_0xb5bf02);
      const _0x3e842b = _0x5ac88e.text();
      return _0x3e842b;
    } catch (_0x5113d1) {
      console.log(_0x5113d1);
      return null;
    }
  }
};
Hamza({
  'pattern': "password",
  'desc': "Generate a strong password.",
  'category': "other",
  'use': ".password",
  'react': '📠',
  'filename': __filename
}, async (_0x44aebc, _0x520cbe, _0x39cf84, {
  from: _0x492215,
  quoted: _0x280850,
  body: _0x385fa,
  isCmd: _0x33cc0b,
  command: _0x4a9960,
  args: _0x120058,
  q: _0x58b766,
  isGroup: _0x36dbf8,
  sender: _0x1f1f4b,
  senderNumber: _0x106b8e,
  botNumber2: _0x3ebc50,
  botNumber: _0x1f95bb,
  pushname: _0x302f0b,
  isMe: _0x3f99e4,
  isOwner: _0x30835b,
  groupMetadata: _0x161e77,
  groupName: _0x35d34b,
  participants: _0x130731,
  groupAdmins: _0x35f5f4,
  isBotAdmins: _0x2973b3,
  isAdmins: _0x4c3319,
  reply: _0x2e00f8
}) => {
  try {
    const _0xca49d8 = _0x120058[0x0] ? parseInt(_0x120058[0x0]) : 0xc;
    if (isNaN(_0xca49d8) || _0xca49d8 < 0x8) {
      return _0x2e00f8("Provide A Length Of At Least 8.");
    }
    const _0x16f10c = _0x132dc4 => {
      let _0x112168 = '';
      for (let _0x14918e = 0x0; _0x14918e < _0x132dc4; _0x14918e++) {
        const _0x42fe5b = crypto.randomInt(0x0, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?'.length);
        _0x112168 += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?'[_0x42fe5b];
      }
      return _0x112168;
    };
    const _0x503a25 = _0x16f10c(_0xca49d8);
    await _0x44aebc.sendMessage(_0x492215, {
      'text': "Please find your generated password below:\n\n> *> SHADOW MD ®*"
    }, {
      'quoted': _0x520cbe
    });
    await _0x44aebc.sendMessage(_0x492215, {
      'text': _0x503a25
    }, {
      'quoted': _0x520cbe
    });
  } catch (_0xb60ed4) {
    console.log(_0xb60ed4);
    _0x2e00f8("❌ єяяσя gєηєяαтιηg ραѕѕωσя∂: " + _0xb60ed4.message);
  }
});
Hamza({
  'pattern': 'hijac',
  'desc': "Hijack a group.",
  'category': "other",
  'react': '💻',
  'use': ".hijac",
  'filename': __filename
}, async (_0x34f5b3, _0x33e469, _0x3d2e0d, {
  from: _0x4517ad,
  quoted: _0x52e932,
  body: _0x1f80c7,
  isCmd: _0x1bb6f6,
  command: _0x1cac66,
  args: _0x9b6e97,
  q: _0x23b99f,
  isGroup: _0x5191f1,
  sender: _0x367074,
  senderNumber: _0x4b1fd8,
  botNumber2: _0x4cf91b,
  botNumber: _0x25abd6,
  pushname: _0x18b818,
  isMe: _0x5e911c,
  isOwner: _0x170e7e,
  groupMetadata: _0x394359,
  groupName: _0x30e9c7,
  participants: _0x400b8f,
  groupAdmins: _0xe6a731,
  isBotAdmins: _0xc84ef4,
  isAdmins: _0x22bf66,
  reply: _0x3ab9d1
}) => {
  try {
    const _0x575fd0 = ["💻 HIJAC STARTING... 💻", '', "Initializing HIJAC tools... 🛠️", "Connecting to remote servers... 🌐", '', "[██████████] 10% ⏳", "[███████████████████] 20% ⏳", "[███████████████████████] 30% ⏳", "[██████████████████████████] 40% ⏳", "[███████████████████████████████] 50% ⏳", "[█████████████████████████████████████] 60% ⏳", "[██████████████████████████████████████████] 70% ⏳", "[██████████████████████████████████████████████] 80% ⏳", "[██████████████████████████████████████████████████] 90% ⏳", "[████████████████████████████████████████████████████] 100% ✅", '', "🔒 System Breach: Successful! 🔓", "🚀 Command Execution: Complete! 🎯", '', "📡 Transmitting data... 📤", "🕵️‍♂️ Ensuring stealth... 🤫", "🔧 Finalizing operations... 🏁", '', "⚠️ Note: All actions are for demonstration purposes only.", "⚠️ Reminder: Ethical hacking is the only way to ensure security.", '', "> GROUP HIJAC COMPLETE BY BYTE☣"];
    for (const _0x550581 of _0x575fd0) {
      await _0x34f5b3.sendMessage(_0x4517ad, {
        'text': _0x550581
      }, {
        'quoted': _0x33e469
      });
      await new Promise(_0x25cd38 => setTimeout(_0x25cd38, 0x3e8));
    }
  } catch (_0x339c3b) {
    console.log(_0x339c3b);
    _0x3ab9d1("❌ *Error!* " + _0x339c3b.message);
  }
});