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
  !options.noBabel && calculateConfigBabel(options)
  !options.noEslint && calculateConfigEslint(options)
  !options.noPrettier && calculateConfigPrettier(options)
  !options.noTypescript && calculateConfigTypescript(options)
  !options.noWebpackDevConfig && calculateDevConfigWebpack(options)
  !options.noWebpackProdConfig && calculateProdConfigWebpack(options)
}

module.exports = calculateConfigs
