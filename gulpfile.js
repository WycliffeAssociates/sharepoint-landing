var gulp = require('gulp');
// var pug = require('gulp-pug');
// var less = require('gulp-less');
var minifyCSS = require('gulp-csso');

gulp.task('index', function(){
  return gulp.src('src/index.html')
    // .pipe(pug())
    .pipe(gulp.dest('build'))
});

gulp.task('css', function(){
  return gulp.src('src/style/*.css')
    // .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});

gulp.task('default', [ 'index', 'css' ]);
