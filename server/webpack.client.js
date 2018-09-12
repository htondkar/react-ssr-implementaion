const path = require('path')
const mergeConfig = require('webpack-merge')
const baseConfig = require('./webpack.base')

const webpackClientConfig = {
  entry: './src/client/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
}

module.exports = mergeConfig(webpackClientConfig, baseConfig)
