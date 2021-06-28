'use strict'

const getBabelDependencies = require('./calculateDependencies/getBabelDependencies')
const getEslintDependencies = require('./calculateDependencies/getEslintDependencies')
const getPrettierDependencies = require('./calculateDependencies/getPrettierDependencies')
const getTypescriptDependencies = require('./calculateDependencies/getTypescriptDependencies')
const getWebpackDependencies = require('./calculateDependencies/getWebpackDependencies')
const logger = require('./utils/logger')
const manageDependencies = require('./utils/manageDependencies')
const moduleHelper = require('./helpers/moduleHelper')

function calculateDependencies(options) {
  let dependenciesArgs = [
    ...getBabelDependencies(options),
    ...getEslintDependencies(options),
    ...getPrettierDependencies(options),
    ...getTypescriptDependencies(options),
    ...getWebpackDependencies(options),
    ...(moduleHelper.hasReact
      ? require('./calculateDependencies/getReactDependencies')(options)
      : []),
  ]

  logger.info('List of dependencies: ', dependenciesArgs)

  manageDependencies(dependenciesArgs, options)
}

module.exports = calculateDependencies
