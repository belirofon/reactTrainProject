const path = require('path');
const nodeExternals = require('webpack-node-externals')
const {
    DefinePlugin
} = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const stylesHandler = MiniCssExtractPlugin.loader;

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;


module.exports = {
    target: 'node',
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js'
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.ts', '.tsx'],
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
                test: /\.[jt]sx?$/,
                exclude: /(node_modules|bower_components)/,
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
                        onlyLocals: true,
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
    optimization: {
        minimize: false,
    },
    devtool: IS_DEV ? 'eval' : false,
    plugins: [new DefinePlugin({
        'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`
    })]
}