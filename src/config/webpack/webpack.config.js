const merge = require("deepmerge")
const path = require("path")
const webpack = require("webpack")

module.exports = {
    target: "web",
    mode: "none",
    entry: "./src/index.js",
    resolve: {
        extensions: ["*", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.bundle.js",
        libraryTarget: "commonjs2",
    },
    stats: {
        colors: true
    },
    devtool: "eval-source-map"
}
