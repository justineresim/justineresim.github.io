var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var minify = require('gulp-minify');
var ngAnnotate = require('gulp-ng-annotate');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');

// Scripts
gulp.task('scripts', function() {
  return gulp.src(['js/angularApp.js', 'js/controllers/home.js', 'js/controllers/work.js', 'js/controllers/contact.js', 'js/controllers/styles.js', 'vendor/fancyBox/source/jquery.fancybox.pack.min.js', 'js/scripts.js'])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(minify())
    .pipe(gulp.dest('js/min'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Styles
gulp.task('styles', function() {
  return sass('sass/screen.scss', { style: 'expanded' })
    .pipe(gulp.dest('css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Styles task complete' }));
});


gulp.task('watch', function() {
    gulp.watch('js/*.js', 'js/controllers/*.js', ['scripts']);
    gulp.watch('/sass/**/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);

