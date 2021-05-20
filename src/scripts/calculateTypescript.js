'use strict'

const manageDependencies = require('./utils/manageDependencies')
const path = require('path')
const touch = require('./utils/touchJSModule')

const MODULES = require('./modules')

const CONFIG_FILENAME = 'prettier.config.js'

function createConfig(config, options) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  let prettierConfig = require('../config/typescript/base.typescript.config')

  const content = touch(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    prettierConfig,
  )

  options.verbose && logger.debug(CONFIG_FILENAME, content)

  logger.info(CONFIG_FILENAME + ' was built')
}

function calculateTypescript(config, options) {
  !options.noDeps &&
    manageDependencies(
      MODULES.TYPESCRIPT,
      require('../packages/typescript').base,
      options,
    )
  createConfig(config, options)
}

module.exports = calculateTypescript
