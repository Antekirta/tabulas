const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  getSeparateStylesLoaders,
  getInjectedStylesLoaders
}

function getSeparateStylesLoaders() {
  return [
    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        'css-loader'
      ]
    },
    {
      test: /\.sass$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        'css-loader',
        'sass-loader'
      ]
    }
  ]
}

function getInjectedStylesLoaders() {
  return [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.sass$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ]
}
