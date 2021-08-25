const { program } = require('commander');

const helpOptions = () => {
    // 增加自己options
    program.option('-y --yang', 'this is desition.');
    program.option('-d --dest <dest>', 'this is desition. 例: -d /src/components');
    // 监听option的指令，用于输出其他内容选项
    program.on('--help', function() {
        console.log();
        console.log('other options');
    })
}

module.exports = helpOptions;