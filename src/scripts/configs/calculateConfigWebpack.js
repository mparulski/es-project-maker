'use strict'

const path = require('path')
const logger = require('../utils/logger')
const touch = require('../utils/touch')
const webpackDevConfig = require('../../config/webpack/webpack.dev.config')
const webpackProdConfig = require('../../config/webpack/webpack.prod.config')

const CONFIG_DEV_FILENAME = 'webpack.dev.config.js'
const CONFIG_PROD_FILENAME = 'webpack.prod.config.js'

const calculateDevConfigWebpack = options => {
    const propsAndHelpers = {
        configFilename: CONFIG_DEV_FILENAME,
        configContent: webpackDevConfig(options.webpackDevConfig),
        options
    }

    calculateConfigFile(propsAndHelpers)
}

const calculateProdConfigWebpack = options => {
    const propsAndHelpers = {
        configFilename: CONFIG_PROD_FILENAME,
        configContent: webpackProdConfig(options.webpackProdConfig),
        options
    }

    calculateConfigFile(propsAndHelpers)
}

const calculateConfigFile = ({configFilename, configContent, options}) => {
    logger.info('Start building the ' + configFilename)

    const file = options.projectRootDir + path.sep + configFilename
    const content = touch({
        file,
        content: configContent
    })

    options.verbose && logger.debug(configFilename, content)

    logger.info(configFilename + ' was built')
}

module.exports = {calculateDevConfigWebpack, calculateProdConfigWebpack}
