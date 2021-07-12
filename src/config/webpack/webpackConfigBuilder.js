const path = require('path')

const getResolvedPath = pathToResolve =>
  path.resolve(pathToResolve).replace(/\\/g, '/')

const webpackConfigBuilder =
  projectRootDir => makerConfigPath => projectConfigPath => {
    const projectConfig =
      projectConfigPath !== undefined
        ? `require(path.resolve("${getResolvedPath(
            projectConfigPath,
          )}"))("${getResolvedPath(projectRootDir)}")`
        : '{}'

    return `#!/usr/bin/env node 

'use strict';

const path = require('path');
const {merge} = require("webpack-merge");
module.exports = () => merge(
    require("${makerConfigPath}"), 
    ${projectConfig})`
  }

module.exports = webpackConfigBuilder
