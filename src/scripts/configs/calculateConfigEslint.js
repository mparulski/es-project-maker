'use strict'

const logger = require('../utils/logger')
const path = require('path')
const touchJSON = require('../utils/touchJSON')

const CONFIG_FILENAME = '.eslintrc.json'

function calculateConfigEslint(args, runtimeOptions) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  const {eslintConfig, noReact, verbose} = args
  let configValues = require('../../config/eslint/eslint.config')(!noReact)

  const content = eslintConfig(configValues)

  const fileContent = touchJSON(
    path.join(runtimeOptions.projectRootDir, CONFIG_FILENAME),
    content,
  )
  verbose && logger.debug(CONFIG_FILENAME, fileContent)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigEslint
