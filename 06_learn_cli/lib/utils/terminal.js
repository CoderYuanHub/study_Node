// 执行终端代码的相关操作
const { spawn } = require('child_process');

// ...arges 是es6动态参数
const commandSpawn = (...arges) => {
    return new Promise((resolve, reject) => {
        // 执行传入命令
        const childProcess = spawn(...arges);
        childProcess.stdout.pipe(process.stdout);
        childProcess.stdout.pipe(process.stdout);
        childProcess.on('close', () => {
            resolve();
        })
    })
}

module.exports = {
    commandSpawn
}