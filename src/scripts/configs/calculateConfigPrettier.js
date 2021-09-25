'use strict'

const logger = require('../utils/logger')
const path = require('path')
const touch = require('../utils/touchJSModule')

const CONFIG_FILENAME = 'prettier.config.js'

function calculateConfigPrettier(args, runtimeOptions) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  const {noReact, prettierConfig, verbose} = args
  let configValues = require('../../config/prettier/base.prettier.config')

  if (!noReact) {
    configValues = {
      ...configValues,
      ...require('../../config/prettier/react.prettier.config'),
    }
  }

  const content = prettierConfig(configValues)

  const fileContent = touch(
    path.join(runtimeOptions.projectRootDir, CONFIG_FILENAME),
    content,
  )

  verbose && logger.debug(CONFIG_FILENAME, fileContent)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigPrettier
