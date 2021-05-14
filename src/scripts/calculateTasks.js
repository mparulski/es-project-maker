'use strict'

const path = require('path')
const merge = require('deepmerge')
const readFile = require('./utils/readFile')
const touchJSON = require('./utils/touchJSON')

const MODULES = require('./modules')
const packageJsonFile = options.projectRootDir + path.sep + 'package.json'

function calculateTasks(options) {
  console.log(options)

  const scripts = {}
  if (
    options.enabledModules.includes(MODULES.BABEL) &&
    !options.enabledModules.includes(MODULES.WEBPACK)
  ) {
    scripts.build = 'babel -w src/ -d dist -s'
  }

  if (
    options.enabledModules.includes(MODULES.BABEL) &&
    options.enabledModules.includes(MODULES.WEBPACK)
  ) {
  }

  const packageJson = JSON.parse(readFile(packageJsonFile))
  touchJSON(packageJsonFile, merge(packageJson, {scripts}))
}

module.exports = calculateTasks
