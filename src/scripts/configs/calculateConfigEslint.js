'use strict'

const logger = require('../utils/logger')
const path = require('path')
const touchJSON = require('../utils/touchJSON')

const CONFIG_FILENAME = '.eslintrc.json'

function calculateConfigEslint(options) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  let configValues = require('../../config/eslint/eslint.config')(options.react)

  const content = options.eslintConfig(configValues)

  const fileContent = touchJSON(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    content,
  )
  options.verbose && logger.debug(CONFIG_FILENAME, fileContent)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigEslint
