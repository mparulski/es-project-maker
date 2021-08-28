'use strict'

const calculateConfigBabel = require('./configs/calculateConfigBabel')
const calculateConfigEslint = require('./configs/calculateConfigEslint')
const calculateConfigPrettier = require('./configs/calculateConfigPrettier')
const calculateConfigTypescript = require('./configs/calculateConfigTypescript')
const {
  calculateDevConfigWebpack,
  calculateProdConfigWebpack,
} = require('./configs/calculateConfigWebpack')

function calculateConfigs(options) {
  calculateConfigBabel(options)
  !options.noEslint && calculateConfigEslint(options)
  !options.noPrettier && calculateConfigPrettier(options)
  calculateConfigTypescript(options)
  !options.noWebpack && calculateDevConfigWebpack(options)
  !options.noWebpack && calculateProdConfigWebpack(options)
}

module.exports = calculateConfigs
