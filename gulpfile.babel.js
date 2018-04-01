import gulp from 'gulp';
import responsive from 'gulp-responsive';

gulp.task('images-resize', function() {
    return gulp.src('./content/images/**/*.{png,jpg}')
    .pipe(responsive({
        '**/*.jpg': [{
            width: 800,
            rename: {suffix: '-800'},
        }, {
            width: 800 * 2,
            rename: {suffix: '-1600'},
        }, {
            width: 400,
            rename: {suffix: '-400'},
        }],
    }, {
        silent: true,
    }))
    .pipe(gulp.dest('./static/content/images')
)});

gulp.task('default', ['images-resize']);
