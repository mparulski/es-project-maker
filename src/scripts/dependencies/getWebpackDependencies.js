'use strict'

function getWebpackDependencies(options) {
  return require('../../packages/webpack').base
}

module.exports = getWebpackDependencies
