'use strict'

const calculateConfigs = require('./calculateConfigs')
const calculateDependencies = require('./calculateDependencies')
const calculateTasks = require('./calculateTasks')
const logger = require('./utils/logger')
const moduleHelper = require('./helpers/moduleHelper')

const path = require('path')

function init(projectConfig, options) {
  options = {
    ...options,
    projectRootDir: process.cwd(),
    esProjectMakerScriptsDir: path.resolve(__dirname),
  }

  moduleHelper(projectConfig)

  options.verbose && logger.debug('Runtime options:' + JSON.stringify(options))

  !options.noDeps && calculateDependencies(options)
  calculateConfigs(options)
  calculateTasks(options)
}

module.exports = init
