const gulp = require('gulp');
const {src, dest} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//sass source directory
const styleSRC = './src/sass/**/*.scss';
//destination folder
const destSRC = './dist/css/';

//function to compile sass files into css in a specific directory
function writeCss(){
    //read files
    return src(styleSRC)
    //pass files through sass compiler
    .pipe(sass().on('error', sass.logError))
    //write compiled files to css folder
    .pipe(dest(destSRC))
    //stream changes to all browsers
    .pipe(browserSync.stream())
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(styleSRC, writeCss)
    gulp.watch('./*.html').on('change', browserSync.reload)
    gulp.watch('./*.js').on('change', browserSync.reload)
}

exports.style = writeCss
exports.watch = watch