'use strict'

const fs = require('fs')
const path = require('path')
const logger = require('./logger')

function getConfig(fileConfig) {
  if (fileConfig === undefined) {
    return config => config
  }

  if (!fs.existsSync(fileConfig)) {
    logger.error('Config ' + fileConfig + ' does not exists!')
    process.env(1)
  }

  return require(path.resolve(fileConfig))
}

module.exports = getConfig
