var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('less', function () {
    gulp.src('./css/*.less')
    .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css/'))
    .pipe(reload({ stream:true }));
});

gulp.task('reload', function(){
    browserSync.reload();
});

gulp.task('serve', ['less'], function() {
    browserSync({
        server: {
            baseDir: '.'
        }
    });

    gulp.watch('css/*.less', ['less', 'reload']);
    gulp.watch(['*.html', 'js/**/*.js'], {cwd:'.'}, reload);
});

gulp.task('default', ['serve']);