const path = require('path');
const fs = require('fs');
const ejs = require('ejs');


const compile = (templateName, data) => {
    const templatePosition = `../templates/${templateName}`;
    const templatePath = path.resolve(__dirname, templatePosition);
    
    return new Promise((resolve, reject) => {
        ejs.renderFile(templatePath, {data}, {}, (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            resolve(result);
        })
    })
}
const writeToFile = (filePath, content) => {
    return fs.promises.writeFile(filePath, content);
}
// src/pages/base
const creatDirSync = (filePath) => {
    if (fs.existsSync(filePath)) {
        return true;
    } else {
        if (creatDirSync(path.dirname(filePath))){
            fs.mkdirSync(filePath);
            return true;
        }
    }
}

module.exports = {
    compile,
    writeToFile,
    creatDirSync
}