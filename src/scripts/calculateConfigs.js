'use strict'

const calculateConfigBabel = require('./calculateConfigs/calculateConfigBabel')
const calculateConfigEslint = require('./calculateConfigs/calculateConfigEslint')
const calculateConfigPrettier = require('./calculateConfigs/calculateConfigPrettier')
const calculateConfigTypescript = require('./calculateConfigs/calculateConfigTypescript')
const calculateConfigWebpack = require('./calculateConfigs/calculateConfigWebpack')
const {hasModule} = require('./helpers/moduleHelperProvider')

const MODULES = require('./modules')

function calculateConfigs(projectConfig, options) {
  hasModule.babel && calculateConfigBabel(projectConfig[MODULES.BABEL], options)

  hasModule.eslint &&
    calculateConfigEslint(projectConfig[MODULES.ESLINT], options)

  hasModule.prettier &&
    calculateConfigPrettier(projectConfig[MODULES.PRETTIER], options)

  hasModule.typescript &&
    calculateConfigTypescript(projectConfig[MODULES.TYPESCRIPT], options)

  hasModule.webpack &&
    calculateConfigWebpack(projectConfig[MODULES.WEBPACK], options)
}

module.exports = calculateConfigs
