const fs = require('fs');
const path = require('path')

const baseConfig = require('../config/webpack/webpack.config');
const applicationRootPath = require("./getRootDir")()

const runWebpack = (applicationConfig) => {
    if (!applicationConfig["webpack"]["enable"]) {
        return
    }

    const computedConfig = baseConfig(applicationConfig["webpack"]["config"])()

    fs.writeFileSync(applicationRootPath + path.sep + "webpack.config.js", JSON.stringify(computedConfig));
}

module.exports = runWebpack
