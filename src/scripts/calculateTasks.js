'use strict'

const path = require('path')
const merge = require('deepmerge')
const readFile = require('./utils/readFile')
const touchJSON = require('./utils/touchJSON')

const MODULES = require('./modules')

function calculateTasks(options) {
  const packageJsonFile = options.projectRootDir + path.sep + 'package.json'

  const scripts = {}
  if (
    options.enabledModules.has(MODULES.BABEL) &&
    !options.enabledModules.has(MODULES.WEBPACK)
  ) {
    scripts.build = 'babel -w src/ -d dist -s'
  }

  if (
    options.enabledModules.has(MODULES.BABEL) &&
    options.enabledModules.has(MODULES.WEBPACK)
  ) {
    scripts.build = ''
  }

  if (options.enabledModules.has(MODULES.TYPESCRIPT)) {
    scripts.build = 'tsc'
  }

  const packageJson = JSON.parse(readFile(packageJsonFile))
  touchJSON(packageJsonFile, merge(packageJson, {scripts}))
}

module.exports = calculateTasks
