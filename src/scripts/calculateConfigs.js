'use strict'

const getModuleConfig = require('./utils/getModuleConfig')
const calculateConfigBabel = require('./calculateConfigs/calculateConfigBabel')
const calculateConfigEslint = require('./calculateConfigs/calculateConfigEslint')
const calculateConfigPrettier = require('./calculateConfigs/calculateConfigPrettier')
const calculateConfigTypescript = require('./calculateConfigs/calculateConfigTypescript')
const calculateConfigWebpack = require('./calculateConfigs/calculateConfigWebpack')

const MODULES = require('./modules')

function calculateConfigs(projectConfig, options) {
  const {enabledModules} = options

  enabledModules.has(MODULES.BABEL) &&
    calculateConfigBabel(getModuleConfig(projectConfig[MODULES.BABEL]), options)

  enabledModules.has(MODULES.ESLINT) &&
    calculateConfigEslint(
      getModuleConfig(projectConfig[MODULES.ESLINT]),
      options,
    )

  enabledModules.has(MODULES.PRETTIER) &&
    calculateConfigPrettier(
      getModuleConfig(projectConfig[MODULES.PRETTIER]),
      options,
    )

  enabledModules.has(MODULES.TYPESCRIPT) &&
    calculateConfigTypescript(
      getModuleConfig(projectConfig[MODULES.TYPESCRIPT]),
      options,
    )

  enabledModules.has(MODULES.WEBPACK) &&
    calculateConfigWebpack(
      getModuleConfig(projectConfig[MODULES.WEBPACK]),
      options,
    )
}

module.exports = calculateConfigs
