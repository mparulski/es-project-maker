'use strict'

const logger = require('../utils/logger')
const merge = require('../utils/mergeWithCombineArray')
const path = require('path')
const touch = require('../utils/touchJSModule')
const MODULES = require('../modules')

const CONFIG_FILENAME = 'prettier.config.js'

function calculateConfigPrettier(projectConfig = {}, options) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  let prettierConfig = require('../../config/prettier/base.prettier.config')

  if (options.enabledModules.has(MODULES.REACT)) {
    prettierConfig = merge(
      prettierConfig,
      require('../../config/prettier/react.prettier.config'),
    )
  }

  prettierConfig = {...prettierConfig, ...projectConfig}

  const content = touch(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    prettierConfig,
  )

  options.verbose && logger.debug(CONFIG_FILENAME, content)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigPrettier
