const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const htmlWebpackPluginConfig = {
    title: "ISMS V1.0.0 开发版本",
    filename: "index.html",
    template: "./src/template/index.html",
    inject: "body"
}

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "./dist/[hash]app.js",
        hashDigestLength: 6
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {
                        attrs: [":data-src"]
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name]2.[ext]",
                            outputPath: "img/"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new htmlWebpackPlugin(htmlWebpackPluginConfig)],
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        port: 9090,
        open: false,
        index: "index.html",
        inline: true,
        hot: true,
        compress: true
    }
}