'use strict'

const getBabelDependencies = require('./dependencies/getBabelDependencies')
const getEslintDependencies = require('./dependencies/getEslintDependencies')
const getPrettierDependencies = require('./dependencies/getPrettierDependencies')
const getEsProjectMakerDependencies = require('./dependencies/getEsProjectMakerDependencies')
const getTestsDependencies = require('./dependencies/getTestsDependencies')
const getTypescriptDependencies = require('./dependencies/getTypescriptDependencies')
const getWebpackDependencies = require('./dependencies/getWebpackDependencies')
const manageDependencies = require('./utils/manageDependencies')
const logger = require('./utils/logger')

function calculateAndInstallDependencies(args, runtimeOptions) {
  const dependencies = getDependencies(args)

  args.verbose && logger.info('List of dependencies: ', dependencies)

  manageDependencies(dependencies, args, runtimeOptions)
}

function getDependencies(args) {
  const {noEslint, noPrettier, noReact, noTests, noWebpack} = args

  return [
    ...getBabelDependencies({noReact}),
    ...(!noEslint ? getEslintDependencies() : []),
    ...(!noPrettier ? getPrettierDependencies() : []),
    ...getEsProjectMakerDependencies(),
    ...getTypescriptDependencies({noReact}),
    ...(!noWebpack ? getWebpackDependencies() : []),
    ...(!noTests ? getTestsDependencies({noReact}) : []),
    ...(!noReact ? require('./dependencies/getReactDependencies')() : []),
  ]
}

module.exports = calculateAndInstallDependencies
