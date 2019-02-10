const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './public/');
const APP_DIR = path.resolve(__dirname, './src/');
const JS_PUBLIC_PATH = '/js/';

module.exports = {
    entry: path.resolve(APP_DIR, 'index.tsx'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(BUILD_DIR, './js/'),
        publicPath: JS_PUBLIC_PATH
    },
    resolve: {
        modules: [APP_DIR, path.resolve(__dirname, './node_modules')],
        extensions: ['.js', '.json', '.ts', '.tsx', '.pcss']
    },
    devtool: 'source-map',
    stats: 'errors-only',
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            use: [{
                loader: 'ts-loader'
            }]
        }, {
            test: /\.svg$/,
            loader: 'raw-loader'
        }]
    },
    watchOptions: {
        poll: 1000
    },
    devServer: {
        contentBase: BUILD_DIR,
        publicPath: JS_PUBLIC_PATH,
        port: 3000,
        historyApiFallback: true,
    }
};
