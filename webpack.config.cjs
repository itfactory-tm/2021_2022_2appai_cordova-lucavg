const path = require('path')

module.exports = {
    mode: 'none',
    entry: path.resolve(__dirname, 'www') + '/js/app.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'www/js/'),
        filename: 'app.bundle.js',
    },
    node: {
        child_process: 'empty',
        fs: 'empty',
        crypto: 'empty',
        net: 'empty',
        tls: 'empty'
      },
    devtool: 'inline-source-map',
};