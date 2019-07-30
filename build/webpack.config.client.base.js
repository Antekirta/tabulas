const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')

const browserConfig = {
  entry: {
    app: './client/src/index.tsx',
    solutions: './client/src/solutions.tsx',

    admin: './admin/src/index.tsx'
  },

  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js'
  },

  externals: {
    React: 'react',
    ReactDOM: 'react-dom'
  },

  plugins: [
    new webpack.DefinePlugin({
                               "process.env": {
                                 BROWSER: JSON.stringify(true)
                               }
                             }),

    new HtmlWebpackPlugin({
                            filename: path.join(__dirname, '../public/index.html'),
                            template: path.join(__dirname, '../server/router/views/default.ejs'),
                            templateParameters: {
                              App: '<HomePage />',
                              ssrStyles: false
                            },
                            chunks: ['app']
                          }),

    new HtmlWebpackPlugin({
                            filename: path.join(__dirname, '../public/admin.html'),
                            template: path.join(__dirname, '../server/router/views/admin.ejs'),
                            chunks: ['admin']
                          })
  ]
}

module.exports = merge.smart(baseConfig, browserConfig)
