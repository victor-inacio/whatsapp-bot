const fs = require('fs');
const path = require('path');

export interface Command {
    description?: string,
    handler(): void,
}

module.exports = loadAllCommands();

function loadAllCommands() {
    const allCommandFiles: Array<string> = fs.readdirSync(__dirname);
    const allCommands: any = allCommandFiles.reduce((accumulator: any, commandFileName: string) => {
        const fileExtension = path.extname(commandFileName);
        const fileName = path.basename(commandFileName, fileExtension);
        if (fileName === 'index') return accumulator;
        accumulator[fileName] = require(`./${commandFileName}`);
        return accumulator;
    }, {});
    console.log(allCommands)
    return allCommands;
}
