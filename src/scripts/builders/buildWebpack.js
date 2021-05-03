const touch = require("../utils/touchProjectConfig")
const merge = require("deepmerge")

const baseConfig = require('../../config/webpack/webpack.config');
const devConfig = require('../../config/webpack/webpack.dev.config');

const CONFIG_FILENAME = "webpack.config.js"

const buildWebpack = (applicationConfig) => {
    if (!applicationConfig["webpack"]["enable"]) {
        return
    }

    const appConfig = applicationConfig["webpack"]["config"]

    const baseDevConfig = merge(baseConfig, devConfig)

    const finalConfig = merge(baseDevConfig, appConfig)
    touch(CONFIG_FILENAME, finalConfig);
}

module.exports = buildWebpack
