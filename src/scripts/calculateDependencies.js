'use strict'

const getBabelDependencies = require('./dependencies/getBabelDependencies')
const getEslintDependencies = require('./dependencies/getEslintDependencies')
const getPrettierDependencies = require('./dependencies/getPrettierDependencies')
const getTypescriptDependencies = require('./dependencies/getTypescriptDependencies')
const getWebpackDependencies = require('./dependencies/getWebpackDependencies')
const logger = require('./utils/logger')
const manageDependencies = require('./utils/manageDependencies')

function calculateDependencies(options) {
  let dependenciesArgs = [
    ...(options.babel ? getBabelDependencies(options) : []),
    ...(options.eslint ? getEslintDependencies(options) : []),
    ...(options.prettier ? getPrettierDependencies(options) : []),
    ...(options.typescript ? getTypescriptDependencies(options) : []),
    ...(options.webpack ? getWebpackDependencies(options) : []),
    ...(options.react
      ? require('./dependencies/getReactDependencies')(options)
      : []),
  ]

  logger.info('List of dependencies: ', dependenciesArgs)

  manageDependencies(dependenciesArgs, options)
}

module.exports = calculateDependencies
