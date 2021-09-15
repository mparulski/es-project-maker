'use strict'

const calculateConfigs = require('./calculateConfigs')
const calculateDependencies = require('./calculateDependencies')
const calculateTasks = require('./calculateTasks')
const logger = require('./utils/logger')

function run(options) {
  options = {
    ...options,
    projectRootDir: process.cwd(),
  }

  logger.debug('Runtime options:' + JSON.stringify(options))

  !options.noDeps && calculateDependencies(options)
  calculateConfigs(options)
  options.addTasks && calculateTasks(options)
}

module.exports = run
