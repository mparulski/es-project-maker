#!/usr/bin/env node
'use strict'

const args = require('minimist')(process.argv.slice(2))
const logger = require('../src/scripts/utils/logger')
const getConfig = require('../src/scripts/utils/getConfig')

const isTrue = val => val === true

const options = {
  babelConfig: getConfig(args['babelConfig']),
  eslintConfig: getConfig(args['eslintConfig']),
  prettierConfig: getConfig(args['prettierConfig']),
  typescriptConfig: getConfig(args['typescriptConfig']),
  webpackDevConfig: args['webpackDevConfig'],
  webpackProdConfig: args['webpackProdConfig'],
  noBabel: isTrue(args['noBabel']),
  noDeps: isTrue(args['noDeps']),
  noEslint: isTrue(args['noEslint']),
  noPrettier: isTrue(args['noPrettier']),
  noReact: isTrue(args['noReact']),
  noTasks: isTrue(args['noTasks']),
  noTypescript: isTrue(args['noTypescript']),
  noWebpack: isTrue(args['noWebpack']),
  verbose: isTrue(args['verbose']),
}

require('../src/scripts/run')(options)

process.exit(0)
