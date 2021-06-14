'use strict'

const getBabelDependencies = require('./calculateDependencies/getBabelDependencies')
const getEslintDependencies = require('./calculateDependencies/getEslintDependencies')
const getPrettierDependencies = require('./calculateDependencies/getPrettierDependencies')
const getTypescriptDependencies = require('./calculateDependencies/getTypescriptDependencies')
const logger = require('./utils/logger')
const manageDependencies = require('./utils/manageDependencies')
const moduleHelper = require('./helpers/moduleHelper')

function calculateDependencies(options) {
  const {enabledModules} = options
  let dependenciesArgs = []

  if (moduleHelper.hasBabel) {
    dependenciesArgs = [...dependenciesArgs, ...getBabelDependencies(options)]
  }

  if (moduleHelper.hasEslint) {
    dependenciesArgs = [...dependenciesArgs, ...getEslintDependencies(options)]
  }

  if (moduleHelper.hasPrettier) {
    dependenciesArgs = [
      ...dependenciesArgs,
      ...getPrettierDependencies(options),
    ]
  }

  if (moduleHelper.hasTypescript) {
    dependenciesArgs = [
      ...dependenciesArgs,
      ...getTypescriptDependencies(options),
    ]
  }

  logger.info('List of dependencies: ', dependenciesArgs)

  manageDependencies(dependenciesArgs, options)
}

module.exports = calculateDependencies
