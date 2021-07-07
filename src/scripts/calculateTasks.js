'use strict'

const path = require('path')
const merge = require('deepmerge')
const readFile = require('./utils/readFile')
const touchJSON = require('./utils/touchJSON')

function calculateTasks(options) {
  const packageJsonFile = options.projectRootDir + path.sep + 'package.json'

  const scripts = {}

  if (!options.noBabel && options.noWebpack) {
    scripts.build = 'babel -w src/ -d dist -s'
  }

  if (!options.noTypescript && options.noWebpack) {
    scripts.build = 'tsc'
  }

  if (!options.noWebpack) {
    scripts.start = 'webpack serve --config=webpack.dev.config.js'
    scripts.build = 'webpack --config=webpack.prod.config.js'
  }

  const packageJson = JSON.parse(readFile(packageJsonFile))
  touchJSON(packageJsonFile, merge(packageJson, {scripts}))
}

module.exports = calculateTasks
