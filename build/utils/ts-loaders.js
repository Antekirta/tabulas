const path = require('path')

module.exports = {
  getTSLoaders
}

function getTSLoaders() {
  return [
    {
      test: /\.tsx?$/,
      include: [
        path.resolve(__dirname, '../../admin'),
        path.resolve(__dirname, '../../client'),
        path.resolve(__dirname, '../../db'),
        path.resolve(__dirname, '../../server'),
        path.resolve(__dirname, '../../shared')
      ],
      use: [
        {
          loader: 'awesome-typescript-loader',
          options: {
            useCache: true,
            isolatedModules: true,
            reportFiles: true
          }
        }
      ]
    },
  ]
}
