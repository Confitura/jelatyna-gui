var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();


gulp.task('clean', function () {
    return gulp.src('build', {read: false})
        .pipe(plugins.clean());
});

gulp.task('webpack', function () {
    return gulp.src('src/scripts/entry.js')
        .pipe(plugins.webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('jshint', function () {
    return gulp.src('src/scripts/**/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
});

gulp.task('inject', ['webpack'], function () {
    return gulp.src('src/index.html')
        .pipe(plugins.inject(gulp.src(['./build/js/**/*.js'], {read: false}), {ignorePath: '../build', relative: true}))
        .pipe(gulp.dest('./build'))
});

gulp.task('build', ['clean', 'less', 'js']);