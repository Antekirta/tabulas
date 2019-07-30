const merge = require('webpack-merge')
const baseServerConfig = require('./webpack.config.server.base')

const serverConfig = {
  watchOptions: {
    ignored: /node_modules/
  },
}

module.exports = merge.smart(baseServerConfig, serverConfig)
