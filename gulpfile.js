const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('watch', function () {
    gulp.watch(['src/**/*.**'], ['es5', 'jsmin']);
});

gulp.task('es5', function () {
    gulp.src('src/**/*.js').pipe(babel()).pipe(gulp.dest('dist'));
});

gulp.task('jsmin', function () {
    gulp.src('src/**/*.js').pipe(babel()).pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('dist'));
});

gulp.task('default', ['es5', 'jsmin', 'watch']);
