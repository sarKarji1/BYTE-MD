const {
  Hamza,
  commands
} = require("../lib/command");
Hamza({
  'pattern': 'kick',
  'alias': ['..'],
  'desc': "Kicks replied/quoted user from group.",
  'react': '➖',
  'category': "group",
  'filename': __filename,
  'use': '<quote|reply|number>'
}, async (_0x2103b1, _0x433383, _0x3ceb9b, {
  from: _0xd2e28c,
  quoted: _0x425638,
  body: _0xc62c45,
  isCmd: _0x4f1155,
  command: _0x5264b4,
  args: _0xa7c332,
  q: _0x2c5b87,
  isGroup: _0x22bb66,
  sender: _0x10dd94,
  senderNumber: _0x3336ad,
  botNumber2: _0x25518e,
  botNumber: _0xcbd43,
  pushname: _0x4f7005,
  isMe: _0x5995ec,
  isOwner: _0x5ed7e9,
  groupMetadata: _0x256f40,
  groupName: _0x1668aa,
  participants: _0x44655b,
  groupAdmins: _0x4044df,
  isBotAdmins: _0x47fe34,
  isAdmins: _0x1f90d0,
  reply: _0x2a5a31
}) => {
  try {
    if (!_0x22bb66) {
      return _0x2a5a31("only for groups");
    }
    if (!_0x47fe34) {
      return _0x2a5a31("I can't do that. give group admin");
    }
    if (!_0x4044df) {
      return _0x2a5a31("You are not a admin.");
    }
    const _0x4c2c36 = _0x3ceb9b.quoted.sender;
    if (!_0x4c2c36) {
      return _0x2a5a31("*Please give me a user to kick ❗*");
    }
    await _0x2103b1.groupParticipantsUpdate(_0xd2e28c, [_0x4c2c36], 'remove');
    _0x2a5a31(_0x4c2c36 + " *has been kicked out of the group!*");
  } catch (_0x596b15) {
    _0x2a5a31("*Done ✓✓*\n\n*POWERED BY TALKDROVE*");
    l(_0x596b15);
  }
});
Hamza({
  'pattern': "add",
  'alias': ["invite"],
  'desc': "Adds a user to the group.",
  'react': '➕',
  'category': "group",
  'filename': __filename,
  'use': "<number>"
}, async (_0x11ffab, _0x1762aa, _0x35e9a7, {
  from: _0xc68452,
  quoted: _0x4ff788,
  body: _0x4461ca,
  isCmd: _0x10b61b,
  command: _0x311889,
  args: _0x544cf1,
  q: _0x177d16,
  isGroup: _0x12405f,
  sender: _0x280e08,
  senderNumber: _0xdead1b,
  botNumber2: _0x5dcf50,
  botNumber: _0x1c4ac5,
  pushname: _0x2f381d,
  isMe: _0x6cce93,
  isOwner: _0x3b56ee,
  groupMetadata: _0x1c0b0b,
  groupName: _0x1f3a09,
  participants: _0x3db572,
  groupAdmins: _0x32b732,
  isBotAdmins: _0x1466e2,
  isAdmins: _0x5ea0ba,
  reply: _0x10bf8c
}) => {
  try {
    if (!_0x12405f) {
      return _0x10bf8c("only for groups");
    }
    if (!_0x1466e2) {
      return _0x10bf8c("I can't do that. give group admin");
    }
    if (!_0x32b732) {
      return _0x10bf8c("You are not a admin.");
    }
    if (!_0x177d16 || isNaN(_0x177d16)) {
      return _0x10bf8c("Please provide a valid phone number to add.");
    }
    const _0x57b9de = _0x177d16 + "@s.whatsapp.net";
    await _0x11ffab.groupParticipantsUpdate(_0xc68452, [_0x57b9de], "add");
    _0x10bf8c("User " + _0x177d16 + " has been added to the group.\n\n*POWERED BY TALKDROVE*");
  } catch (_0x1fe30d) {
    console.error("Error adding user:", _0x1fe30d);
    _0x10bf8c("An error occurred while adding the user. Please make sure the number is correct and they are not already in the group.");
  }
});
Hamza({
  'pattern': "delete",
  'react': '⛔',
  'alias': [','],
  'desc': "delete message",
  'category': "group",
  'use': ".del",
  'filename': __filename
}, async (_0x4d1dba, _0x1adbe6, _0x4de7ec, {
  from: _0x57e66a,
  quoted: _0x20473c,
  body: _0x22c071,
  isCmd: _0x5043ce,
  command: _0x4a05a4,
  args: _0x47ec5f,
  q: _0x1e5a82,
  isGroup: _0x36c48e,
  sender: _0x57545f,
  senderNumber: _0x59aeb3,
  botNumber2: _0x3e97e0,
  botNumber: _0x554696,
  pushname: _0x30cf44,
  isMe: _0x495bcd,
  isOwner: _0x39de78,
  groupMetadata: _0x1b8c3c,
  groupName: _0x31fe62,
  participants: _0x5b73ad,
  groupAdmins: _0x245c13,
  isBotAdmins: _0x2596f9,
  isAdmins: _0x26802a,
  reply: _0xdbd0c0
}) => {
  try {
    const _0x4953ea = {
      'remoteJid': _0x4de7ec.chat,
      'fromMe': false,
      'id': _0x4de7ec.quoted.id,
      'participant': _0x4de7ec.quoted.sender
    };
    await _0x4d1dba.sendMessage(_0x4de7ec.chat, {
      'delete': _0x4953ea
    });
  } catch (_0x450abe) {
    _0xdbd0c0("*Error !!*");
    l(_0x450abe);
  }
});
Hamza({
  'pattern': "kickall",
  'desc': "Kicks all non-admin members from the group.",
  'react': '😎',
  'category': "group",
  'filename': __filename
}, async (_0x557239, _0x1b8af8, _0x403cdc, {
  from: _0x4ff698,
  isGroup: _0x51c7d0,
  groupMetadata: _0x1e029c,
  groupAdmins: _0x21a0ef,
  isBotAdmins: _0x2be82f,
  reply: _0x1a6584
}) => {
  try {
    if (!_0x51c7d0) {
      return _0x1a6584("This command is only for groups.");
    }
    if (!_0x2be82f) {
      return _0x1a6584("I need admin privileges to kick users.");
    }
    const _0x37e5d9 = _0x1e029c.participants;
    const _0x202b9e = _0x37e5d9.filter(_0x26e9b8 => !_0x21a0ef.includes(_0x26e9b8.id));
    if (_0x202b9e.length === 0x0) {
      return _0x1a6584("There are no non-admin members to kick.");
    }
    for (let _0x241e21 of _0x202b9e) {
      await _0x557239.groupParticipantsUpdate(_0x403cdc.chat, [_0x241e21.id], 'remove');
    }
    _0x1a6584("Successfully kicked all non-admin members from the group.\n\n*POWERED BY TALKDROVE*");
  } catch (_0x4fad5f) {
    console.error("Error kicking users:", _0x4fad5f);
    _0x1a6584("An error occurred while trying to kick all members. Please try again.");
  }
});
Hamza({
  'pattern': "opentime",
  'react': '🔖',
  'desc': "To open group to a time",
  'category': "group",
  'use': ".opentime",
  'filename': __filename
}, async (_0x5c5854, _0x23d577, _0x4429a1, {
  from: _0x25b0c7,
  prefix: _0x4aa9cc,
  l: _0x49ed45,
  quoted: _0x4b44dc,
  body: _0xd253df,
  isCmd: _0x5dd2c1,
  command: _0x371627,
  args: _0x3bc005,
  q: _0x1c2757,
  isGroup: _0xa4081c,
  sender: _0x786936,
  senderNumber: _0x26eeb4,
  botNumber2: _0x491451,
  botNumber: _0x20a9db,
  pushname: _0x3b02ac,
  isMe: _0xd67973,
  isOwner: _0x403c85,
  groupMetadata: _0x31249e,
  groupName: _0x32b7d9,
  participants: _0x334e1b,
  groupAdmins: _0x5a62ac,
  isBotAdmins: _0x5ecec8,
  isAdmins: _0x12e363,
  reply: _0x2d42d9
}) => {
  try {
    if (!_0xa4081c) {
      return _0x2d42d9(ONLGROUP);
    }
    if (!_0x12e363) {
      return _0x2d42d9(ADMIN);
    }
    if (_0x3bc005[0x1] == "second") {
      var _0x2c5774 = _0x3bc005[0x0] * "1000";
    } else {
      if (_0x3bc005[0x1] == "minute") {
        var _0x2c5774 = _0x3bc005[0x0] * "60000";
      } else {
        if (_0x3bc005[0x1] == 'hour') {
          var _0x2c5774 = _0x3bc005[0x0] * "3600000";
        } else {
          if (_0x3bc005[0x1] == 'day') {
            var _0x2c5774 = _0x3bc005[0x0] * "86400000";
          } else {
            return _0x2d42d9("*select:*\nsecond\nminute\nhour\n\n*example*\n10 second");
          }
        }
      }
    }
    _0x2d42d9("Open time " + _0x1c2757 + " starting from now");
    setTimeout(() => {
      _0x5c5854.groupSettingUpdate(_0x25b0c7, "not_announcement");
      _0x2d42d9("*Open time* the group was opened by admin\n now members can send messages\n\n*POWERED BY TALKDROVE*");
    }, _0x2c5774);
    await _0x5c5854.sendMessage(_0x25b0c7, {
      'react': {
        'text': '✅',
        'key': _0x23d577.key
      }
    });
  } catch (_0x4751dc) {
    _0x2d42d9("*Error !!*");
    _0x49ed45(_0x4751dc);
  }
});
Hamza({
  'pattern': "closetime",
  'react': '🔖',
  'desc': "To close group to a time",
  'category': 'group',
  'use': ".closstime",
  'filename': __filename
}, async (_0x2121b1, _0x5e711c, _0x1efe24, {
  from: _0x5ef39c,
  prefix: _0xeb0198,
  l: _0x1a6d1d,
  quoted: _0x401ec1,
  body: _0x211426,
  isCmd: _0x3b3183,
  command: _0x42bbbd,
  args: _0x450b82,
  q: _0x387d2c,
  isGroup: _0x2a11dc,
  sender: _0x599f21,
  senderNumber: _0x40ef68,
  botNumber2: _0x1ddb01,
  botNumber: _0x325fdb,
  pushname: _0x39c6ab,
  isMe: _0x10df2b,
  isOwner: _0x4138be,
  groupMetadata: _0x28c007,
  groupName: _0x405165,
  participants: _0x33f9b6,
  groupAdmins: _0x2b1547,
  isBotAdmins: _0x5baf54,
  isAdmins: _0x2a93dc,
  reply: _0x2c946d
}) => {
  try {
    if (!_0x2a11dc) {
      return _0x2c946d(ONLGROUP);
    }
    if (!_0x2a93dc) {
      return _0x2c946d(ADMIN);
    }
    if (_0x450b82[0x1] == 'second') {
      var _0x2d37b2 = _0x450b82[0x0] * "1000";
    } else {
      if (_0x450b82[0x1] == "minute") {
        var _0x2d37b2 = _0x450b82[0x0] * '60000';
      } else {
        if (_0x450b82[0x1] == 'hour') {
          var _0x2d37b2 = _0x450b82[0x0] * "3600000";
        } else {
          if (_0x450b82[0x1] == 'day') {
            var _0x2d37b2 = _0x450b82[0x0] * "86400000";
          } else {
            return _0x2c946d("*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second");
          }
        }
      }
    }
    _0x2c946d("Close time " + _0x387d2c + " starting from now");
    setTimeout(() => {
      _0x2121b1.groupSettingUpdate(_0x5ef39c, "announcement");
      _0x2c946d("*Close time* group closed by admin\nnow only admin can send messages\n\n*POWERED BY TALKDROVE*");
    }, _0x2d37b2);
    await _0x2121b1.sendMessage(_0x5ef39c, {
      'react': {
        'text': '✅',
        'key': _0x5e711c.key
      }
    });
  } catch (_0x1efa4e) {
    _0x2c946d("*Error !!*");
    _0x1a6d1d(_0x1efa4e);
  }
});
Hamza({
  'pattern': "tagall",
  'react': '🔖',
  'desc': "To tag all Participants",
  'category': "group",
  'use': ".hidetag <hi>",
  'filename': __filename
}, async (_0x239ac9, _0x9f05a, _0xdf9bad, {
  from: _0x5af4b9,
  prefix: _0x5ba581,
  l: _0x4e04e5,
  quoted: _0x13f9b7,
  body: _0x5616d6,
  isCmd: _0x52e8ef,
  command: _0x265564,
  args: _0x2fdc95,
  q: _0x158e43,
  isGroup: _0x578287,
  sender: _0x31112d,
  senderNumber: _0x36a626,
  botNumber2: _0x5d2374,
  botNumber: _0x514ecb,
  pushname: _0x332997,
  isMe: _0x2ae054,
  isOwner: _0x13dd0f,
  groupMetadata: _0x1b5867,
  groupName: _0x23ac1f,
  participants: _0x47bfba,
  groupAdmins: _0x381bde,
  isBotAdmins: _0x39d530,
  isAdmins: _0x2280d9,
  reply: _0x15d7c2
}) => {
  try {
    if (!_0x578287) {
      return _0x15d7c2(ONLGROUP);
    }
    if (!_0x39d530) {
      return _0x15d7c2(botAdmin);
    }
    if (!_0x2280d9) {
      return _0x15d7c2(ADMIN);
    }
    let _0x21b84a = " *ＧＲＯＵＰ  ＮＯＴＩＦＹ*\n                   \n*𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : " + (_0x158e43 ? _0x158e43 : 'blank') + "*\n\n";
    for (let _0x2ebfb2 of _0x47bfba) {
      _0x21b84a += "🔵 @" + _0x2ebfb2.id.split('@')[0x0] + "\n";
    }
    _0x239ac9.sendMessage(_0xdf9bad.chat, {
      'text': _0x21b84a,
      'mentions': _0x47bfba.map(_0x26d664 => _0x26d664.id)
    });
    await _0x239ac9.sendMessage(_0x5af4b9, {
      'react': {
        'text': '✅',
        'key': _0x9f05a.key
      }
    });
  } catch (_0x444186) {
    _0x15d7c2('');
    _0x4e04e5(_0x444186);
  }
});
Hamza({
  'pattern': "tagadmin",
  'desc': "Tags all the admins in the group.",
  'react': '😇',
  'category': "group",
  'filename': __filename
}, async (_0x3f3a26, _0x33a16, _0x5aa23b, {
  from: _0x172211,
  isGroup: _0x3c0057,
  groupMetadata: _0x2a8c55,
  groupAdmins: _0xa3482,
  reply: _0x3c534c
}) => {
  try {
    if (!_0x3c0057) {
      return _0x3c534c("This command is only for groups.");
    }
    if (_0xa3482.length === 0x0) {
      return _0x3c534c("There are no admins in this group.");
    }
    let _0x29772a = "*Tagging all admins in the group:*\n\n";
    for (let _0x7aff6f of _0xa3482) {
      _0x29772a += '@' + _0x7aff6f.split('@')[0x0] + "\n";
    }
    await _0x3f3a26.sendMessage(_0x172211, {
      'text': _0x29772a,
      'mentions': _0xa3482
    }, {
      'quoted': _0x33a16
    });
  } catch (_0x209e61) {
    console.error("Error tagging admins:", _0x209e61);
    _0x3c534c("An error occurred while trying to tag all admins. Please try again.");
  }
});
Hamza({
  'pattern': 'mute',
  'react': '🔖',
  'desc': "Close a group (only admins can send messages).",
  'category': "group",
  'use': ".mute",
  'filename': __filename
}, async (_0x484b56, _0x3bd5f5, _0x9a7b, {
  from: _0x2236b8,
  isGroup: _0x3da078,
  isBotAdmins: _0x597998,
  isAdmins: _0x20050d,
  reply: _0x353d8e
}) => {
  try {
    if (!_0x3da078) {
      return _0x353d8e("This command is only for groups.");
    }
    if (!_0x597998) {
      return _0x353d8e("I need to be an admin to mute the group.");
    }
    if (!_0x20050d) {
      return _0x353d8e("Only group admins can mute the group.");
    }
    await _0x484b56.groupSettingUpdate(_0x2236b8, "announcement");
    _0x353d8e("✅ Group has been muted. Only admins can send messages.\n\n*POWERED BY TALKDROVE*");
    await _0x484b56.sendMessage(_0x2236b8, {
      'react': {
        'text': '🔇',
        'key': _0x3bd5f5.key
      }
    });
  } catch (_0x463983) {
    console.error(_0x463983);
    _0x353d8e("🛑 An error occurred while muting the group.");
  }
});
Hamza({
  'pattern': "unmute",
  'react': '🔖',
  'desc': "Open a group (everyone can send messages).",
  'category': "group",
  'use': ".unmute",
  'filename': __filename
}, async (_0x2c48ca, _0x4a0116, _0xf53d3a, {
  from: _0xa6586,
  isGroup: _0x405783,
  isBotAdmins: _0x380d13,
  isAdmins: _0x43d120,
  reply: _0x1298c0
}) => {
  try {
    if (!_0x405783) {
      return _0x1298c0("This command is only for groups.");
    }
    if (!_0x380d13) {
      return _0x1298c0("I need to be an admin to unmute the group.");
    }
    if (!_0x43d120) {
      return _0x1298c0("Only group admins can unmute the group.");
    }
    await _0x2c48ca.groupSettingUpdate(_0xa6586, "not_announcement");
    _0x1298c0("✅ Group has been unmuted. Everyone can send messages.\n\n*POWERED BY TALKDROVE*");
    await _0x2c48ca.sendMessage(_0xa6586, {
      'react': {
        'text': '🔓',
        'key': _0x4a0116.key
      }
    });
  } catch (_0x6615a0) {
    console.error(_0x6615a0);
    _0x1298c0("🛑 An error occurred while unmuting the group.");
  }
});
Hamza({
  'pattern': "promote",
  'desc': "Promote a user to group admin.",
  'react': '😚',
  'category': "group",
  'use': "<quote|reply|number>",
  'filename': __filename
}, async (_0x112aea, _0x470a09, _0x52e5d7, {
  from: _0x589b5e,
  quoted: _0x5b9c07,
  q: _0xf0fe5f,
  isGroup: _0x5482b7,
  isBotAdmins: _0x21ab21,
  isAdmins: _0x2a41bc,
  reply: _0x12a3e9
}) => {
  try {
    if (!_0x5482b7) {
      return _0x12a3e9("This command is only for groups.");
    }
    if (!_0x21ab21) {
      return _0x12a3e9("I need to be an admin to unmute the group.");
    }
    if (!_0x2a41bc) {
      return _0x12a3e9("Only group admins can unmute the group.");
    }
    let _0x13cc71;
    if (_0x5b9c07) {
      _0x13cc71 = _0x5b9c07.sender;
    } else {
      if (_0xf0fe5f) {
        _0x13cc71 = _0xf0fe5f.replace(/\D/g, '') + "@s.whatsapp.net";
      } else {
        return _0x12a3e9("Please reply to a user or provide their number to promote.");
      }
    }
    await _0x112aea.groupParticipantsUpdate(_0x589b5e, [_0x13cc71], 'promote');
    _0x12a3e9("✅ Successfully promoted " + _0x13cc71 + " to admin.\n\n*POWERED BY TALKDROVE*");
  } catch (_0x169965) {
    console.error(_0x169965);
    _0x12a3e9("🛑 An error occurred while promoting the user.");
  }
});
Hamza({
  'pattern': 'demote',
  'desc': "Demote a user from group admin.",
  'react': '😉',
  'category': "group",
  'use': "<quote|reply|number>",
  'filename': __filename
}, async (_0x2cf658, _0x5a7e8f, _0x259ff8, {
  from: _0xddc8a,
  quoted: _0x9b34f6,
  q: _0x2943e4,
  isGroup: _0x10e501,
  isBotAdmins: _0x50e77c,
  isAdmins: _0x57fa08,
  reply: _0x26ec82
}) => {
  try {
    if (!_0x10e501) {
      return _0x26ec82("This command is only for groups.");
    }
    if (!_0x50e77c) {
      return _0x26ec82("I need to be an admin to unmute the group.");
    }
    if (!_0x57fa08) {
      return _0x26ec82("Only group admins can unmute the group.");
    }
    let _0x5b32c8;
    if (_0x9b34f6) {
      _0x5b32c8 = _0x9b34f6.sender;
    } else {
      if (_0x2943e4) {
        _0x5b32c8 = _0x2943e4.replace(/\D/g, '') + "@s.whatsapp.net";
      } else {
        return _0x26ec82("Please reply to a user or provide their number to demote.");
      }
    }
    await _0x2cf658.groupParticipantsUpdate(_0xddc8a, [_0x5b32c8], "demote");
    _0x26ec82("✅ Successfully demoted " + _0x5b32c8 + " from admin.\n\n*POWERED BY TALKDROVE*");
  } catch (_0x4adc27) {
    console.error(_0x4adc27);
    _0x26ec82("🛑 An error occurred while demoting the user.");
  }
});
Hamza({
  'pattern': "setname",
  'desc': "Change the group's name.",
  'react': '✅',
  'category': 'group',
  'use': "<new group name>",
  'filename': __filename
}, async (_0x1d00cb, _0x4c6e7a, _0x1acd20, {
  from: _0x5f461e,
  q: _0x7f1b54,
  isGroup: _0x144119,
  isBotAdmins: _0x49b638,
  isAdmins: _0xd5e987,
  reply: _0x185ad3
}) => {
  try {
    if (!_0x144119) {
      return _0x185ad3("This command is only for groups.");
    }
    if (!_0x49b638) {
      return _0x185ad3("I need to be an admin to unmute the group.");
    }
    if (!_0xd5e987) {
      return _0x185ad3("Only group admins can unmute the group.");
    }
    await _0x1d00cb.groupUpdateSubject(_0x5f461e, _0x7f1b54);
    _0x185ad3("✅ Group name has been updated to: *" + _0x7f1b54 + "*\n\n*POWERED BY TALKDROVE*");
  } catch (_0x5153fd) {
    console.error(_0x5153fd);
    _0x185ad3("🛑 An error occurred while changing the group name.");
  }
});
Hamza({
  'pattern': "setdesc",
  'desc': "Change the group's description.",
  'react': '✅',
  'category': "group",
  'use': "<new group description>",
  'filename': __filename
}, async (_0x4ef19c, _0x354748, _0x52613a, {
  from: _0x2d6953,
  q: _0x47f945,
  isGroup: _0x250f5d,
  isBotAdmins: _0x41f63b,
  isAdmins: _0x26a5d2,
  reply: _0x361e76
}) => {
  try {
    if (!_0x250f5d) {
      return _0x361e76("This command is only for groups.");
    }
    if (!_0x41f63b) {
      return _0x361e76("I need to be an admin to unmute the group.");
    }
    if (!_0x26a5d2) {
      return _0x361e76("Only group admins can unmute the group.");
    }
    if (!_0x47f945) {
      return _0x361e76("Please provide a new description for the group.");
    }
    await _0x4ef19c.groupUpdateDescription(_0x2d6953, _0x47f945);
    _0x361e76("✅ Group description has been updated to: *" + _0x47f945 + "*\n\n*POWERED BY TALKDROVE*");
  } catch (_0x53ff28) {
    console.error(_0x53ff28);
    _0x361e76("🛑 An error occurred while changing the group description.");
  }
});
Hamza({
  'pattern': "invite",
  'desc': "Get the invite link for the current group.",
  'react': '🤭',
  'category': "group",
  'use': ".invite",
  'filename': __filename
}, async (_0x1a77af, _0x5edda8, _0x3a0492, {
  from: _0x906c10,
  isGroup: _0x4f48d0,
  isBotAdmins: _0x431704,
  isAdmins: _0x19b397,
  reply: _0x1bb7a9
}) => {
  try {
    if (!_0x4f48d0) {
      return _0x1bb7a9("This command is only for groups.");
    }
    if (!_0x431704) {
      return _0x1bb7a9("I need to be an admin to unmute the group.");
    }
    if (!_0x19b397) {
      return _0x1bb7a9("Only group admins can unmute the group.");
    }
    const _0x546d32 = await _0x1a77af.groupInviteCode(_0x906c10);
    _0x1bb7a9("Here is the invite link for the group: http://chat.whatsapp.com/" + _0x546d32 + "\n\n*POWERED BY TALKDROVE*");
  } catch (_0x36d946) {
    console.error(_0x36d946);
    _0x1bb7a9("🛑 An error occurred while trying to get the invite link.");
  }
});
Hamza({
  'pattern': "join",
  'desc': "Join a group using an invite link.",
  'react': '🙏',
  'category': "group",
  'use': "<invite link>",
  'filename': __filename
}, async (_0x41a2e9, _0x7d05b7, _0xeaa1ad, {
  from: _0x58ba23,
  q: _0x6cb71a,
  isOwner: _0x3828a9,
  reply: _0x407144
}) => {
  try {
    if (!_0x3828a9) {
      return _0x407144("You are not my owner.");
    }
    if (!_0x6cb71a || !_0x6cb71a.startsWith("https://")) {
      return _0x407144("Please provide a valid invite link.");
    }
    const _0x41fbc8 = _0x6cb71a.split('/').pop();
    await _0x41a2e9.groupAcceptInvite(_0x41fbc8);
    _0x407144("✅ Successfully joined the group using the invite link.\n\n*POWERED BY TALKDROVE*");
  } catch (_0x4cb53e) {
    console.error(_0x4cb53e);
    _0x407144("🛑 An error occurred while trying to join the group. Please check the invite link or try again later.");
  }
});
Hamza({
  'pattern': 'leave',
  'desc': "Make the bot leave the current group.",
  'react': '👋',
  'category': "group",
  'use': ".leave",
  'filename': __filename
}, async (_0x28a1ac, _0x39122a, _0x544384, {
  from: _0x2db9d3,
  isGroup: _0x5ba29b,
  isBotAdmins: _0x591caa,
  reply: _0x3412a3
}) => {
  try {
    if (!_0x5ba29b) {
      return _0x3412a3("This command is only for groups.");
    }
    if (!_0x591caa) {
      return _0x3412a3("I need to be an admin to unmute the group.");
    }
    if (!isAdmins) {
      return _0x3412a3("Only group admins can unmute the group.");
    }
    await _0x28a1ac.groupLeave(_0x2db9d3);
    _0x3412a3("✅ I have left the group.....Bye🥺👋\n\n*POWERED BY TALKDROVE*");
  } catch (_0x47ed6a) {
    console.error(_0x47ed6a);
    _0x3412a3("🛑 An error occurred while trying to leave the group.");
  }
});