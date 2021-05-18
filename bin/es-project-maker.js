#!/usr/bin/env node
'use strict'

const fs = require('fs')
const logger = require('../src/scripts/utils/logger')
const args = require('minimist')(process.argv.slice(2))

const init = require('../src/scripts/init')

if (
  args['config'] === undefined ||
  args['config'] === null ||
  !fs.existsSync(args['config'])
) {
  logger.error(
    'Configuration file does not exists!\n',
    '\x1b[33m',
    'You must specified configuration file path in --config parameter',
  )
  process.exit(1)
}

const projectConfig = JSON.parse(fs.readFileSync(args['config']))

const options = {
  verbose: args['verbose'] === true,
  noDeps: args['noDeps'] === true,
}

init(projectConfig, options)

process.exit(0)
