const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge');
const baseConf = require('./webpack.base');

const severConf = {
  mode: 'development',
  entry: resolve(__dirname, '../src/client/entry.server.js'),
  output: {
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'ignore-loader',
      }
    ]
  }

}

module.exports = merge(baseConf, severConf);