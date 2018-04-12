const gulp = require('gulp');
const webpack = require('webpack-stream');
gulp.task('default', function() {
  return gulp.src('front/index.js')
    .pipe(webpack({
      output: {
        filename: 'app.js',
      },
    }))
    .pipe(gulp.dest('public/js/'));
});
