'use strict'

const MODULES = require('../modules')

const hasModule = {}

const init = enabledModules => {
  hasModule.babel = enabledModules.hasModule(MODULES.BABEL)
  hasModule.eslint = enabledModules.hasModule(MODULES.ESLINT)
  hasModule.jest = enabledModules.hasModule(MODULES.JEST)
  hasModule.prettier = enabledModules.hasModule(MODULES.PRETTIER)
  hasModule.typescript = enabledModules.hasModule(MODULES.TYPESCRIPT)
  hasModule.webpack = enabledModules.hasModule(MODULES.WEBPACK)
}

module.exports = {
  hasModule,
  init,
}
