var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var plugins = require('gulp-load-plugins')();
var karma = require('karma').server;
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var argv = require('minimist')(process.argv.slice(2));
if (argv.production) { // --production
    webpackConfig.plugins = webpackConfig.plugins.concat([new webpack.optimize.UglifyJsPlugin()])
}


gulp.task('clean', function (cb) {
    del(['build'], cb);
});

gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('webpack', function () {
    return gulp.src('src/scripts/entry.js')
        .pipe(plugins.webpack(webpackConfig, webpack))
        .pipe(gulp.dest('build/js/'));
});

//gulp.task('watch', ['inject'], function () {
//    gulp.watch('src/**/*', ['inject']);
//});

gulp.task('watch', ['clean', 'copy'], function () {
    //var fs = require('fs');
    //var flo = require('fb-flo');
    //flo('./build/', {
    //    port: 8888,
    //    host: 'localhost',
    //    verbose: false,
    //    glob: ['**/*.js', '*.html']
    //}, function (filepath, callback) {
    //    return callback({
    //        resourceURL: filepath,
    //        contents: fs.readFileSync('./build/' + filepath),
    //        reload: true
    //    });
    //});

    webpackConfig.watch = true;
    gulp.start('webpack');
    return gulp.watch('./src/index.html', ['copy']);
});

gulp.task('jshint', function () {
    return gulp.src('src/scripts/**/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
});

gulp.task('copy', function () {
    return gulp.src('src/index.html')
        .pipe(plugins.changed('./build'))
        .pipe(gulp.dest('./build'))
});

gulp.task('build', ['clean', 'test', 'inject']);