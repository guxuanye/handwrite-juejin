const CracoLessPlugin = require('craco-less');
const { loaderByName } = require('@craco/craco');
const lessModuleRegex = /\.module\.less$/;

module.exports = {
    babel: {
        plugins: [
            // 配置 babel-plugin-import
            [
                'import',
                {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: 'css',
                },
                'antd',
            ],
        ],
    },
    webpack: {

    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },

                modifyLessRule(lessRule) {
                    lessRule.exclude = lessModuleRegex
                    return lessRule;
                },

                modifyLessModuleRule(lessModuleRule) {
                    // configure the file suffix
                    lessModuleRule.test = lessModuleRegex

                    // configure the generated local ident name
                    const cssLoader = lessModuleRule.use.find(loaderByName('css-loader'));
                    cssLoader.options.modules = {
                        /* 
                            注意这里的命名规则：
                            - CRA脚手架创建的项目是可以直接使用css modules的，css文件的命名规则默认是[local]_[hash:base64:5]
                            - 这里使用css modules的命名规则
                        */

                        localIdentName: '[local]_[hash:base64:5]',
                    };

                    return lessModuleRule;
                },
            },
        },
    ],
};
