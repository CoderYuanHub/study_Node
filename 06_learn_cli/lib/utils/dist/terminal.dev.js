"use strict";

// 执行终端代码的相关操作
var _require = require('child_process'),
    spawn = _require.spawn; // ...arges 是es6动态参数


var commandSpawn = function commandSpawn() {
  for (var _len = arguments.length, arges = new Array(_len), _key = 0; _key < _len; _key++) {
    arges[_key] = arguments[_key];
  }

  return new Promise(function (resolve, reject) {
    // 执行传入命令
    var childProcess = spawn.apply(void 0, arges);
    childProcess.stdout.pipe(process.stdout);
    childProcess.stdout.pipe(process.stdout);
    childProcess.on('close', function () {
      resolve();
    });
  });
};

module.exports = {
  commandSpawn: commandSpawn
};