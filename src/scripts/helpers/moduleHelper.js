'use strict'

const MODULES = require('../modules')

const modules = {}

const getEnabledModules = projectConfig => {
  return new Set(
    Object.entries(MODULES)
      .filter(([key, val]) =>
        Object.prototype.hasOwnProperty.call(
          Object.assign({}, projectConfig),
          val,
        ),
      )
      .map(([key, val]) => val),
  )
}

const init = projectConfig => {
  const enabledModules = getEnabledModules(projectConfig)

  modules.hasBabel = enabledModules.has(MODULES.BABEL)
  modules.hasEslint = enabledModules.has(MODULES.ESLINT)
  modules.hasJest = enabledModules.has(MODULES.JEST)
  modules.hasPrettier = enabledModules.has(MODULES.PRETTIER)
  modules.hasTypescript = enabledModules.has(MODULES.TYPESCRIPT)
  modules.hasWebpack = enabledModules.has(MODULES.WEBPACK)

  Object.assign(init, modules)
}

module.exports = init
