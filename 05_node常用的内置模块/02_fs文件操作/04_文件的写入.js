const fs = require('fs');
const path = require('path')

const dirName = './yuan';
// 先判断是否存在这个文件夹
if (!fs.existsSync(dirName)) {
    // 创建目录
    fs.mkdir(dirName, err => {
        console.log(err);
    })
}

// 获取文件夹下所有文件
// function getAllFileDir (dirname) {
//     fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
//             for (let file of files) {
//               // fs.stat(file) 可以, 但是有点麻烦
//               if (file.isDirectory()) {
//                 const filepath = path.resolve(dirname, file.name);
//                 getAllFileDir(filepath);
//               } else {
//                 console.log(file.name);
//               }
//             }
//           });
// }

// getAllFileDir (dirName);

// 文件重命名
fs.rename('./yuan', './yang', err => {
    console.log(err);
})