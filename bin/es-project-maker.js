#!/usr/bin/env node
'use strict'

const fs = require('fs')
const path = require('path')
const logger = require('../src/scripts/utils/logger')
const args = require('minimist')(process.argv.slice(2))

const init = require('../src/scripts/init')

let projectConfig = {}

if (
  args['config'] === undefined ||
  args['config'] === null ||
  !fs.existsSync(args['config'])
) {
  logger.info(
    'Configuration file has not been set.\n',
    'It can be specified as a configuration file path in --config parameter',
  )
} else {
  projectConfig = require(path.resolve(args['config']))
}

const options = {
  verbose: args['verbose'] === true,
  noDeps: args['noDeps'] === true,
}

init(projectConfig, options)

process.exit(0)
