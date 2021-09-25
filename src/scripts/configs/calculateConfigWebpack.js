'use strict'

const path = require('path')
const logger = require('../utils/logger')
const touch = require('../utils/touch')
const webpackConfigBuilder = require('../../config/webpack/webpackConfigBuilder')

const CONFIG_DEV_FILENAME = 'webpack.dev.config.js'
const CONFIG_PROD_FILENAME = 'webpack.prod.config.js'

const calculateDevConfigWebpack = (args, runtimeOptions) => {
  const webpackConfig = webpackConfigBuilder(
    '@mparulski/es-project-maker-webpack/config/webpack.dev.config',
  )

  const propsAndHelpers = {
    configFilename: CONFIG_DEV_FILENAME,
    configContent: webpackConfig(args.webpackDevConfig),
    ...args,
    ...runtimeOptions,
  }

  calculateConfigFile(propsAndHelpers)
}

const calculateProdConfigWebpack = (args, runtimeOptions) => {
  const webpackConfig = webpackConfigBuilder(
    '@mparulski/es-project-maker-webpack/config/webpack.prod.config',
  )

  const propsAndHelpers = {
    configFilename: CONFIG_PROD_FILENAME,
    configContent: webpackConfig(args.webpackProdConfig),
    ...args,
    ...runtimeOptions,
  }

  calculateConfigFile(propsAndHelpers)
}

const calculateConfigFile = ({
  configFilename,
  configContent,
  projectRootDir,
  verbose,
}) => {
  logger.info('Start building the ' + configFilename)

  touch({
    file: path.join(projectRootDir, configFilename),
    content: configContent,
  })

  verbose && logger.debug(configFilename, configContent)

  logger.info(configFilename + ' was built')
}

module.exports = {calculateDevConfigWebpack, calculateProdConfigWebpack}
