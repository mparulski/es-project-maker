const webpackConfigBuilder = makerConfigPath => projectConfigPath =>
  '#!/usr/bin/env node\n' +
  "'use strict';\n" +
  "const path = require('path');\n" +
  'const {merge} = require("webpack-merge");\n' +
  '\n' +
  'module.exports = () => merge(require("' +
  makerConfigPath +
  '") ' +
  (projectConfigPath
    ? ', require(path.resolve("' + projectConfigPath + '"))'
    : '') +
  ')'

module.exports = webpackConfigBuilder
