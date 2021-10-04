'use strict'

const {base: dependencies} = require('../../packages/babel')

function getTypescriptDependencies() {
  let dependencies = require('../../packages/typescript').base

  if (!noReact) {
    dependencies = [...dependencies, ...require('../../packages/typescript').react]
  }

  return dependencies
}

module.exports = getTypescriptDependencies
