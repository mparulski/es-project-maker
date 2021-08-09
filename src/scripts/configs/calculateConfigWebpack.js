'use strict'

const path = require('path')
const logger = require('../utils/logger')
const touch = require('../utils/touch')
const webpackConfigBuilder = require('../../config/webpack/webpackConfigBuilder')

const CONFIG_DEV_FILENAME = 'webpack.dev.config.js'
const CONFIG_PROD_FILENAME = 'webpack.prod.config.js'

const calculateDevConfigWebpack = options => {
  const webpackConfig = webpackConfigBuilder(options.projectRootDir)(
    '@mparulski/es-project-maker-webpack/config/webpack.dev.config',
  )

  const propsAndHelpers = {
    configFilename: CONFIG_DEV_FILENAME,
    configContent: webpackConfig(options.webpackDevConfig),
    options,
  }

  calculateConfigFile(propsAndHelpers)
}

const calculateProdConfigWebpack = options => {
  const webpackConfig = webpackConfigBuilder(
    '@mparulski/es-project-maker-webpack/config/webpack.prod.config',
  )

  const propsAndHelpers = {
    configFilename: CONFIG_PROD_FILENAME,
    configContent: webpackConfig(options.webpackProdConfig),
    options,
  }

  calculateConfigFile(propsAndHelpers)
}

const calculateConfigFile = ({configFilename, configContent, options}) => {
  logger.info('Start building the ' + configFilename)

  const file = options.projectRootDir + path.sep + configFilename
  const content = touch({
    file,
    content: configContent,
  })

  options.verbose && logger.debug(configFilename, content)

  logger.info(configFilename + ' was built')
}

module.exports = {calculateDevConfigWebpack, calculateProdConfigWebpack}
