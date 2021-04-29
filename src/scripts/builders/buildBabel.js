const writeModuleConfigFile = require("../utils/writeModuleConfigFile")

const CONFIG_FILENAME = "babel.config.js"

const defaultConfig = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ]
    ],
    plugins: [
        "@babel/plugin-transform-arrow-functions"
    ]
}

const buildBabel = (applicationConfig) => {
    writeModuleConfigFile({fileContent: defaultConfig, filename: CONFIG_FILENAME});
}

module.exports = buildBabel
