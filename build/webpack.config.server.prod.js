const merge = require('webpack-merge')
const baseServerConfig = require('./webpack.config.server.base')

const serverConfig = {}

module.exports = merge.smart(baseServerConfig, serverConfig)
