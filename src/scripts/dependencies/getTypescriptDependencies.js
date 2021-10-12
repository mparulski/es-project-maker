'use strict'

function getTypescriptDependencies({noReact}) {
  let dependencies = require('../../packages/typescript').base

  if (!noReact) {
    dependencies = [...dependencies, ...require('../../packages/typescript').react]
  }

  return dependencies
}

module.exports = getTypescriptDependencies
