'use strict'

const manageDependencies = require('./utils/manageDependencies')
const logger = require('./utils/logger')
const merge = require('./utils/merge')
const path = require('path')
const touchJSModule = require('./utils/touchJSModule')

const MODULES = require('./modules')

const CONFIG_FILENAME = 'babel.config.js'

function createConfig(config, options) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  let babelConfig = require('../config/babel/babel.config')

  if (options.enabledModules.includes(MODULES.REACT)) {
    babelConfig = merge(
      babelConfig,
      require('../config/babel/babel-react.config'),
    )
  }

  const projectBabelConfig = config !== undefined ? config : {}

  babelConfig = {...babelConfig, ...projectBabelConfig}

  const content = touchJSModule(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    babelConfig,
  )
  options.verbose && logger.debug(CONFIG_FILENAME, content)

  logger.info(CONFIG_FILENAME + ' was built')
}

function setDependencies(options) {
  let babelDependencies = require('../packages/babel').base

  if (options.enabledModules.includes(MODULES.REACT)) {
    babelDependencies = merge(
      babelDependencies,
      require('../packages/babel').react,
    )
  }

  manageDependencies('babel', babelDependencies, options)
}

function calculateBabel(config, options) {
  !options.noDeps && setDependencies(options)
  createConfig(config, options)
}

module.exports = calculateBabel
