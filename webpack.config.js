var webpack = require("webpack");
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: 'entry.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['./src/scripts/', 'node_modules', 'bower_components'],
        alias: {
            "ng": "angular/angular",
            "lodash": "lodash/index"


        }
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },  
            {
                test: /angular/,
                loader: 'exports?angular'
            },
            {
                test: /template.html$/,
                loader: 'ng-cache?prefix=[dir]'
            }
        ]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new ngAnnotatePlugin({
            add: true
        })

    ]
};