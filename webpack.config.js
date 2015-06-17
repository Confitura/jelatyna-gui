var webpack = require("webpack");
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
	entry: 'entry.js',
	output: {
		publicPath: 'js/',
		filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['./src/scripts/', 'node_modules', 'bower_components'],
		extensions: ['', '.webpack.js', '.web.js', '.js', '.less'],
		alias: {
			"ng": "angular/angular",
			"lodash": "lodash/index"
		}
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: 'typescript-loader'
			},
			{
				test: /\.less$/,
				loader: 'style!css!autoprefixer!less'
			},
			{
				test: /\.css$/,
				loader: 'style!raw'
			},
			{
				test: /angular/,
				loader: 'exports?angular'
			},
			{
				test: /\.html$/,
				loader: 'html'
			},
			{
				test: /\.png$/,
				loader: 'file'
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&minetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
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

	],
	devServer: {
		contentBase: "./build",
		hot: true,
		inline: true,
		stats: {colors: true},
		port: 9090
	}
};