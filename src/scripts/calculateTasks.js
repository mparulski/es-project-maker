'use strict'

const path = require('path')
const merge = require('deepmerge')
const readFile = require('./utils/readFile')
const touchJSON = require('./utils/touchJSON')

function calculateTasks(options) {
  const packageJsonFile = options.projectRootDir + path.sep + 'package.json'

  const scripts = {}

  scripts['build:babel'] = 'babel -w src/ -d dist -s'

  scripts['build:ts'] = 'tsc'

  if (!options.noWebpack) {
    scripts.start = 'webpack serve --config=webpack.dev.config.js'
    scripts['build:webpack'] = 'webpack --config=webpack.prod.config.js'
  }

  const packageJson = JSON.parse(readFile(packageJsonFile))
  touchJSON(packageJsonFile, merge(packageJson, {scripts}))
}

module.exports = calculateTasks
