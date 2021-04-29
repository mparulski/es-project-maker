const fs = require('fs');
const path = require('path')

const writeModuleConfigFile = ({
                   fileContent,
                   filename
               }) => {
    const applicationRootPath = require("./getRootDir")()

    fs.writeFileSync(applicationRootPath + path.sep + filename, "module.exports = " + JSON.stringify(fileContent));
}

module.exports = writeModuleConfigFile
