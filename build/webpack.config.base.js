const path = require('path')
const {getResolveOption} = require('./utils/resolve')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',

  context: path.resolve(__dirname, '../'),

  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          esModule: false
        }
      }
    ]
  },

  plugins: [
    new SpriteLoaderPlugin()
  ],

  resolve: getResolveOption(),

  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',

  watch: process.env.NODE_ENV !== 'production'
}
