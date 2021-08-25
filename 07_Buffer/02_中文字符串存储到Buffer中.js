const message = "你好呀";

const bufferMsg = Buffer.from(message);
// 1.编码相同
// 对中文进行编码utf-8
console.log(bufferMsg);
// 对字节解码utf-8
console.log(bufferMsg.toString());

// 2.编码使用utf16le，解码用utf-8
const bufferMsg16 = Buffer.from(message, 'utf16le');
console.log(bufferMsg16.toString('utf16le'));