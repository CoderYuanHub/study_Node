const path = require('path');

const basePath =  '/User/yuan/abc.txt';
// 文件名称
console.log(path.basename(basePath));
// 文件路径
console.log(path.dirname(basePath));
// 文件后缀名称
console.log(path.extname(basePath));


const baseUrlPath = '/User/yuan';
const fileName = '/yuan.js';
const otherPath = 'yuan'

// path.join() 路径拼接
const basePath1 = path.join(baseUrlPath, fileName);
console.log(basePath1);

// path.resolve() 路径拼接
// resolve() 会去查找路径中是否存在/ 或 ./ 或 ../ 开头的路径
 const basePath2 = path.resolve(baseUrlPath, fileName, otherPath);
console.log(basePath2);

