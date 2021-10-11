'use strict'

const path = require('path')
const merge = require('deepmerge')
const readFile = require('./utils/readFile')
const touchJSON = require('./utils/touchJSON')

function calculateTasks(args, runtimeOptions) {
  const packageJsonFile = path.join(runtimeOptions.projectRootDir, 'package.json')

  const scripts = {}

  scripts['build:babel'] = 'babel -w src/ -d dist -s'

  scripts['build:ts'] = 'tsc'

  if (!args.noTests) {
    scripts['test:unit'] = 'jest'
    scripts['test:unit-watch'] = 'jest --watch'
  }

  if (!args.noWebpack) {
    scripts.start = 'webpack serve --config=webpack.dev.config.js'
    scripts['build:webpack'] = 'webpack --config=webpack.prod.config.js'
  }

  const packageJson = JSON.parse(readFile(packageJsonFile))
  touchJSON(packageJsonFile, merge(packageJson, {scripts}))
}

module.exports = calculateTasks
