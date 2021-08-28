const path = require('path')

const getResolvedPath = pathToResolve =>
  path.resolve(pathToResolve).replace(/\\/g, '/')

const webpackConfigBuilder = makerConfigPath => relativeConfigPath => {
  const projectConfig =
    relativeConfigPath !== undefined
      ? `require(path.resolve(".//${relativeConfigPath}"))(env)`
      : '{}'

  return `#!/usr/bin/env node 

'use strict';

const path = require('path');
const {merge} = require("webpack-merge");
module.exports = env => merge(
    require("${makerConfigPath}"), 
    ${projectConfig})`
}

module.exports = webpackConfigBuilder
