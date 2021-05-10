'use strict';

const fs = require('fs');
const path = require('path')

function make(config, options) {
    fs.mkdir(path.join(options.projectRootDir, '.esProjectMaker'), (err) => {
        if (err) throw err;
    });

    const webpackConfigDir = path.resolve(options.esProjectMakerScriptsDir, '..', 'config', 'webpack');

    fs.copyFile(webpackConfigDir + path.sep + 'webpack.dev.config.js', options.projectRootDir + path.sep + '.esProjectMaker' + path.sep + 'webpack.dev.config.js', (err) => {
        if (err) throw err;
    });
}

module.exports = make

