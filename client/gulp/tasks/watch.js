const gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync');

gulp.task('watch', function () {

browserSync.init({
    notify: false,
    server: {
    baseDir: "src"
    }
});

watch('.src/**/*.js', function(){
    browserSync.reload();
});

});