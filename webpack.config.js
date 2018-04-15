const webpack = require('webpack'); // 用于访问内置插件
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const config = {
	entry:['babel-polyfill','./src/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'my-Event-webpack.bundle.js',
    library: 'MyEvent',
    libraryTarget: "var"
	},
	module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.js$/, use: 'babel-loader'}
    ]
  },
  // devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  	// new UglifyJsPlugin({
  	// 	sourceMap: true,
  	// 	uglifyOptions: {
  	// 		compress: false
  	// 	}
  	// }),
    // new webpack.optimize.UglifyJsPlugin()
  	// new webpack.LoaderOptionsPlugin({
	  //   minimize: false
	  // })
  ]
}

module.exports = config;