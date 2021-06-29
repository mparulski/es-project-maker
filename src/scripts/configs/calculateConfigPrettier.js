'use strict'

const logger = require('../utils/logger')
const path = require('path')
const touch = require('../utils/touchJSModule')

const CONFIG_FILENAME = 'prettier.config.js'

function calculateConfigPrettier(options) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  let configValues = require('../../config/prettier/base.prettier.config')

  if (options.react) {
    configValues = {
      ...configValues,
      ...require('../../config/prettier/react.prettier.config'),
    }
  }

  const content = options.prettierConfig(configValues)

  const fileContent = touch(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    content,
  )

  options.verbose && logger.debug(CONFIG_FILENAME, fileContent)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigPrettier
