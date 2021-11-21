const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', '/www/js/app.js'],
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'www/outputdir'),
    },
    devtool: "source-map",
    module: {
        rules: [{
                test: /\.txt$/,
                use: 'raw-loader',
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '/public/icons/[name].[ext]'
                },
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ],

    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: 'www/index.html',
        }),
    ],
    externals: {
        "jquery": "jQuery",

    },
    resolve: {
        fallback: {
            assert: require.resolve('assert'),
            buffer: require.resolve('buffer'),
            console: require.resolve('console-browserify'),
            constants: require.resolve('constants-browserify'),
            crypto: require.resolve('crypto-browserify'),
            domain: require.resolve('domain-browser'),
            events: require.resolve('events'),
            fs: false,
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            path: require.resolve('path-browserify'),
            punycode: require.resolve('punycode'),
            process: require.resolve('process/browser'),
            querystring: require.resolve('querystring-es3'),
            stream: require.resolve('stream-browserify'),
            string_decoder: require.resolve('string_decoder'),
            sys: require.resolve('util'),
            timers: require.resolve('timers-browserify'),
            tls: false,
            tty: require.resolve('tty-browserify'),
            url: require.resolve('url'),
            util: require.resolve('util'),
            vm: require.resolve('vm-browserify'),
            zlib: require.resolve('browserify-zlib'),
            child_process: false,
            buffer: require.resolve("buffer"),
        },
        modules: [
            path.join(__dirname, "js/helpers"),
            "node_modules"
        ],

    },
};
