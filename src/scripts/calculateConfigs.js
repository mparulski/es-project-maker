'use strict'

const calculateConfigBabel = require('./configs/calculateConfigBabel')
const calculateConfigEslint = require('./configs/calculateConfigEslint')
const calculateConfigPrettier = require('./configs/calculateConfigPrettier')
const calculateConfigTypescript = require('./configs/calculateConfigTypescript')
const {
  calculateDevConfigWebpack,
  calculateProdConfigWebpack,
} = require('./configs/calculateConfigWebpack')

function calculateConfigs(args, runtimeOptions) {
  const {noEslint, noPrettier, noWebpack} = args

  calculateConfigBabel(args, runtimeOptions)
  !noEslint && calculateConfigEslint(args, runtimeOptions)
  !noPrettier && calculateConfigPrettier(args, runtimeOptions)
  calculateConfigTypescript(args, runtimeOptions)
  !noWebpack && calculateDevConfigWebpack(args, runtimeOptions)
  !noWebpack && calculateProdConfigWebpack(args, runtimeOptions)
}

module.exports = calculateConfigs
