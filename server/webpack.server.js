const path = require('path')
const mergeConfig = require('webpack-merge')
const baseConfig = require('./webpack.base')

const webpackServerConfig = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
}

module.exports = mergeConfig(webpackServerConfig, baseConfig)
