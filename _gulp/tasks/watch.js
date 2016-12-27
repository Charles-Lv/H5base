var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var less = require('gulp-less');
// var cssmin=require("gulp-minify-css")

gulp.task('browser-sync', function() {
    browserSync({
        files: "**",
        server: {
            baseDir: "./"
        }
    });
});
gulp.task("lessc",function(){
    gulp.src(['src/less/*.less'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('css'));
});

// gulp.task('watch', ['lessc',"browser-sync"]);
gulp.task("dev",['browser-sync'],function (argument) {
    gulp.watch('src/**/*.less', ['lessc']).on('change', reload);
})
