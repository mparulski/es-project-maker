'use strict';

const manageDependencies = require('./utils/manageDependencies')
const path = require('path')
const logger = require('./utils/logger')
const touch = require('./utils/touch')
const webpackConfig = require('../config/webpack/webpack.config')

const args = require('minimist')(process.argv.slice(2))

const CONFIG_FILENAME = 'webpack.config.js'

function setDependencies(options) {
    let wepbackDependencies = require('../packages/webpack').base
    
    manageDependencies('webpack', wepbackDependencies, options)
}

function createConfig(options) {
    logger.info('Start building the ' + CONFIG_FILENAME)

    const file = options.projectRootDir + path.sep + CONFIG_FILENAME;
    const content = touch({
        file,
        content: webpackConfig(args['config'])
    })

    options.verbose && logger.debug(CONFIG_FILENAME, content)

    logger.info(CONFIG_FILENAME + ' was built')
}

function calculateWebpack(config, options) {
    !options.noDeps && setDependencies(options)
    createConfig(options)   
}

module.exports = calculateWebpack

