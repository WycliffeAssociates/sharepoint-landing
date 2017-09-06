const gulp = require('gulp');
const minifyCSS = require('gulp-csso');
const mustache = require('gulp-mustache');
const getLinks = require('./script/contentful');

gulp.task('index', function(){
  const mustacheOptions = {
    extension: '.html'
  };

  getLinks()
    .then(links => {
      return gulp.src('src/index.mustache')
        .pipe(mustache({ links: links }, mustacheOptions))
        .pipe(gulp.dest('build'));
    });
});

gulp.task('css', function(){
  return gulp.src('src/style/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/style'));
});

gulp.task('image', function() {
  return gulp.src('src/img/*.*')
    .pipe(gulp.dest('build/img'));
});

gulp.task('default', [ 'index', 'css', 'image' ]);
