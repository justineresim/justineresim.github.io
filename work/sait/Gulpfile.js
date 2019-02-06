var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
 

// Minify JS files
gulp.task('compressVendorJS', function() {
  gulp.src('js/vendor/*.js')
    .pipe(concat('vendor.js'))
    .pipe(minify())
    .pipe(gulp.dest('js/dest'))
});

gulp.task('compressScripts', function() {
  gulp.src('js/scripts.js')
    .pipe(minify())
    .pipe(gulp.dest('js/dest'))
});

gulp.task('compressApplyScript', function() {
  gulp.src('js/apply.js')
    .pipe(minify())
    .pipe(gulp.dest('js/dest'))
});

// Global/prototype styling
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


// Global Style Guide CSS
gulp.task('guidestyles', function() {
  return sass('styleguide/sass/screen.scss', { style: 'expanded' })
    .pipe(gulp.dest('./styleguide/css'))
});

gulp.task('guideautoprefixer', ['guidestyles'], function () {
    return gulp.src('styleguide/css/screen.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 4 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./styleguide/css/dest'))
});

gulp.task('guideminify', ['guideautoprefixer'], function () {
    return gulp.src('styleguide/css/dest/screen.css')
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest('./styleguide/css/dest'))
        
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['minify', 'guideminify']);
    gulp.watch('styleguide/sass/**/*.scss', ['guideminify']);
    gulp.watch('js/vendor/*.js', ['compressVendorJS']);
    gulp.watch('js/scripts.js', ['compressScripts']);
    gulp.watch('js/apply.js', ['compressApplyScript']);
});

gulp.task('default', ['watch']);


