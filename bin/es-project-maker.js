#!/usr/bin/env node
'use strict'

const args = require('minimist')(process.argv.slice(2))
const logger = require('../src/scripts/utils/logger')
const getConfig = require('../src/scripts/utils/getConfig')

const options = {
  babel: args['babel'] !== false,
  babelConfig: getConfig(args['babelConfig']),
  eslint: args['eslint'] !== false,
  eslintConfig: getConfig(args['eslintConfig']),
  prettier: args['prettier'] !== false,
  prettierConfig: getConfig(args['prettierConfig']),
  react: args['react'] !== false,
  typescript: args['typescript'] !== false,
  typescriptConfig: getConfig(args['typescriptConfig']),
  webpack: args['webpack'] !== false,
  webpackConfig: args['webpackConfig'],
  noDeps: args['noDeps'] === true,
  noTasks: args['noTasks'] === true,
  verbose: args['verbose'] === true,
}

logger.info('Runtime options:', JSON.stringify(options))

require('../src/scripts/run')(options)

process.exit(0)
