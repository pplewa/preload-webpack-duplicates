const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports =  {
    entry: './app/entry',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new HtmlWebpackPlugin({ filename: './file-1.html' }),
        new HtmlWebpackPlugin({ filename: './file-2.html' }),
        new PreloadWebpackPlugin({ rel: 'prefetch', as: 'script' })
    ]
};
