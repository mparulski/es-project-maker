const webpackConfig = projectConfigPath =>
    '#!/usr/bin/env node\n' +
    "'use strict';\n" +
    "const path = require('path');\n" +
    'const callbackConfigWebpack = require(path.resolve("' + projectConfigPath + '")).webpack;\n' +
    '\n' + 'module.exports = () => callbackConfigWebpack(require("@mparulski/es-project-maker-webpack/config/webpack.dev.config"))'

module.exports = webpackConfig
