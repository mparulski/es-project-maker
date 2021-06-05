'use strict'

const logger = require('../utils/logger')
const merge = require('../utils/mergeWithCombineArray')
const path = require('path')
const touchJSModule = require('../utils/touchJSModule')

const MODULES = require('../modules')

const CONFIG_FILENAME = 'babel.config.js'

function calculateConfigBabel(projectConfig = {}, options) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  let babelConfig = require('../../config/babel/babel.config')

  if (options.enabledModules.has(MODULES.REACT)) {
    babelConfig = merge(
      babelConfig,
      require('../../config/babel/babel-react.config'),
    )
  }

  babelConfig = {...babelConfig, ...projectConfig}

  const content = touchJSModule(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    babelConfig,
  )
  options.verbose && logger.debug(CONFIG_FILENAME, content)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigBabel
