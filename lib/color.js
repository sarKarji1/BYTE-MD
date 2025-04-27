const chalk = require("chalk");
const color = (_0xbb0e1c, _0x458216) => {
  return !_0x458216 ? chalk.green(_0xbb0e1c) : chalk.keyword(_0x458216)(_0xbb0e1c);
};
const bgcolor = (_0x4f3078, _0xa043a) => {
  return !_0xa043a ? chalk.green(_0x4f3078) : chalk.bgKeyword(_0xa043a)(_0x4f3078);
};
const mycolor = (_0x24f4ea, _0x1763b1) => {
  return !_0x1763b1 ? chalk.greenBright("[ BYTE-MD ] ") + chalk.magentaBright(_0x24f4ea) : chalk.greenBright("[ BOT-MD ] ") + chalk.keyword(_0x1763b1)(_0x24f4ea);
};
module.exports = {
  'color': color,
  'bgcolor': bgcolor,
  'mycolor': mycolor
};