'use strict'

function getTypescriptDependencies({noReact}) {
  let dependencies = require('../../packages/tests').base

  if (!noReact) {
    dependencies = [...dependencies, ...require('../../packages/tests').react]
  }

  return dependencies
}

module.exports = getTypescriptDependencies
