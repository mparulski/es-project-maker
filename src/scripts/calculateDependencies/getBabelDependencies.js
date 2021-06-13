'use strict'

const {hasModule} = require('../helpers/moduleHelperProvider')

function getBabelDependencies(options) {
  let dependencies = require('../../packages/babel').base

  if (hasModule.react) {
    dependencies = [...dependencies, ...require('../../packages/babel').react]
  }

  return dependencies
}

module.exports = getBabelDependencies
