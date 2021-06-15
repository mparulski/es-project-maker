'use strict'

const calculateConfigBabel = require('./calculateConfigs/calculateConfigBabel')
const calculateConfigEslint = require('./calculateConfigs/calculateConfigEslint')
const calculateConfigPrettier = require('./calculateConfigs/calculateConfigPrettier')
const calculateConfigTypescript = require('./calculateConfigs/calculateConfigTypescript')
const calculateConfigWebpack = require('./calculateConfigs/calculateConfigWebpack')

function calculateConfigs(projectConfig, options) {
  calculateConfigBabel(options)
  calculateConfigEslint(options)
  calculateConfigPrettier(options)
  calculateConfigTypescript(options)
  calculateConfigWebpack(options)
}

module.exports = calculateConfigs
