module.exports = function(config) {
	config.set({
		reporters: ['spec'],
		singleRun : true,
		autoWatch : false,
		frameworks: ['mocha'],
		files: ['test/**/*.test.js'],
		browsers: ['PhantomJS'],
		phantomjsLauncher: {exitOnResourceError:true},
		preprocessors: {
			'test/**/*.test.js':['webpack']
		},
		webpack: {
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
				]
			}
		},
		webpackMiddleware: {
			stats: {
				chunks: false
			}
		}
	});
};
