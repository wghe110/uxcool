var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    less = require('gulp-less'),
    path = require('path'),
    autoprefix  = require('gulp-autoprefixer');

gulp.task('default', function(){
    //server
	browserSync({
		files: '',
		browser: '',
		server: {
			baseDir: './'
		},
		startPath: './',
		open: 'external'
	});

	//less to css
    gulp.watch('./src/**/*.less', function(){
		gulp.src('./src/less/uxcool.less')
		.pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
		.pipe(autoprefix())
		.pipe(gulp.dest('./dist/css/'));
	})

	//watch css change reload
    gulp.watch('./dist/css/uxcool.css', reload)
})
