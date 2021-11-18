const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: '/www/js/app.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'www/js'),
    },
    module: {
        rules: [{
            test: /\.txt$/,
            use: 'raw-loader',
            test: /\.(png|jpe?g|gif)$/i,
            use: [{
                loader: 'file-loader',
            }, ],
        }],
    },
    plugins: [
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    externals: {
        "jquery": "jQuery"
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
        },
        modules: [
            path.join(__dirname, "js/helpers"),
            "node_modules"
        ]

    },
};
