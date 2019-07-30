const devClientConfig = require('./webpack.config.client.prod')
const prodServerConfig = require('./webpack.config.server.prod')

module.exports = [devClientConfig, prodServerConfig]
