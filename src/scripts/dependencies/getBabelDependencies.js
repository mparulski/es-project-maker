'use strict'

function getBabelDependencies({noReact}) {
  let dependencies = require('../../packages/babel').base

  if (!noReact) {
    dependencies = [...dependencies, ...require('../../packages/babel').react]
  }

  return dependencies
}

module.exports = getBabelDependencies
