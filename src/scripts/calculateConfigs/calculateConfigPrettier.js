'use strict'

const logger = require('../utils/logger')
const path = require('path')
const touch = require('../utils/touchJSModule')
const moduleHelper = require('../helpers/moduleHelper')

const CONFIG_FILENAME = 'prettier.config.js'

function calculateConfigPrettier(options) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  let prettierConfig = require('../../config/prettier/base.prettier.config')

  if (moduleHelper.hasReact) {
    prettierConfig = {
      ...prettierConfig,
      ...require('../../config/prettier/react.prettier.config'),
    }
  }

  const content = touch(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    moduleHelper.callbackConfigPrettier(prettierConfig),
  )

  options.verbose && logger.debug(CONFIG_FILENAME, content)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigPrettier
