'use strict'

const path = require('path')
const merge = require('deepmerge')
const readFile = require('./utils/readFile')
const touchJSON = require('./utils/touchJSON')

function calculateTasks(options) {
  const packageJsonFile = options.projectRootDir + path.sep + 'package.json'

  const scripts = {}

  if(options.webpackDevConfig) {
    scripts.start = 'webpack serve --config=webpack.dev.config.js'
  }

  if(options.webpackProdConfig) {
    scripts.build = 'webpack --config=webpack.prod.config.js'
  }

  const packageJson = JSON.parse(readFile(packageJsonFile))
  touchJSON(packageJsonFile, merge(packageJson, {scripts}))
}

module.exports = calculateTasks
