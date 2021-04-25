const webpack = require("webpack")
const path = require("path")
const merge = require("webpack-merge")

module.exports = {
    target: "web",
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.bundle.js"
    },
    devtool: "eval-source-map",
    devServer: {
        host: "localhost",
        hot: "true"
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|woff|eot|ttf)$/i,
                type: 'asset/inline',
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}