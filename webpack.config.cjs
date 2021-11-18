const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: '/www/js/app.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'www/js'),
    },
    module: {
        rules: [
            {test: /\.txt$/, use: 'raw-loader'}
        ]
    }
};
