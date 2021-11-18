const path = require('path')

/*module.exports = {
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
    browser: {
        "fs": false,
        "path": false,
        "os": false
    }
    devtool: 'inline-source-map',
};*/

module.exports = {
    entry: './www/app.js',
    target: 'node',
    output: {
        path: path.join(__dirname, './www/js/'),
        filename: 'app.bundle.js'
    }
}