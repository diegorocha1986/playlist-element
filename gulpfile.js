var gulp 			  = require('gulp'),
	  browserSync = require('browser-sync'),
	  gutil 			= require('gulp-util');

gulp.task('sync', function() {
	browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sync']);

errorLog = function (err) {
	gutil.log('Arquivo: ' + err.fileName);
	gutil.log('Erro: ' + err.message);
};