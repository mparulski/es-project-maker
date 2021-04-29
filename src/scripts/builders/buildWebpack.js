const touch = require("../utils/touchProjectConfig")

const baseConfig = require('@mparulski/es-project-maker/src/config/webpack/webpack.config');

const CONFIG_FILENAME = "webpack.config.js"

const buildWebpack = (applicationConfig) => {
    if (!applicationConfig["webpack"]["enable"]) {
        return
    }

    const computedConfig = baseConfig(applicationConfig["webpack"]["config"])()

    touch(CONFIG_FILENAME, computedConfig);
}

module.exports = buildWebpack
