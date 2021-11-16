const path = require('path')

module.exports = {
    entry:{
        main: path.resolve(__dirname, 'www/js/app.js'),
    },

    output: {
        path: path.resolve(__dirname, 'www/js/'),
        filename: 'main.js',
    },
};