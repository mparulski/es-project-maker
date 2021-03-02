const path = require('path')
const defaultConfig = require('./defaultConfig')

module.exports = (config = defaultConfig) => ({
    entry: config.entry,
})