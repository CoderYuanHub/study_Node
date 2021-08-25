"use strict";

var _require = require('commander'),
    program = _require.program;

var _require2 = require('./action.js'),
    createProject = _require2.createProject,
    addComponents = _require2.addComponents,
    addPages = _require2.addPages;

var createCommands = function createCommands() {
  // 创建项目的命令，git clone
  program.command('create <project> [others...]').description('this is a description').action(createProject); // 创建组件命令

  program.command('addcmp <name>').description('add components').action(function (name) {
    addComponents(name, program.opts().dest || 'src/components');
  });
  program.command('addpage <page>').description('add page 例如： yuan addpage photo -d src/pages').action(function (name) {
    addPages(name, program.opts().dest || 'src/pages');
  });
};

module.exports = createCommands;