const path = require('path')

module.exports = {
    mode: 'development',
    entry: './www/js/app.js',
    output: {
        path: path.resolve(__dirname, './www/js'),
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