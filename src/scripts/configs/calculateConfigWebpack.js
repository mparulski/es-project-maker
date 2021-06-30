'use strict'

const path = require('path')
const logger = require('../utils/logger')
const touch = require('../utils/touch')
const webpackDevConfig = require('../../config/webpack/webpack.dev.config')

const CONFIG_FILENAME = 'webpack.config.js'

function calculateConfigWebpack(options) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  const file = options.projectRootDir + path.sep + CONFIG_FILENAME
  const content = touch({
    file,
    content: webpackDevConfig(options.webpackConfig)
  })

  options.verbose && logger.debug(CONFIG_FILENAME, content)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigWebpack
