'use strict'

const logger = require('../utils/logger')
const path = require('path')
const touchJSModule = require('../utils/touchJSModule')

const CONFIG_FILENAME = 'babel.config.js'

function calculateConfigBabel(options) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  let configValues = require('../../config/babel/babel.config')

  if (options.react) {
    configValues.presets = [
      ...configValues.presets,
      ...require('../../config/babel/babel-react.config').presets,
    ]
  }

  const content = options.babelConfig(configValues)

  const fileContent = touchJSModule(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    content,
  )
  options.verbose && logger.debug(CONFIG_FILENAME, fileContent)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigBabel
