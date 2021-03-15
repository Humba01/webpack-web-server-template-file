/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
var gulp = require('gulp'),
    devServer = require('gulp-devserver')

gulp.task('server', function() {

  gulp.src('./public')
  .pipe(devServer({
      livereload: {
        clientConsole: true
      },
      proxy: {
        enable: true,
      }
    })
  );

});
