const logger = require("../utils/logger")
const touch = require("../utils/touchProjectConfig")

const babelDefaultConfig = require("../../config/babel/babel.default.config")

const CONFIG_FILENAME = "babel.config.js"

const buildBabel = (applicationConfig) => {
    logger.info("Start building the " + CONFIG_FILENAME)

    const projectBabelConfig = applicationConfig["babel"] ? applicationConfig["babel"] : {}

    if (projectBabelConfig["presets"]) {
        babelDefaultConfig.presets = babelDefaultConfig.presets.concat(projectBabelConfig["presets"])
    }

    if (projectBabelConfig["plugins"]) {
        babelDefaultConfig.plugins = babelDefaultConfig.plugins.concat(projectBabelConfig["plugins"])
    }

    touch(CONFIG_FILENAME, babelDefaultConfig);

    logger.info(CONFIG_FILENAME + " was built")
}

module.exports = buildBabel
