const { promisify } = require('util');
const path = require('path');

const download = promisify(require('download-git-repo'));

const { vueRePo } = require('../config/repo-config.js');
const { commandSpawn } = require('../utils/terminal');
const { compile, writeToFile, creatDirSync } = require ('../utils/utils');

// callback -> promisify() -> promise -> async await 函数，将回调转为promise函数
const createProject = async (project) => {
    console.log('yuan is helping yuo clone the project~');
    // 1.下载git项目地址,clone项目
    await download(vueRePo, project, { clone: true });
    // 2.执行命令
    // 参数: 命令， 指令， 路径
    // window下和mac执行命令有所不同
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    await commandSpawn(command, ['install'], { cwd: `./${project}`});
    // 3.执行npm run serve
    await commandSpawn(command, ['run', 'serve'], { cwd: `./${project}`});
    // 4.打开浏览器端口可以用  open
}

const addComponents = async (name, filePath) => {
    // 1.有对应的ejs模版
    // 2.编译ejs模版result
    const result = await compile('vue-component.ejs', {name, lowerName: name.toLowerCase()});
    // console.log(result);
    // 3.将result写到.vue文件中
    const targetPath = path.resolve(filePath, `${name}.vue`);
    writeToFile(targetPath, result);
    // 4.放入对应的文件夹中
}

const addPages = async (name, filePath) => {
    const resultVue = await compile('vue-component.ejs', {name, lowerName: name.toLowerCase()});
    const resultRouter = await compile('vue-router.ejs', {name, lowerName: name.toLowerCase()});
    const resultStore = await compile('vue-store.ejs', {name, lowerName: name.toLowerCase()});
    const targetPath = path.resolve(filePath, name.toLowerCase());
    if (creatDirSync(targetPath)) {
        const targetPagePath = path.resolve(targetPath, `${name}.vue`);
        const targetRoutePath = path.resolve(targetPath, 'router.js');
        // const targetStorePath = path.resolve(targetPath, 'store.js');
        writeToFile(targetPagePath, resultVue);
        writeToFile(targetRoutePath, resultRouter);
        // writeToFile(targetStorePath, resultStore);
    }
    
}

module.exports = {
    createProject,
    addComponents,
    addPages
}