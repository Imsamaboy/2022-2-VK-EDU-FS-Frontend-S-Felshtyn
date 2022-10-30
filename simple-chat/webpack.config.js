'use strict';

const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    context: SRC_PATH,
    entry: {
        index: './scripts/index.js',
        chatlist: './scripts/chatlist.js',
        chatpage: './scripts/chatpage.js'
    },
    output: {
        path: BUILD_PATH,
        publicPath: '',
        filename: 'scripts/[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        },
                    },
                ],
            },
            {
                test: /shadow\.css$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'css-loader'
                    },
                ],
            },
            {
                test: /\.css$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'styles/[name].css',
            chunks: ['chatlist']
        }),
        new MiniCSSExtractPlugin({
            filename: 'styles/[name].css',
            chunks: ['chatpage']
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks: ['index']
        }),
        new HTMLWebpackPlugin({
            filename: 'chatlist.html',
            template: './chatlist.html',
            chunks: ['chatlist']
        }),
        new HTMLWebpackPlugin({
            filename: 'chatpage.html',
            template: './chatpage.html',
            chunks: ['chatpage']
        })
    ]
};
