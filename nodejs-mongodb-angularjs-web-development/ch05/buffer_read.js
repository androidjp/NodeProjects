var bufUTF8 = new Buffer("Some UTF8 Text \u00b6 \u30c6 \u20ac", 'utf8');
var bufU = new Buffer("\u20ac",'utf8');
var bufU2 = new Buffer("\u00b6",'utf8');
console.log(bufUTF8.toString());
console.log(bufU.length);
console.log(bufU2.length);
console.log(bufUTF8.toString('utf8', 15,25));
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
console.log(decoder.write(bufUTF8));
console.log(bufUTF8[18].toString(16));
console.log(bufUTF8.readUInt32BE(18).toString(16));////readInt32BE()读取一个32位整数。