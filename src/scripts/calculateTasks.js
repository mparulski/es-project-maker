'use strict'

const path = require('path')
const merge = require('deepmerge')
const readFile = require('./utils/readFile')
const touchJSON = require('./utils/touchJSON')
const {hasModule} = require('./helpers/moduleHelperProvider')

function calculateTasks(options) {
  const packageJsonFile = options.projectRootDir + path.sep + 'package.json'

  const scripts = {}
  if (hasModule.babel && !hasModule.webpack) {
    scripts.build = 'babel -w src/ -d dist -s'
  }

  if (hasModule.babel && hasModule.webpack) {
    scripts.build = 'webpack serve --config=webpack.config.js'
  }

  if (hasModule.typescript) {
    scripts.build = 'tsc'
  }

  const packageJson = JSON.parse(readFile(packageJsonFile))
  touchJSON(packageJsonFile, merge(packageJson, {scripts}))
}

module.exports = calculateTasks
