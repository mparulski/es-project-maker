'use strict'

const logger = require('../utils/logger')
const path = require('path')
const touchJSON = require('../utils/touchJSON')

const CONFIG_FILENAME = '.eslintrc.json'

function calculateConfigEslint(projectConfig = {}, options) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  let eslintConfig = require('../../config/eslint/eslint.config')

  eslintConfig = {...eslintConfig, ...projectConfig}

  const content = touchJSON(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    eslintConfig,
  )
  options.verbose && logger.debug(CONFIG_FILENAME, content)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigEslint
