'use strict'

const path = require('path')
const readFile = require('./readFile')

function read(options) {
  const packageJsonFile = options.projectRootDir + path.sep + 'package.json'

  return JSON.parse(readFile(packageJsonFile))
}

export {read}
