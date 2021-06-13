'use strict'

const path = require('path')
const merge = require('deepmerge')
const readFile = require('./utils/readFile')
const touchJSON = require('./utils/touchJSON')
const moduleHelper = require('./helpers/moduleHelper')

function calculateTasks(options) {
  const packageJsonFile = options.projectRootDir + path.sep + 'package.json'

  const scripts = {}
  if (moduleHelper.hasBabel && !moduleHelper.hasWebpack) {
    scripts.build = 'babel -w src/ -d dist -s'
  }

  if (moduleHelper.hasBabel && moduleHelper.hasWebpack) {
    scripts.build = 'webpack serve --config=webpack.config.js'
  }

  if (moduleHelper.hasTypescript) {
    scripts.build = 'tsc'
  }

  const packageJson = JSON.parse(readFile(packageJsonFile))
  touchJSON(packageJsonFile, merge(packageJson, {scripts}))
}

module.exports = calculateTasks
