const {
  Hamza
} = require("../lib/command");
const {
  sleep
} = require('../lib/functions');
Hamza({
  'pattern': 'shutdown',
  'desc': "Shutdown the bot.",
  'category': "owner",
  'react': '🛑',
  'filename': __filename
}, async (_0x91d252, _0x657cdd, _0x32ce1a, {
  from: _0x5da471,
  isOwner: _0xe55b85,
  reply: _0x2d2617
}) => {
  if (!_0xe55b85) {
    return _0x2d2617("❌ You are not the owner!");
  }
  return _0x2d2617("🛑 Shutting down...").then(() => process.exit());
});
Hamza({
  'pattern': "broadcast",
  'desc': "Broadcast a message to all groups.",
  'category': "owner",
  'react': '📢',
  'filename': __filename
}, async (_0xd8ff40, _0x446970, _0x41a6a6, {
  from: _0x32828c,
  isOwner: _0x4c54d4,
  args: _0x5cbfcb,
  reply: _0x15ccaa
}) => {
  if (!_0x4c54d4) {
    return _0x15ccaa("❌ You are not the owner!");
  }
  if (_0x5cbfcb.length === 0x0) {
    return _0x15ccaa("📢 Please provide a message to broadcast.");
  }
  const _0x246986 = _0x5cbfcb.join(" ");
  const _0x203d1b = Object.keys(await _0xd8ff40.groupFetchAllParticipating());
  for (const _0x5b1cc5 of _0x203d1b) {
    await _0xd8ff40.sendMessage(_0x5b1cc5, {
      'text': _0x246986
    }, {
      'quoted': _0x446970
    });
  }
  return _0x15ccaa("📢 Message broadcasted to all groups.");
});
Hamza({
  'pattern': "block",
  'desc': "Block a user.",
  'category': "owner",
  'react': '🚫',
  'filename': __filename
}, async (_0x5099b0, _0x12eb96, _0x1de762, {
  from: _0x2f9a50,
  isOwner: _0x4b0e36,
  quoted: _0x2b8cd1,
  reply: _0x16575d
}) => {
  if (!_0x4b0e36) {
    return _0x16575d("❌ You are not the owner!");
  }
  if (!_0x2b8cd1) {
    return _0x16575d("❌ Please reply to the user you want to block.");
  }
  const _0x279a5f = _0x2b8cd1.sender;
  try {
    await _0x5099b0.updateBlockStatus(_0x279a5f, "block");
    _0x16575d("🚫 User " + _0x279a5f + " blocked successfully.");
  } catch (_0x4d323a) {
    _0x16575d("❌ Error blocking user: " + _0x4d323a.message);
  }
});
Hamza({
  'pattern': "unblock",
  'desc': "Unblock a user.",
  'category': 'owner',
  'react': '✅',
  'filename': __filename
}, async (_0x2a5c99, _0x508d1d, _0x3e6430, {
  from: _0x49c38e,
  isOwner: _0x48a146,
  quoted: _0x38e37f,
  reply: _0x1c1cac
}) => {
  if (!_0x48a146) {
    return _0x1c1cac("❌ You are not the owner!");
  }
  if (!_0x38e37f) {
    return _0x1c1cac("❌ Please reply to the user you want to unblock.");
  }
  const _0x272761 = _0x38e37f.sender;
  try {
    await _0x2a5c99.updateBlockStatus(_0x272761, "unblock");
    _0x1c1cac("✅ User " + _0x272761 + " unblocked successfully.");
  } catch (_0x168682) {
    _0x1c1cac("❌ Error unblocking user: " + _0x168682.message);
  }
});
Hamza({
  'pattern': 'clearchats',
  'desc': "Clear all chats from the bot.",
  'category': 'owner',
  'react': '🧹',
  'filename': __filename
}, async (_0xfc5cfb, _0x53fbea, _0x37b20b, {
  from: _0xcdc4b6,
  isOwner: _0x37240a,
  reply: _0x2b9e90
}) => {
  if (!_0x37240a) {
    return _0x2b9e90("❌ You are not the owner!");
  }
  try {
    const _0x1e6197 = _0xfc5cfb.chats.all();
    for (const _0x1b528e of _0x1e6197) {
      await _0xfc5cfb.modifyChat(_0x1b528e.jid, "delete");
    }
    _0x2b9e90("🧹 All chats cleared successfully!");
  } catch (_0x167a53) {
    _0x2b9e90("❌ Error clearing chats: " + _0x167a53.message);
  }
});
Hamza({
  'pattern': 'jid',
  'desc': "Get the chat's JID.",
  'category': "owner",
  'filename': __filename
}, async (_0x3641f3, _0x10cc34, _0x183ce2, {
  from: _0x984839,
  isOwner: _0x2a38af,
  reply: _0x1f96b8
}) => {
  if (!_0x2a38af) {
    return _0x1f96b8("❌ You are not the owner!");
  }
  _0x1f96b8("🤖 *Chat JID:* " + _0x984839);
});
Hamza({
  'pattern': "gjid",
  'desc': "Get the list of JIDs for all groups the bot is part of.",
  'category': "owner",
  'react': '📝',
  'filename': __filename
}, async (_0x1e95f3, _0xb97f56, _0x1315fb, {
  from: _0x384b0d,
  isOwner: _0x41dfe2,
  reply: _0x2288d1
}) => {
  if (!_0x41dfe2) {
    return _0x2288d1("❌ You are not the owner!");
  }
  const _0x58161b = await _0x1e95f3.groupFetchAllParticipating();
  const _0x483478 = Object.keys(_0x58161b).join("\n");
  _0x2288d1("📝 *Group JIDs:*\n\n" + _0x483478);
});
Hamza({
  'pattern': "restart",
  'desc': "To restart the bot",
  'react': '💢',
  'category': "owner",
  'filename': __filename
}, async (_0x3ec521, _0x3c734d, _0x20fb36, {
  from: _0x5b400c,
  quoted: _0x5e7408,
  body: _0x366f76,
  isCmd: _0xd9e292,
  command: _0x1d9a5c,
  args: _0x1bb04d,
  q: _0x34e78c,
  isGroup: _0x37752c,
  sender: _0xc2e63f,
  senderNumber: _0x2a9c0b,
  botNumber2: _0x1b61b1,
  botNumber: _0xa95d6f,
  pushname: _0x38d31c,
  isMe: _0x4cab2e,
  isOwner: _0x1300c5,
  groupMetadata: _0x5080ef,
  groupName: _0x307ecc,
  participants: _0x568bf2,
  groupAdmins: _0x2f88a2,
  isBotAdmins: _0x490b41,
  isAdmins: _0x307644,
  reply: _0xf5f099
}) => {
  try {
    if (!_0x1300c5) {
      return;
    }
    const {
      exec: _0x435087
    } = require("child_process");
    _0xf5f099("restarting BYTE...");
    await sleep(0x5dc);
    _0x435087("pm2 restart all");
  } catch (_0xa2b7d5) {
    console.log(_0xa2b7d5);
    _0xf5f099('' + _0xa2b7d5);
  }
});