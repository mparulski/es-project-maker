const babelPackages = require('../packages/babel');
const addPackages = require('./utils/addPackages');
const logger = require("./utils/logger");
const merge = require("deepmerge")
const path = require("path")
const touch = require("./utils/touchProjectConfig");

const babelDefaultConfig = require("../config/babel/babel.config");
const babelReactDefaultConfig = require("../config/babel/babel-react.config")

const CONFIG_FILENAME = "babel.config.js";

function createConfig(config, options) {
    logger.info("Start building the " + CONFIG_FILENAME)

    let babelConfig = babelDefaultConfig;

    if (options.isReact) {
        babelConfig = merge(babelConfig, babelReactDefaultConfig);
    }

    const projectBabelConfig = config !== undefined ? config : {}

    if (projectBabelConfig["presets"]) {
        babelConfig.presets = babelConfig.presets.concat(projectBabelConfig["presets"])
    }

    if (projectBabelConfig["plugins"]) {
        babelConfig.plugins = babelConfig.plugins.concat(projectBabelConfig["plugins"])
    }

    const content = touch(options.projectRootDir + path.sep + CONFIG_FILENAME, babelConfig);
    options.verbose && logger.debug(CONFIG_FILENAME, content)

    logger.info(CONFIG_FILENAME + " was built")
}

function addDependencies(options) {
    logger.info("Start install babel dependencies")

    let packagesToInstall = babelPackages.base;

    if (options.isReact) {
        packagesToInstall = packagesToInstall.concat(babelPackages.react);
    }

    addPackages(packagesToInstall, '--save-dev', options.verbose);

    logger.info("Babel dependencies wa installed")
}

function babel(config, options) {
    addDependencies(options)
    createConfig(config, options)
}

module.exports = babel
