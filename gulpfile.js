var gulp        = require('gulp');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();


// File & Folder locations
var sassFiles  = ['./assets/sass/**/*.scss', './assets/sass/main.scss'];
var cssFolder = './public/css';

gulp.task('sass', function(){
	gulp.src(sassFiles)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest(cssFolder))
		.pipe(browserSync.stream());
});

gulp.task('dev', ['sass'], function(){
	browserSync.init({
        server: './'
    });

	gulp.watch(sassFiles, ['sass']);
    gulp.watch('index.html').on('change', browserSync.reload);
});