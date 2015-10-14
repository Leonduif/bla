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
		.pipe(gulp.dest(cssFolder));
});

gulp.task('dev', function(){
	gulp.watch(sassFiles, ['sass']);

	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});