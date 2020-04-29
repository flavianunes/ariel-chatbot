const { src, dest, watch, series, parallel } = require ('gulp');
const sass = require('gulp-sass')
const minifyCss = require('gulp-csso');
const concat = require('gulp-concat');
const minifyJs = require('gulp-minify');

const files = {
    scssPath: 'src/scss/*.scss',
    jsPath: 'src/js/*.js',
    html: 'src/html/*.html',
    svg: 'src/svg/*.*'
}

function cssTask() {
    return src(files.scssPath)
        .pipe(sass())
        .pipe(concat('main.css'))        
        .pipe(minifyCss())
        .pipe(dest('dist/css'))
}


function jsTask() {
    return src(files.jsPath)
    .pipe(concat('main.js'))
    .pipe(dest('dist/js'))
}

function htmlTask() {
    return src(files.html)
    .pipe(dest('dist'))
}


function svgTask() {
    return src(files.svg)
    .pipe(dest('dist/img'))
}

function watchTask() {
    watch([files.scssPath, files.jsPath],
        parallel(cssTask, jsTask, htmlTask, svgTask));
}

exports.default = series(
    parallel(cssTask),
    parallel(jsTask),
    parallel(htmlTask),
    parallel(svgTask),
    watchTask 
)