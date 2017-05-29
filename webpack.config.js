/**
 * Created by ndyumin on 29.05.2017.
 */
const Webpack = require('webpack');
const path = require('path');

const {NODE_ENV} = process.env;

const plugins = NODE_ENV === 'production' ? [
    new Webpack.optimize.UglifyJsPlugin({
        compress: {
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            screw_ie8: true,
            warnings: false
        }
    })
] : [];

const suffix = NODE_ENV === 'production' ? '.min' : '';
const filename  = `redux-command${suffix}.js`;

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename,
        library: 'ReduxCommand',
        libraryTarget: 'umd',
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    plugins
};