var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var minify = require('gulp-minify');
var ngAnnotate = require('gulp-ng-annotate');

// Scripts
gulp.task('scripts', function() {
  return gulp.src(['js/angularApp.js', 'js/controllers/home.js', 'js/controllers/work.js', 'js/controllers/contact.js', 'js/controllers/styles.js', 'vendor/fancyBox/source/jquery.fancybox.pack.min.js', 'js/scripts.js'])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(minify())
    .pipe(gulp.dest('js/min'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);

