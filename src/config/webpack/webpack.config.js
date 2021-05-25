const webpackConfig = projectConfigPath => 
    "#!/usr/bin/env node\n" +
    "'use strict';\n" +
    "const path = require('path');\n" +
    "const {merge} = require(\"webpack-merge\");\n" +
    "\n" +
    "module.exports = () => merge(require(\"./webpack.dev.config\"), require(path.resolve(\"" + projectConfigPath + "\")).webpack.config)"

module.exports = webpackConfig