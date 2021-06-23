'use strict'

const logger = require('../utils/logger')
const path = require('path')
const touchJSModule = require('../utils/touchJSModule')
const moduleHelper = require('../helpers/moduleHelper')

const CONFIG_FILENAME = 'babel.config.js'

function calculateConfigBabel(options) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  let babelConfig = require('../../config/babel/babel.config')

  if (moduleHelper.hasReact) {
    babelConfig.presets = [
      ...babelConfig.presets,
      ...require('../../config/babel/babel-react.config').presets,
    ]
  }

  const content = touchJSModule(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    moduleHelper.callbackConfigBabel(babelConfig),
  )
  options.verbose && logger.debug(CONFIG_FILENAME, content)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigBabel
