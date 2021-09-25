'use strict'

const path = require('path')
const readFile = require('./readFile')

function readPackageJson(runtimeOptions) {
  const packageJsonFile = path.join(
    runtimeOptions.projectRootDir,
    'package.json',
  )

  return JSON.parse(readFile(packageJsonFile))
}

module.exports = readPackageJson
