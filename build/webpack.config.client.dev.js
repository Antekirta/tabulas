const path = require('path')
const merge = require('webpack-merge')
const baseClientConfig = require('./webpack.config.client.base')
const {getInjectedStylesLoaders} = require('./utils/style-loaders')
const {getTSLoaders} = require('./utils/ts-loaders')
const {getSourceMapsLoaders} = require('./utils/source-map-loaders')

const browserConfig = {
  module: {
    rules: [
      ...getTSLoaders(),

      ...getSourceMapsLoaders(),

      ...getInjectedStylesLoaders()
    ]
  },

  devServer: {
    contentBase: [path.join(__dirname, '../public'), path.join(__dirname, '../dist')],
    compress: true,
    port: 3001,
    writeToDisk: true
  }
}

module.exports = merge.smart(baseClientConfig, browserConfig)
