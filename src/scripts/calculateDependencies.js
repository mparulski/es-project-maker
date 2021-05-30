'use strict'

const getBabelDependencies = require('./calculateDependencies/getBabelDependencies')
const getPrettierDependencies = require('./calculateDependencies/getPrettierDependencies')
const getTypescriptDependencies = require('./calculateDependencies/getTypescriptDependencies')
const logger = require('./utils/logger')
const manageDependencies = require('./utils/manageDependencies')
const merge = require('./utils/mergeWithCombineArray')

const MODULES = require('./modules')

function calculateDependencies(options) {
  const {enabledModules} = options
  let dependenciesArgs = ''

  if (enabledModules.has(MODULES.BABEL)) {
    dependenciesArgs = merge(dependenciesArgs, getBabelDependencies(options))
  }

  if (enabledModules.has(MODULES.PRETTIER)) {
    dependenciesArgs = merge(dependenciesArgs, getPrettierDependencies(options))
  }

  if (enabledModules.has(MODULES.TYPESCRIPT)) {
    dependenciesArgs = merge(
      dependenciesArgs,
      getTypescriptDependencies(options),
    )
  }

  logger.info('Start install dependencies ', dependenciesArgs)

  manageDependencies(dependenciesArgs, options)
}

module.exports = calculateDependencies
