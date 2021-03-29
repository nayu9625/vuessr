const { resolve } = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConf = require('./webpack.base.js');

const devConf = {
  mode: 'development',
  entry: resolve(__dirname, '../src/client/entry.client.js'),
  output: {
    filename: 'client.bundle.js',
  },
  devServer: {
    contentBase: resolve(__dirname, '../dist'),
    port: 8080,
    historyApiFallback: true, // 路由不存在重定向到index
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // 执行顺序从右往左
     }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/client/index.template.html')
    })
  ]
}

module.exports = merge(baseConf, devConf)