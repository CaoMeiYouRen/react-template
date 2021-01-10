/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const paths = require('react-scripts/config/paths')
module.exports = function override(config, env) {
    // 关闭sourceMap
    config.devtool = process.env.NODE_ENV === 'development' // 移除生产环境的 source map
    // 配置打包后的文件位置
    config.output.path = path.join(__dirname, '/dist')
    config.output.publicPath = '/'
    // 配置favicon公共文件打包目录
    paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist')
    return config
}