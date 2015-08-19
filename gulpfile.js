var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('scripts', function(){
  return gulp.src([
    'app/bower_components/angular/angular.js',
    'app/bower_components/angular-route/angular-route.js',
    'app/bower_components/ngmap/build/scripts/ng-map.js',
    'app/app.js',
    'app/components/**/*.js'
    ])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('app/dist/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/dist/'))
});

gulp.task('default', function(){
  gulp.watch("app/components/**/*.js", ['scripts']);
});