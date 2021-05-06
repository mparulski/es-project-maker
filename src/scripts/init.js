'use strict';

const logger = require("./utils/logger")
const isEnabled = require('./utils/isEnabledConfigOption')
const buildBabel = require('./babel');

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
        projectRootDir: require('./utils/getRootDir')(),
        isReact: isEnabled(projectConfig[CONFIG_OPTIONS.REACT]),
        isWebpack: isEnabled(projectConfig[CONFIG_OPTIONS.WEBPACK])
    }

    options.verbose && logger.debug('Runtime options:' + JSON.stringify(options))

    buildBabel(projectConfig[CONFIG_OPTIONS.BABEL], options)
}

module.exports = init
