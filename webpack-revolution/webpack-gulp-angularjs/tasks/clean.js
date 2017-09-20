/** Created by CUIJA on 05-19-2017.*/

var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var sequence = require('gulp-sequence');
var gutil = require('gulp-util');

var baseConfig = require('./config/base.config');

///删除文件夹【先执行 clean:build这个子task ，同时clean:dist 也执行】
gulp.task('clean', sequence(['clean:build', 'clean:dist']));


gulp.task('clean:build', function () {
  gutil.log('Deleting build folder');
  return gulp.src(baseConfig.dir.build)
    .pipe(rimraf());
});


gulp.task('clean:dist', function () {
  gutil.log('Deleting dist folder');
  return gulp.src(baseConfig.dir.dist)
    .pipe(rimraf());
});
