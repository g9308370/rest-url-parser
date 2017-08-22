var mixLib = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Manage javascripts
 |--------------------------------------------------------------------------
 */


// build dropzone and RestUrl to single js
mixLib.webpackConfig({
    output: {
        library: 'RestUrlParser',
        libraryTarget: 'umd'
    }
});
mixLib.js('src/RestUrlParser.js', 'dist/RestUrlParser.js');


