'use strict'

const path = require('path')
const readFile = require('./readFile')

function readPackageJson(options) {
  const packageJsonFile = options.projectRootDir + path.sep + 'package.json'

  return JSON.parse(readFile(packageJsonFile))
}

module.exports = readPackageJson
