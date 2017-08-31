var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('default', function(){
    gutil.log('Hello world!');
});

gulp.task('fug',["default"], function(){
    gutil.log('next');
});

