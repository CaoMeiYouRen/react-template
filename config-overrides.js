/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const paths = require('react-scripts/config/paths')
module.exports = function override(config, env) {
    // 关闭sourceMap
    if (env === 'production') {
        config.devtool = false
    }
    console.log('env: ', JSON.stringify(env), env === 'production')
    // 配置打包后的文件位置
    config.output.path = path.join(__dirname, '/dist')
    config.output.publicPath = '/'
    // 配置favicon公共文件打包目录
    paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist')

    const loaders = config.module.rules.find((rule) => Array.isArray(rule.oneOf)).oneOf

    // Insert less-loader as the penultimate item of loaders (before file-loader)
    loaders.splice(
        loaders.length - 1,
        0,
        {
            test: /\.less$/i,
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'less-loader',
                    options: {
                        lessOptions: {
                            strictMath: true,
                        },
                    },
                },
            ],
        },
    )

    return config
}
