const webpackConfigBuilder = options => makerConfigPath => projectConfigPath =>
  `#!/usr/bin/env node
  
  'use strict';
  
  const path = require('path');
  const {merge} = require("webpack-merge");
  module.exports = () => merge(require("${makerConfigPath}"), require(path.resolve("${projectConfigPath}"))(${options}))`

module.exports = webpackConfigBuilder
