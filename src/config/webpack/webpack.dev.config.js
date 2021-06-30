const webpackDevConfig = projectConfigPath =>
  '#!/usr/bin/env node\n' +
  "'use strict';\n" +
  "const path = require('path');\n" +
  'const {merge} = require("webpack-merge");\n' +
  '\n' +
  'module.exports = () => merge(require("@mparulski/es-project-maker-webpack/config/webpack.dev.config"), require(path.resolve("' +
  projectConfigPath +
  '")))'

module.exports = webpackDevConfig
