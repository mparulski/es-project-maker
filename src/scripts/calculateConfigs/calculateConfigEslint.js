'use strict'

const logger = require('../utils/logger')
const path = require('path')
const touchJSON = require('../utils/touchJSON')
const moduleHelper = require('../helpers/moduleHelper')

const CONFIG_FILENAME = '.eslintrc.json'

function calculateConfigEslint(options) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  let eslintConfig = require('../../config/eslint/eslint.config')

  const content = touchJSON(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    moduleHelper.callbackConfigEslint(eslintConfig),
  )
  options.verbose && logger.debug(CONFIG_FILENAME, content)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigEslint
