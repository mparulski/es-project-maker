'use strict'

const logger = require('../utils/logger')
const path = require('path')
const touchJSModule = require('../utils/touchJSModule')

const CONFIG_FILENAME = 'babel.config.js'

function calculateConfigBabel(args, runtimeOptions) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  const {babelConfig, noReact, noWebpack, verbose} = args
  let configValues = require('../../config/babel/babel.config')({noWebpack})

  if (!noReact) {
    configValues.presets = [...configValues.presets, ...require('../../config/babel/react.babel.config').presets]
  }

  const content = babelConfig(configValues)

  const fileContent = touchJSModule(path.join(runtimeOptions.projectRootDir, CONFIG_FILENAME), content)
  verbose && logger.debug(CONFIG_FILENAME, fileContent)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigBabel
