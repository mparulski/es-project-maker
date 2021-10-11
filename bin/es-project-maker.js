#!/usr/bin/env node
'use strict'

const args = require('minimist')(process.argv.slice(2))
const getConfig = require('../src/scripts/utils/getConfig')

const isTrue = val => val === true

const mappedArgs = {
  addTasks: isTrue(args['addTasks']),
  babelConfig: getConfig(args['babelConfig']),
  eslintConfig: getConfig(args['eslintConfig']),
  prettierConfig: getConfig(args['prettierConfig']),
  typescriptConfig: getConfig(args['typescriptConfig']),
  webpackDevConfig: args['webpackDevConfig'],
  webpackProdConfig: args['webpackProdConfig'],
  noDeps: isTrue(args['noDeps']),
  noEslint: isTrue(args['noEslint']),
  noPrettier: isTrue(args['noPrettier']),
  noReact: isTrue(args['noReact']),
  noTests: isTrue(args['noTests']),
  jestConfig: getConfig(args['jestConfig']),
  noWebpack: isTrue(args['noWebpack']),
  verbose: isTrue(args['verbose']),
}

require('../src/scripts/run')(mappedArgs)

process.exit(0)
