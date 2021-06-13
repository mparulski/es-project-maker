'use strict'

const getBabelDependencies = require('./calculateDependencies/getBabelDependencies')
const getEslintDependencies = require('./calculateDependencies/getEslintDependencies')
const getPrettierDependencies = require('./calculateDependencies/getPrettierDependencies')
const getTypescriptDependencies = require('./calculateDependencies/getTypescriptDependencies')
const logger = require('./utils/logger')
const manageDependencies = require('./utils/manageDependencies')
const {hasModule} = require('./helpers/moduleHelperProvider')

function calculateDependencies(options) {
  const {enabledModules} = options
  let dependenciesArgs = []

  if (hasModule.babel) {
    dependenciesArgs = [...dependenciesArgs, ...getBabelDependencies(options)]
  }

  if (hasModule.eslint) {
    dependenciesArgs = [...dependenciesArgs, ...getEslintDependencies(options)]
  }

  if (hasModule.prettier) {
    dependenciesArgs = [
      ...dependenciesArgs,
      ...getPrettierDependencies(options),
    ]
  }

  if (hasModule.typescript) {
    dependenciesArgs = [
      ...dependenciesArgs,
      ...getTypescriptDependencies(options),
    ]
  }

  logger.info('List of dependencies: ', dependenciesArgs)

  manageDependencies(dependenciesArgs, options)
}

module.exports = calculateDependencies
