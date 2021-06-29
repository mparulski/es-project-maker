'use strict'

function getEslintDependencies(options) {
  return require('../../packages/eslint').base
}

module.exports = getEslintDependencies
