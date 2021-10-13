'use strict'

const logger = require('../utils/logger')
const path = require('path')
const touch = require('../utils/touchJSModule')

const CONFIG_FILENAME = 'jest.config.js'

function calculateConfigTests(args, runtimeOptions) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  const {jestConfig, verbose} = args
  let configValues = require('../../config/tests/base.jest.config')

  const content = jestConfig(configValues)

  const fileContent = touch(path.join(runtimeOptions.projectRootDir, CONFIG_FILENAME), content)

  verbose && logger.debug(CONFIG_FILENAME, fileContent)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigTests
