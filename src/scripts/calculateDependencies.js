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
    ...(!options.noBabel ? getBabelDependencies(options) : []),
    ...(!options.noEslint ? getEslintDependencies(options) : []),
    ...(!options.noPrettier ? getPrettierDependencies(options) : []),
    ...(!options.noTypescript ? getTypescriptDependencies(options) : []),
    ...(options.webpackDevConfig ? getWebpackDependencies(options) : []),
    ...(options.webpackProdConfig ? getWebpackDependencies(options) : []),
    ...(!options.noReact
      ? require('./dependencies/getReactDependencies')(options)
      : []),
  ]

  logger.info('List of dependencies: ', dependenciesArgs)

  manageDependencies(dependenciesArgs, options)
}

module.exports = calculateDependencies
