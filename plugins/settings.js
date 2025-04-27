const fs = require('fs');
const path = require('path');
const configPath = path.join(__dirname, "../config.cjs");
let config = require(configPath);
const {
  Hamza
} = require("../lib/command");
Hamza({
  'pattern': "setprefix",
  'desc': "Set the command prefix",
  'category': "settings",
  'filename': __filename
}, async (_0x8af884, _0x30b512, _0x304bf1, {
  from: _0xb09153,
  q: _0x1d2db0,
  reply: _0x42b4ee,
  isOwner: _0x586807
}) => {
  if (!_0x586807) {
    return _0x42b4ee("❌ You are not the owner!");
  }
  if (!_0x1d2db0) {
    return _0x42b4ee("Please specify a prefix.");
  }
  config.PREFIX = _0x1d2db0;
  _0x42b4ee("Prefix has been set to \"" + _0x1d2db0 + "\".");
  fs.writeFileSync(configPath, "module.exports = " + JSON.stringify(config, null, 0x2) + ';');
});
Hamza({
  'pattern': "setnews",
  'desc': "Set the news jid",
  'category': "settings",
  'filename': __filename
}, async (_0x43a5b7, _0xaafa5e, _0x2fd5d4, {
  from: _0x347515,
  q: _0x53305b,
  reply: _0x195d6a,
  isOwner: _0x372386
}) => {
  if (!_0x372386) {
    return _0x195d6a("❌ You are not the owner!");
  }
  if (!_0x53305b) {
    return _0x195d6a("Please specify a jid.");
  }
  config.NEWS_JID = _0x53305b;
  _0x195d6a("News Jid has been set to \"" + _0x53305b + "\".");
  fs.writeFileSync(configPath, "module.exports = " + JSON.stringify(config, null, 0x2) + ';');
});
Hamza({
  'pattern': "setreact",
  'desc': "Set the Owner react",
  'category': "settings",
  'filename': __filename
}, async (_0x21033e, _0x301711, _0x190515, {
  from: _0x23bf01,
  q: _0x34b0bd,
  reply: _0x38ab3d,
  isOwner: _0x555675
}) => {
  if (!_0x555675) {
    return _0x38ab3d("❌ You are not the owner!");
  }
  if (!_0x34b0bd) {
    return _0x38ab3d("Please specify emoji.");
  }
  config.EMOJI = _0x34b0bd;
  _0x38ab3d("Owner React has been set to \"" + _0x34b0bd + "\".");
  fs.writeFileSync(configPath, "module.exports = " + JSON.stringify(config, null, 0x2) + ';');
});
Hamza({
  'pattern': "autoreadstatus",
  'desc': "Enable or disable auto-read status",
  'category': "settings",
  'filename': __filename
}, async (_0x209940, _0x4642ea, _0x1e43ed, {
  from: _0x53c035,
  q: _0x3095dc,
  reply: _0x31e70b,
  isOwner: _0x110464
}) => {
  if (!_0x110464) {
    return _0x31e70b("❌ You are not the owner!");
  }
  if (_0x3095dc === 'on') {
    config.AUTO_READ_STATUS = true;
    _0x31e70b("AUTO READ STATUS has been turned ON.");
  } else {
    if (_0x3095dc === "off") {
      config.AUTO_READ_STATUS = false;
      _0x31e70b("AUTO READ STATUS has been turned OFF.");
    } else {
      return _0x31e70b("Please specify \"on\" or \"off\".");
    }
  }
  fs.writeFileSync(configPath, "module.exports = " + JSON.stringify(config, null, 0x2) + ';');
});
Hamza({
  'pattern': "setmode",
  'desc': "Set the bot mode to public,groups,inbox or private",
  'category': 'settings',
  'filename': __filename
}, async (_0x105728, _0x5aac13, _0x4f971a, {
  from: _0x20a713,
  q: _0x3fca3e,
  reply: _0x5cd993,
  isOwner: _0xba7bdf
}) => {
  if (!_0xba7bdf) {
    return _0x5cd993("❌ You are not the owner!");
  }
  if (_0x3fca3e === "public" || _0x3fca3e === "private" || _0x3fca3e === "groups" || _0x3fca3e === "inbox") {
    config.MODE = _0x3fca3e;
    _0x5cd993("Bot mode has been set to \"" + _0x3fca3e + "\".");
    fs.writeFileSync(configPath, "module.exports = " + JSON.stringify(config, null, 0x2) + ';');
  } else {
    _0x5cd993("Please specify \"public\" or \"private\" or \"groups\" or \"inbox\" for the mode.");
  }
});
Hamza({
  'pattern': "setpresence",
  'desc': "Set the bot mode to public,groups,inbox or private",
  'category': "settings",
  'filename': __filename
}, async (_0x3d4532, _0x3dad06, _0x44daf7, {
  from: _0x1850e2,
  q: _0x5a6e16,
  reply: _0x37620d,
  isOwner: _0x242e8f
}) => {
  if (!_0x242e8f) {
    return _0x37620d("❌ You are not the owner!");
  }
  if (_0x5a6e16 === "online" || _0x5a6e16 === 'offline' || _0x5a6e16 === "typing" || _0x5a6e16 === "recording" || _0x5a6e16 === "paused") {
    config.PRESENCE = _0x5a6e16;
    _0x37620d("Bot PRESENCE has been set to \"" + _0x5a6e16 + "\".");
    fs.writeFileSync(configPath, "module.exports = " + JSON.stringify(config, null, 0x2) + ';');
  } else {
    _0x37620d("Please specify \"online\" or \"offline\" or \"typing\" or \"recording\" or \"paused\" for the presence.");
  }
});
Hamza({
  'pattern': "setownernumber",
  'desc': "Set the Owner number",
  'category': "settings",
  'filename': __filename
}, async (_0x5e9187, _0x1d05b8, _0x5adf4f, {
  from: _0x76f284,
  q: _0x2f3f54,
  reply: _0x15e6bc,
  isOwner: _0x21df18
}) => {
  if (!_0x21df18) {
    return _0x15e6bc("❌ You are not the owner!");
  }
  if (!_0x2f3f54) {
    return _0x15e6bc("Please specify a Owner number.");
  }
  config.OWNER_NUMBER = _0x2f3f54;
  _0x15e6bc("Owner number has been set to \"" + _0x2f3f54 + "\".");
  fs.writeFileSync(configPath, "module.exports = " + JSON.stringify(config, null, 0x2) + ';');
});
function createBooleanConfigCommand(_0x14db54) {
  return async (_0x378fad, _0x16ef1f, _0x2a8a9d, {
    from: _0x483837,
    q: _0x2607fa,
    reply: _0x10ceff,
    isOwner: _0x438332
  }) => {
    if (!_0x438332) {
      return _0x10ceff("❌ You are not the owner!");
    }
    try {
      if (_0x2607fa === 'on') {
        config[_0x14db54] = true;
        _0x10ceff(_0x14db54.replace('_', " ") + " has been turned ON.");
      } else {
        if (_0x2607fa === "off") {
          config[_0x14db54] = false;
          _0x10ceff(_0x14db54.replace('_', " ") + " has been turned OFF.");
        } else {
          _0x10ceff("Please specify \"on\" or \"off\" to set " + _0x14db54.replace('_', " ").toLowerCase() + '.');
          return;
        }
      }
      fs.writeFileSync(configPath, "module.exports = " + JSON.stringify(config, null, 0x2) + ';');
    } catch (_0x42066e) {
      console.log(_0x42066e);
      _0x10ceff('' + _0x42066e);
    }
  };
}
Hamza({
  'pattern': "autovoice",
  'desc': "Enable or disable auto voice messages",
  'category': "settings",
  'filename': __filename
}, createBooleanConfigCommand("AUTO_VOICE"));
Hamza({
  'pattern': "autosticker",
  'desc': "Enable or disable auto sticker",
  'category': "settings",
  'filename': __filename
}, createBooleanConfigCommand("AUTO_STICKER"));
Hamza({
  'pattern': "autoreply",
  'desc': "Enable or disable auto-reply",
  'category': "settings",
  'filename': __filename
}, createBooleanConfigCommand('AUTO_REPLY'));
Hamza({
  'pattern': "autoreact",
  'desc': "Enable or disable auto-reaction",
  'category': 'settings',
  'filename': __filename
}, createBooleanConfigCommand("AUTO_REACT"));
Hamza({
  'pattern': "welcome",
  'desc': "Enable or disable welcome messages",
  'category': "settings",
  'filename': __filename
}, createBooleanConfigCommand('WELCOME'));
Hamza({
  'pattern': 'antibad',
  'desc': "Enable or disable anti-bad language filter",
  'category': "settings",
  'filename': __filename
}, createBooleanConfigCommand("ANTI_BAD"));
Hamza({
  'pattern': "antibot",
  'desc': "Enable or disable anti-bot protection",
  'category': "settings",
  'filename': __filename
}, createBooleanConfigCommand('ANTI_BOT'));
Hamza({
  'pattern': 'antilink',
  'desc': "Enable or disable anti-link filter",
  'category': "settings",
  'filename': __filename
}, createBooleanConfigCommand('ANTI_LINK'));
Hamza({
  'pattern': "anticall",
  'desc': "Enable or disable anti-call filter",
  'category': 'settings',
  'filename': __filename
}, createBooleanConfigCommand('ANTI_CALL'));
Hamza({
  'pattern': "antidelete",
  'desc': "Enable or disable anti-delete filter",
  'category': "settings",
  'filename': __filename
}, createBooleanConfigCommand("ANTI_DELETE"));
Hamza({
  'pattern': "alwaysonline",
  'desc': "Enable or disable always online mode",
  'category': 'settings',
  'filename': __filename
}, createBooleanConfigCommand("ALWAYS_ONLINE"));
Hamza({
  'pattern': "countryblock",
  'desc': "Enable or disable COUNTRY block feature",
  'category': 'settings',
  'filename': __filename
}, createBooleanConfigCommand("COUNTRY_BLOCK"));
Hamza({
  'pattern': "readHamza",
  'desc': "Enable or disable Read Cmd feature",
  'category': 'settings',
  'filename': __filename
}, createBooleanConfigCommand("READ_CMD"));
Hamza({
  'pattern': "autotyping",
  'desc': "Enable or disable auto Typing",
  'category': "settings",
  'filename': __filename
}, createBooleanConfigCommand("AUTO_TYPING"));
Hamza({
  'pattern': 'autorecording',
  'desc': "Enable or disable auto Typing",
  'category': "settings",
  'filename': __filename
}, createBooleanConfigCommand("AUTO_RECORDING"));
Hamza({
  'pattern': "autonews",
  'desc': "Enable or disable auto Typing",
  'category': "settings",
  'filename': __filename
}, createBooleanConfigCommand('AUTO_NEWS'));
Hamza({
  'pattern': "ownerreact",
  'desc': "Enable or disable owner react",
  'category': "settings",
  'filename': __filename
}, createBooleanConfigCommand("OWNER_REACT"));
Hamza({
  'pattern': "aimode",
  'desc': "Enable or disable AI MODE",
  'category': "settings",
  'filename': __filename
}, createBooleanConfigCommand('AI_MODE'));