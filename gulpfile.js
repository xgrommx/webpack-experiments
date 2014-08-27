var gulp = require('gulp');
var gulpWebpack = require('gulp-webpack');
var webpack = require('webpack');
var path = require('path');


gulp.task('default', function() {
	return gulp.src('src/main.js')
			.pipe(gulpWebpack({
				// cache: true,
				watch: false,
				debug: true,

				output: {
					filename: 'bundle.js'
				},
				devtool: "#inline-source-map",
				module: {
					loaders: [
						{ test: /angular.js$/, loader: "exports?angular"}
						// { test: /jquery.js$/, loader: "exports?window.jQuery"}
						// { test: /rx.all.js$/, loader: "exports?Rx" }
					]
				},
				resolve: {
					modulesDirectories: ["bower_components", "node_modules"],
					// extensions: [".js"],
					alias: {
						// Rx: 'rxjs/dist/rx.all.js',
						// 'angular': 'angular/angular.js',
						// 'jquery': 'jquery/dist/jquery.js',
						// 'angular-rx': 'angular-rx/rx.angular.js'
					}
				},
				plugins: [
					new webpack.ResolverPlugin(
						new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
					)
				]
			}))
			.pipe(gulp.dest('dist/'));
});