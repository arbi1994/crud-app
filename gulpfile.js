const gulp = require('gulp');
const {src, dest} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//function to compile sass files into css in a specific directory
function writeCss(){
    //read files
    return src('./sass/**/*.scss')
    //pass read files through sass compiler
    .pipe(sass().on('error', sass.logError))
    //write compiled files to css folder
    .pipe(dest('./css'))
    //stram changes to all browsers
    .pipe(browserSync.stream())
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./sass/**/*.scss', writeCss)
    gulp.watch('./*.html').on('change', browserSync.reload)
    gulp.watch('./*.js').on('change', browserSync.reload)
}

exports.style = writeCss
exports.watch = watch