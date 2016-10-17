var
  gulp         = require('gulp'),
  uglify       = require('gulp-uglify'),
  cssmin       = require('gulp-minify-css'),
  htmlmin      = require('gulp-htmlmin'),
  minifyInline = require('gulp-minify-inline'),
  imagemin     = require('gulp-imagemin');

//JS压缩
gulp.task('uglify', function () {
  return gulp.src('././public/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('././public/'));
});
//CSS压缩
gulp.task('cssmin', function () {
  return gulp.src('././public/**/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('././public/'));
});
//图片压缩
gulp.task('images', function () {
  gulp.src('././public/*.*')
    .pipe(imagemin({
      progressive: false
    }))
    .pipe(gulp.dest('././public/'));
});

//html压缩
gulp.task('htmlmin', function () {
  return gulp.src('././public/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(minifyInline())
    .pipe(gulp.dest('././public/'));
})

gulp.task('build', ['uglify', 'cssmin', 'images', 'htmlmin']);
