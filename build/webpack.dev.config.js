const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const htmlWebpackPluginConfig = {
    title: "ISMS V1.0.0 开发版本",
    filename: "index.html",
    template: "../index.html",
    inject: head
}

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "./dist/[hash]app.js",
        hashDigestLength: 6
    },
    plugins: [new htmlWebpackPlugin(htmlWebpackPluginConfig)],
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        port: 9090,
        open: true,
        index: "index.html"
    }
}