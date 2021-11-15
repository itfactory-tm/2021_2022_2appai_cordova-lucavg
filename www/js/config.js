const { require } = require("cordova");

requirejs.config({
    baseUrl: 'js',
    paths: {
        civicrm: 'civicrm'
    }
});