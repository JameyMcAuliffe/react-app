//html-webpack-plugin creates a new html file after transformation
//returns a constructor function
let HTMLWebpackPlugin = require('html-webpack-plugin')
//needs to be exported below
let HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	//filepath to original html file
	template: __dirname + '/app/index.html',
	//name of new file after transformation
	filename: 'index.html',
	//where to inject script tag in new html file, 'head' or 'body'
	inject: 'body'
})

let nodeExternals = require('webpack-node-externals');


module.exports = {

	//entry point to the file with the outermost componenet class
	entry: __dirname + '/app/index.js',
	
	//loaders represent a transformation that code will go through before reaching the browser
	module: {
		loaders: [
			{
				//will perform a transformation on .js files
				test: /\.js$/,
				//exclude files you don't want transformed, include: files you do
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},

	//where transformed .js should go
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build'
		//transformed js is now saved to /build/transformed.js
	},

	//HTMLWebpackPlugin instance
	plugins: [HTMLWebpackPluginConfig],
	//externals: [nodeExternals()]
}
