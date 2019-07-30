const path = require('path')

module.exports = {
  getResolveOption
}

function getResolveOption() {
  return {
    modules: [
      'node_modules',
      path.join(__dirname, '../../admin'),
      path.join(__dirname, '../../client'),
      path.join(__dirname, '../../assets'),
      path.join(__dirname, '../../db'),
      path.resolve(__dirname, '../../server'),
      path.resolve(__dirname, '../../shared')
    ],

    extensions: ['.ts', '.tsx', '.js', '.css', '.sass', '.json', 'svg']
  }
}
