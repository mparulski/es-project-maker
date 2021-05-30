'use strict'

const merge = require('../utils/mergeWithCombineArray')

const MODULES = require('../modules')

function getBabelDependencies(options) {
  let dependencies = require('../../packages/babel').base

  if (options.enabledModules.has(MODULES.REACT)) {
    dependencies = merge(dependencies, require('../../packages/babel').react)
  }

  return dependencies
}

module.exports = getBabelDependencies
