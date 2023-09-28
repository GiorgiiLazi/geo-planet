const { defineConfig } = require('@vue/cli-service')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/geo-planet/',
  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()],
  }
})
