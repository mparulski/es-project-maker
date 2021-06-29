'use strict'

const calculateConfigBabel = require('./configs/calculateConfigBabel')
const calculateConfigEslint = require('./configs/calculateConfigEslint')
const calculateConfigPrettier = require('./configs/calculateConfigPrettier')
const calculateConfigTypescript = require('./configs/calculateConfigTypescript')
const calculateConfigWebpack = require('./configs/calculateConfigWebpack')

function calculateConfigs(options) {
  options.babel && calculateConfigBabel(options)
  options.eslint && calculateConfigEslint(options)
  // options.prettier && calculateConfigPrettier(options)
  // options.typescript && calculateConfigTypescript(options)
  // options.webpack && calculateConfigWebpack(options)
}

module.exports = calculateConfigs
