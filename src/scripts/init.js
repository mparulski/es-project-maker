'use strict'

const calculateConfigs = require('./calculateConfigs')
const calculateDependencies = require('./calculateDependencies')
const calculateTasks = require('./calculateTasks')
const logger = require('./utils/logger')
const {init: moduleHelperInit} = require('./helpers/moduleHelperProvider')

const path = require('path')
const MODULES = require('./modules')

function init(projectConfig, options) {
  options = {
    ...options,
    projectRootDir: process.cwd(),
    esProjectMakerScriptsDir: path.resolve(__dirname),
    enabledModules: new Set(
      Object.entries(MODULES)
        .filter(([key, val]) =>
          Object.prototype.hasOwnProperty.call(
            Object.assign({}, projectConfig),
            val,
          ),
        )
        .map(([key, val]) => val),
    ),
  }

  moduleHelperInit(options.enabledModules)

  options.verbose && logger.debug('Runtime options:' + JSON.stringify(options))

  !options.noDeps && calculateDependencies(options)
  calculateConfigs(projectConfig, options)
  calculateTasks(options)
}

module.exports = init
