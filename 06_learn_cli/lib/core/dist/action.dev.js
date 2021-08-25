"use strict";

var _require = require('util'),
    promisify = _require.promisify;

var path = require('path');

var download = promisify(require('download-git-repo'));

var _require2 = require('../config/repo-config.js'),
    vueRePo = _require2.vueRePo;

var _require3 = require('../utils/terminal'),
    commandSpawn = _require3.commandSpawn;

var _require4 = require('../utils/utils'),
    compile = _require4.compile,
    writeToFile = _require4.writeToFile,
    creatDirSync = _require4.creatDirSync; // callback -> promisify() -> promise -> async await 函数，将回调转为promise函数


var createProject = function createProject(project) {
  var command;
  return regeneratorRuntime.async(function createProject$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('yuan is helping yuo clone the project~'); // 1.下载git项目地址,clone项目

          _context.next = 3;
          return regeneratorRuntime.awrap(download(vueRePo, project, {
            clone: true
          }));

        case 3:
          // 2.执行命令
          // 参数: 命令， 指令， 路径
          // window下和mac执行命令有所不同
          command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
          _context.next = 6;
          return regeneratorRuntime.awrap(commandSpawn(command, ['install'], {
            cwd: "./".concat(project)
          }));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(commandSpawn(command, ['run', 'serve'], {
            cwd: "./".concat(project)
          }));

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

var addComponents = function addComponents(name, filePath) {
  var result, targetPath;
  return regeneratorRuntime.async(function addComponents$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(compile('vue-component.ejs', {
            name: name,
            lowerName: name.toLowerCase()
          }));

        case 2:
          result = _context2.sent;
          // console.log(result);
          // 3.将result写到.vue文件中
          targetPath = path.resolve(filePath, "".concat(name, ".vue"));
          writeToFile(targetPath, result); // 4.放入对应的文件夹中

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var addPages = function addPages(name, filePath) {
  var resultVue, resultRouter, resultStore, targetPath, targetPagePath, targetRoutePath;
  return regeneratorRuntime.async(function addPages$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(compile('vue-component.ejs', {
            name: name,
            lowerName: name.toLowerCase()
          }));

        case 2:
          resultVue = _context3.sent;
          _context3.next = 5;
          return regeneratorRuntime.awrap(compile('vue-router.ejs', {
            name: name,
            lowerName: name.toLowerCase()
          }));

        case 5:
          resultRouter = _context3.sent;
          _context3.next = 8;
          return regeneratorRuntime.awrap(compile('vue-store.ejs', {
            name: name,
            lowerName: name.toLowerCase()
          }));

        case 8:
          resultStore = _context3.sent;
          targetPath = path.resolve(filePath, name.toLowerCase());

          if (creatDirSync(targetPath)) {
            targetPagePath = path.resolve(targetPath, "".concat(name, ".vue"));
            targetRoutePath = path.resolve(targetPath, 'router.js'); // const targetStorePath = path.resolve(targetPath, 'store.js');

            writeToFile(targetPagePath, resultVue);
            writeToFile(targetRoutePath, resultRouter); // writeToFile(targetStorePath, resultStore);
          }

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  });
};

module.exports = {
  createProject: createProject,
  addComponents: addComponents,
  addPages: addPages
};