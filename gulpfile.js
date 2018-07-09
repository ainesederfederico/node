const gulp = require('gulp');

var concat = require('gulp-concat');

function concat_js_libs () {
  return gulp.src(['./node_modules/jquery/dist/jquery.min.js',
      './node_modules/bootstrap/dist/js/bootstrap.min.js',
      './node_modules/moment/min/moment.min.js'
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/scripts/libs/'));
}

gulp.task('default',gulp.series(concat_js_libs));
