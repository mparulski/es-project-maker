'use strict'

const getBabelDependencies = require('./dependencies/getBabelDependencies')
const getEslintDependencies = require('./dependencies/getEslintDependencies')
const getPrettierDependencies = require('./dependencies/getPrettierDependencies')
const getTypescriptDependencies = require('./dependencies/getTypescriptDependencies')
const getWebpackDependencies = require('./dependencies/getWebpackDependencies')
const manageDependencies = require('./utils/manageDependencies')
const logger = require('./utils/logger')

function calculateAndInstallDependencies(args) {
  const dependencies = getDependencies(args)

  args.verbose && logger.info('List of dependencies: ', dependencies)

  manageDependencies(dependencies, options)
}

function getDependencies(args) {
  const {noEslint, noPrettier, noReact, noWebpack} = args

  return [
    ...getBabelDependencies({noReact}),
    ...(!noEslint ? getEslintDependencies() : []),
    ...(!noPrettier ? getPrettierDependencies() : []),
    ...getTypescriptDependencies(),
    ...(!noWebpack ? getWebpackDependencies() : []),
    ...(!noReact ? require('./dependencies/getReactDependencies')() : []),
  ]
}

module.exports = calculateAndInstallDependencies
