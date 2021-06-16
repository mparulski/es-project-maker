'use strict'

const moduleHelper = require('../helpers/moduleHelper')

function getBabelDependencies(options) {
  let dependencies = require('../../packages/babel').base

  if (moduleHelper.hasReact) {
    dependencies = [...dependencies, ...require('../../packages/babel').react]
  }

  return dependencies
}

module.exports = getBabelDependencies
