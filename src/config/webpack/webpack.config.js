const merge = require("deepmerge")
const path = require("path")
const webpack = require("webpack")

const defaultConfig = {
    mode: "none",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "commonjs2",
    }
}

const baseConfig = (env, config) => {
    const userConfig = merge(defaultConfig, config)

    return {
        target: "web",
        mode: config.mode,
        entry: config.entry,
        module: {
            rules: [
                {
                    test: /\.(js|mjs)$/,
                    exclude: /node_modules/,
                    use: [
                        "babel-loader",
                        "source-map-loader"
                    ],
                    enforce: "pre"
                }
            ]
        },
        resolve: {
            extensions: ["*", ".js"]
        },
        output: config.output,
        stats: {
            colors: true
        },
        devtool: "source-map"
    }
}

module.exports = config => env => baseConfig(env, config)
