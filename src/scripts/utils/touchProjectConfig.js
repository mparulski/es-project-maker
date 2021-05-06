const path = require("path")
const touch = require("./touch")

const touchProjectConfig = (fileName, fileContent) => {
    const applicationRootPath = require("./getRootDir")()
    const content = ("module.exports = " + JSON.stringify(fileContent, null, 2));

    touch({
        file: applicationRootPath + path.sep + fileName,
        content});

    return content
}

module.exports = touchProjectConfig
