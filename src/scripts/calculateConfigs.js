'use strict'

const calculateConfigBabel = require('./calculateConfigs/calculateConfigBabel')
const calculateConfigPrettier = require('./calculateConfigs/calculateConfigPrettier')
const calculateConfigTypescript = require('./calculateConfigs/calculateConfigTypescript')
const calculateConfigWebpack = require('./calculateConfigs/calculateConfigWebpack')

const MODULES = require('./modules')

function calculateConfigs(projectConfig, options) {
  const {enabledModules} = options

  enabledModules.has(MODULES.BABEL) &&
    calculateConfigBabel(projectConfig[MODULES.BABEL], options)

  enabledModules.has(MODULES.PRETTIER) &&
    calculateConfigPrettier(projectConfig[MODULES.PRETTIER], options)

  enabledModules.has(MODULES.TYPESCRIPT) &&
    calculateConfigTypescript(projectConfig[MODULES.TYPESCRIPT], options)

  enabledModules.has(MODULES.WEBPACK) &&
    calculateConfigWebpack(projectConfig[MODULES.WEBPACK], options)
}

module.exports = calculateConfigs
