#!/usr/bin/env node
'use strict';

const fs = require('fs');

const args = require('minimist')(process.argv.slice(2))

const buildBabel = require('../src/scripts/builders/buildBabel');
const buildWebpack = require('../src/scripts/builders/buildWebpack');

if (args['config'] === undefined || args['config'] === null || !fs.existsSync(args['config'])) {
    console.error(
        '\x1b[31m',
        'Configuration file does not exists!\n',
        '\x1b[33m',
        'You must specified configuration file path in --config parameter',
        '\x1b[0m')
    process.exit(1)
}

const applicationConfig = JSON.parse(fs.readFileSync(args['config']))

buildBabel(applicationConfig)
buildWebpack(applicationConfig)

process.exit(0)