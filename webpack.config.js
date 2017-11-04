
var webpack = require('webpack');
var minimize = process.argv.indexOf('--minimize') !== -1;

module.exports = {
	
	entry: './src/dom3d.js',
	
	output: {
		filename: minimize ? 'dom3d.min.js' : 'dom3d.js',
		path: './dist'
	},
	
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'stage-0']
				}
			}
		],
	},
	
	plugins: minimize ? [
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false }
		})
	] : [],
	
	devtool: "source-map"
	
}
