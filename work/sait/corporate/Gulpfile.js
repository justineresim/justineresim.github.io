var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
 

// New styling for corporate engagement
gulp.task('styles', function() {
  return sass('sass/screen.scss', { style: 'expanded' })
    .pipe(gulp.dest('css'))
});

gulp.task('autoprefixer', ['styles'], function () {
    return gulp.src('css/screen.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 4 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css/dest'))
});

gulp.task('minify', ['autoprefixer'], function () {
    return gulp.src('css/dest/screen.css')
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest('./css/dest')) 
});


gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['minify']);
});

gulp.task('default', ['watch']);


