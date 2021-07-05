'use strict'

const calculateConfigBabel = require('./configs/calculateConfigBabel')
const calculateConfigEslint = require('./configs/calculateConfigEslint')
const calculateConfigPrettier = require('./configs/calculateConfigPrettier')
const calculateConfigTypescript = require('./configs/calculateConfigTypescript')
const {calculateDevConfigWebpack, calculateProdConfigWebpack} = require('./configs/calculateConfigWebpack')

function calculateConfigs(options) {
  options.babel && calculateConfigBabel(options)
  options.eslint && calculateConfigEslint(options)
  options.prettier && calculateConfigPrettier(options)
  options.typescript && calculateConfigTypescript(options)
  options.webpackDevConfig && calculateDevConfigWebpack(options)
  options.webpackProdConfig && calculateProdConfigWebpack(options)
}

module.exports = calculateConfigs
