'use strict'

const calculateConfigs = require('./calculateConfigs')
const calculateDependencies = require('./calculateDependencies')
const calculateTasks = require('./calculateTasks')
const logger = require('./utils/logger')
const isEnabled = require('./utils/isEnabledConfigOption')

const path = require('path')
const MODULES = require('./modules')

function init(projectConfig, options) {
  options = {
    ...options,
    projectRootDir: process.cwd(),
    esProjectMakerScriptsDir: path.resolve(__dirname),
    enabledModules: new Set(
      Object.entries(MODULES)
        .filter(([key, val]) => isEnabled(projectConfig[val]))
        .map(([key, val]) => val),
    ),
  }

  options.verbose && logger.debug('Runtime options:' + JSON.stringify(options))

  !options.noDeps && calculateDependencies(options)
  calculateConfigs(projectConfig, options)
  calculateTasks(options)
}

module.exports = init
