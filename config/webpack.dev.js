const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');

const root = __dirname + '/..';

module.exports = {
	entry: [
		'babel-polyfill',

		'react-hot-loader/patch',
		// activate HMR for React

		'webpack-dev-server/client?http://0.0.0.0:3002',
		// bundle the client for webpack-dev-server
		// and connect to the provided endpoint

		'webpack/hot/only-dev-server',
		// bundle the client for hot reloading
		// only- means to only hot reload for successful updates


		'./app/index.js'
	],

	output: {
		filename: 'bundle.js',
		path: root + '/public',
		publicPath: '/static/'
	},

	resolve: {
		alias: {
			containers: path.resolve(__dirname, '../app/containers/'),
			common: path.resolve(__dirname, '../app/common/'),
			sass: path.resolve(__dirname, '../sass/'),
		}
	},

	module: {
		rules: [
			// {
			// 	enforce: "pre",
			// 	test: /\.js$/,
			// 	exclude: /node_modules/,
			// 	loader: "eslint-loader",
			// 	options: {
			// 		formatter: eslintFormatter,
			// 	},
			// },
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader" // creates style nodes from JS strings
					},
					{
						loader: "css-loader" // translates CSS into CommonJS
					},
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader" // creates style nodes from JS strings
					},
					{
						loader: "css-loader" // translates CSS into CommonJS
					},
					{
						loader: "sass-loader" // compiles Sass to CSS
					},
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: "file-loader?name=./assets/img/[name].[ext]"
			},
			{
				test: /\.(woff|woff2|ttf|eot)$/i,
				loader: "file-loader?name=./assets/fonts/[name].[ext]"
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),

		new webpack.HotModuleReplacementPlugin(),
		// enable HMR globally

		new webpack.NamedModulesPlugin(),
		// prints more readable module names in the browser console on HMR updates

		new webpack.NoEmitOnErrorsPlugin(),
		// do not emit compiled assets that include errors
	],

	devServer: {
		historyApiFallback: true,
        compress: true,
		contentBase: root + '/public',
		port: 3002,
		host: '0.0.0.0',
		hot: true,
		disableHostCheck: true,
		watchOptions: {
			ignored: /node_modules/,
		},
		historyApiFallback: {
			index: '/'
		},
	},
};