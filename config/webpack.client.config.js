const path = require('path');   
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const stylesHandler = MiniCssExtractPlugin.loader;

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
// const DEV_PLUGINS = [ new CleanWebpackPlugin(), new HotModuleReplacementPlugin()];
// const COMMON_PLUGINS = [ new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` }) ]

/**
 * Генерирует настройку для devtool в зависимости от NODE_ENV:
 * - в продакшенене false
 * - в девелопменте eval
 */
function setupDevtool() {
    if (IS_PROD) {
        return false;
    }

    if (IS_DEV) {
        return 'eval';
    }
}

module.exports = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.ts', '.tsx'],
        alias: {
            'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
        },
    },
    entry: [
        path.resolve(__dirname, '../src/client/index.jsx'),
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
    ],
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        publicPath: '/static/',
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, "sass-loader", {
                    loader: stylesHandler,
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        },
                    }
                },
            ],  exclude: GLOBAL_CSS_REGEXP
              },
              {
                test: GLOBAL_CSS_REGEXP,
                use: [stylesHandler, 'sass-loader']
            },
              {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
              },
        ]
    },
    devtool: setupDevtool(),
    plugins: IS_DEV
    ? [
        new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin()
] : [],
    // plugins: IS_DEV ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS
};