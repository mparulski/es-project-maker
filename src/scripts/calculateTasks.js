'use strict'

const path = require('path')
const merge = require('deepmerge')
const readFile = require('./utils/readFile')
const touchJSON = require('./utils/touchJSON')

function calculateTasks(options) {
  const packageJsonFile = options.projectRootDir + path.sep + 'package.json'

  const scripts = {}

  scripts.build = 'webpack serve --config=webpack.config.js'

  const packageJson = JSON.parse(readFile(packageJsonFile))
  touchJSON(packageJsonFile, merge(packageJson, {scripts}))
}

module.exports = calculateTasks
