const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.config.base')
const {getSeparateStylesLoaders} = require('./utils/style-loaders')
const {getTSLoaders} = require('./utils/ts-loaders')
const {getSourceMapsLoaders} = require('./utils/source-map-loaders')


const serverConfig = {
  entry: './server/index.ts',

  target: 'node',

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },

  module: {
    rules: [
      ...getTSLoaders(),

      ...getSourceMapsLoaders(),

      ...getSeparateStylesLoaders()
    ]
  },

  externals: [
    {
      React: 'react',
      ReactDOM: 'react-dom'
    },
    nodeExternals()
  ],

  // TODO Sort assets optimization out
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
                               'process.env': {
                                 BROWSER: JSON.stringify(false)
                               }
                             }),

    new MiniCssExtractPlugin({
                               filename: '[name].css',
                             })
  ]
}

module.exports = merge.smart(baseConfig, serverConfig)
