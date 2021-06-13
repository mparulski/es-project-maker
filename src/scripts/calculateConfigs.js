'use strict'

const calculateConfigBabel = require('./calculateConfigs/calculateConfigBabel')
const calculateConfigEslint = require('./calculateConfigs/calculateConfigEslint')
const calculateConfigPrettier = require('./calculateConfigs/calculateConfigPrettier')
const calculateConfigTypescript = require('./calculateConfigs/calculateConfigTypescript')
const calculateConfigWebpack = require('./calculateConfigs/calculateConfigWebpack')
const moduleHelper = require('./helpers/moduleHelper')

const MODULES = require('./modules')

function calculateConfigs(projectConfig, options) {
  moduleHelper.hasBabel &&
    calculateConfigBabel(projectConfig[MODULES.BABEL], options)

  moduleHelper.hasEslint &&
    calculateConfigEslint(projectConfig[MODULES.ESLINT], options)

  moduleHelper.hasPrettier &&
    calculateConfigPrettier(projectConfig[MODULES.PRETTIER], options)

  moduleHelper.hasTypescript &&
    calculateConfigTypescript(projectConfig[MODULES.TYPESCRIPT], options)

  moduleHelper.hasWebpack &&
    calculateConfigWebpack(projectConfig[MODULES.WEBPACK], options)
}

module.exports = calculateConfigs
