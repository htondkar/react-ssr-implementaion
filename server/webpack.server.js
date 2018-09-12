const path = require('path')
const mergeConfig = require('webpack-merge')
const baseConfig = require('./webpack.base')
const nodeExternalModules = require('webpack-node-externals')

const webpackServerConfig = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [nodeExternalModules()],
}

module.exports = mergeConfig(webpackServerConfig, baseConfig)
