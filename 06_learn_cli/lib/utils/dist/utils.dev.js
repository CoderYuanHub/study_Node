"use strict";

var path = require('path');

var fs = require('fs');

var ejs = require('ejs');

var compile = function compile(templateName, data) {
  var templatePosition = "../templates/".concat(templateName);
  var templatePath = path.resolve(__dirname, templatePosition);
  return new Promise(function (resolve, reject) {
    ejs.renderFile(templatePath, {
      data: data
    }, {}, function (err, result) {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }

      resolve(result);
    });
  });
};

var writeToFile = function writeToFile(filePath, content) {
  return fs.promises.writeFile(filePath, content);
}; // src/pages/base


var creatDirSync = function creatDirSync(filePath) {
  if (fs.existsSync(filePath)) {
    return true;
  } else {
    if (creatDirSync(path.dirname(filePath))) {
      fs.mkdirSync(filePath);
      return true;
    }
  }
};

module.exports = {
  compile: compile,
  writeToFile: writeToFile,
  creatDirSync: creatDirSync
};