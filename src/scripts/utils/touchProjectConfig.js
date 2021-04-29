const path = require("path")
const touch = require("./touch")

const touchProjectConfig = (fileName, fileContent) => {
    const applicationRootPath = require("./getRootDir")()
    const content = ("module.exports = " + JSON.stringify(fileContent))

    touch({
        file: applicationRootPath + path.sep + fileName,
        content});
}

module.exports = touchProjectConfig
