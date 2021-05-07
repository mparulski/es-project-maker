'use strict';

const logger = require("./utils/logger")
const isEnabled = require('./utils/isEnabledConfigOption')
const makeBabel = require('./babel');
const makeWebpack = require('./webpack');
const path = require('path')

const CONFIG_OPTIONS = {
    BABEL: 'babel',
    ESLINT: 'eslint',
    JEST: 'jest',
    PRETTIER: 'prettier',
    REACT: 'react',
    WEBPACK: 'webpack'
};

function init(projectConfig, options) {

    options = {
        ...options,
        projectRootDir: process.cwd(),
        esProjectMakerScriptsDir: path.resolve(__dirname),
        isReact: isEnabled(projectConfig[CONFIG_OPTIONS.REACT]),
        isWebpack: isEnabled(projectConfig[CONFIG_OPTIONS.WEBPACK])
    }

    options.verbose && logger.debug('Runtime options:' + JSON.stringify(options))

    makeBabel(projectConfig[CONFIG_OPTIONS.BABEL], options)
    makeWebpack(projectConfig[CONFIG_OPTIONS.WEBPACK], options)
}

module.exports = init
