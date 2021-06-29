'use strict'

function getBabelDependencies(options) {
  let dependencies = require('../../packages/babel').base

  if (options.react) {
    dependencies = [...dependencies, ...require('../../packages/babel').react]
  }

  return dependencies
}

module.exports = getBabelDependencies
