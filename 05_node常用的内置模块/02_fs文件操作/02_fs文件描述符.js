const fs = require('fs');

// 文件描述符，我们可以通过文件描述符对文件进行一系列操作

fs.open('./abx.txt', (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stats);
    fs.fstat(stats, (errs, info) => {
        console.log(info);
    })
})