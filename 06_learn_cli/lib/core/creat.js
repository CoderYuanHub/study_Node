const { program } = require('commander');

const { createProject, addComponents, addPages } = require('./action.js');


const createCommands = () => {
    // 创建项目的命令，git clone
    program.command('create <project> [others...]').description('this is a description').action(createProject);
    // 创建组件命令
    program.command('addcmp <name>').description('add components').action((name) => {
        addComponents(name, program.opts().dest || 'src/components');
    });
    program.command('addpage <page>').description('add page 例如： yuan addpage photo -d src/pages').action((name) => {
        addPages(name, program.opts().dest || 'src/pages');
    })
}

module.exports = createCommands;