#!/usr/bin/env node
const { program } = require('commander');
const helpOtions = require('./lib/core/help.js');
const createCommands = require('./lib/core/creat.js');

program.version(require('./package.json').version);

// 参数指令
helpOtions();
// 命令指令
createCommands();


program.parse(process.argv);

// const options = program.opts();

// console.log('options', options)


