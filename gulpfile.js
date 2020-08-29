'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var sourcemap = require("gulp-sourcemaps");

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('source/sass/style.scss')
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('source/css'));
});

gulp.task("start", gulp.series("sass"));