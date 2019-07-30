const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseClientConfig = require('./webpack.config.client.base')
const {getSeparateStylesLoaders} = require('./utils/style-loaders')
const {getTSLoaders} = require('./utils/ts-loaders')
const {getSourceMapsLoaders} = require('./utils/source-map-loaders')

const browserConfig = {
  module: {
    rules: [
      ...getTSLoaders(),

      ...getSourceMapsLoaders(),

      ...getSeparateStylesLoaders()
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
                               filename: '[name].css',
                             })
  ]
}

module.exports = merge.smart(baseClientConfig, browserConfig)
