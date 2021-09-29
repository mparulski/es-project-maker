'use strict'

const getResolvedPath = pathToResolve => pathToResolve.replace(/\\/g, '/')

const webpackConfigBuilder = makerConfigPath => relativeConfigPath => {
  const projectConfig =
    relativeConfigPath !== undefined
      ? `require(path.resolve("./${getResolvedPath(relativeConfigPath)}"))(env)`
      : '{}'

  return `#!/usr/bin/env node 

'use strict';

const path = require('path');
const {mergeWithRules} = require("webpack-merge");

const rules = {
  module: {
      rules: {
          test: "match",
          use: "replace",
          exclude: "replace",
          include: "replace",
      },
  },
}

module.exports = env => mergeWithRules(rules)(
    require("${makerConfigPath}"), 
    ${projectConfig})`
}

module.exports = webpackConfigBuilder
