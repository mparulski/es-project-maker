'use strict'

const calculateConfigs = require('./calculateConfigs')
const calculateAndInstallDependencies = require('./calculateAndInstallDependencies')
const calculateTasks = require('./calculateTasks')
const logger = require('./utils/logger')

function run(args) {
  const runtimeOptions = {
    projectRootDir: process.cwd(),
  }

  const {addTasks, noDeps} = args

  logger.info(
    'Runtime args:' + JSON.stringify(args),
    ' and runtimeOptions: ' + JSON.stringify(runtimeOptions),
  )

  !noDeps && calculateAndInstallDependencies(args)
  calculateConfigs(args, runtimeOptions)
  addTasks && calculateTasks(args, runtimeOptions)
}

module.exports = run
