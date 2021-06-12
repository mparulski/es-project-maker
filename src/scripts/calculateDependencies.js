'use strict'

const getBabelDependencies = require('./calculateDependencies/getBabelDependencies')
const getEslintDependencies = require('./calculateDependencies/getEslintDependencies')
const getPrettierDependencies = require('./calculateDependencies/getPrettierDependencies')
const getTypescriptDependencies = require('./calculateDependencies/getTypescriptDependencies')
const logger = require('./utils/logger')
const manageDependencies = require('./utils/manageDependencies')

const MODULES = require('./modules')

function calculateDependencies(options) {
  const {enabledModules} = options
  let dependenciesArgs = []

  if (enabledModules.has(MODULES.BABEL)) {
    dependenciesArgs = [...dependenciesArgs, ...getBabelDependencies(options)]
  }

  if (enabledModules.has(MODULES.ESLINT)) {
    dependenciesArgs = [...dependenciesArgs, ...getEslintDependencies(options)]
  }

  if (enabledModules.has(MODULES.PRETTIER)) {
    dependenciesArgs = [
      ...dependenciesArgs,
      ...getPrettierDependencies(options),
    ]
  }

  if (enabledModules.has(MODULES.TYPESCRIPT)) {
    dependenciesArgs = [
      ...dependenciesArgs,
      ...getTypescriptDependencies(options),
    ]
  }

  logger.info('List of dependencies: ', dependenciesArgs)

  manageDependencies(dependenciesArgs, options)
}

module.exports = calculateDependencies
