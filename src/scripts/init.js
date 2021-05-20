'use strict'

const logger = require('./utils/logger')
const isEnabled = require('./utils/isEnabledConfigOption')
const calculateBabel = require('./calculateBabel')
const calculatePrettier = require('./calculatePrettier')
const calculateTypescript = require('./calculateTypescript')
const calculateWebpack = require('./calculateWebpack')
const calculateTasks = require('./calculateTasks')
const path = require('path')
const execOptions = require('./utils/execOptions')
const MODULES = require('./modules')

function init(projectConfig, options) {
  options = {
    ...options,
    projectRootDir: process.cwd(),
    esProjectMakerScriptsDir: path.resolve(__dirname),
    enabledModules: Object.entries(MODULES)
      .filter(([key, val]) => isEnabled(projectConfig[val]))
      .map(([key, val]) => val),
  }

  options.verbose && logger.debug('Runtime options:' + JSON.stringify(options))

  const config = {
    [MODULES.BABEL]: ([projectConfig, options]) =>
      calculateBabel(projectConfig[MODULES.BABEL], options),
    [MODULES.PRETTIER]: ([projectConfig, options]) =>
      calculatePrettier(projectConfig[MODULES.PRETTIER], options),
    [MODULES.TYPESCRIPT]: ([projectConfig, options]) =>
      calculateTypescript(projectConfig[MODULES.TYPESCRIPT], options),
    [MODULES.WEBPACK]: ([projectConfig, options]) =>
      calculateWebpack(projectConfig[MODULES.WEBPACK], options),
  }

  execOptions(config)(options.enabledModules)(projectConfig, options)

  calculateTasks(options)
}

module.exports = init
