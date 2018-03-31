// 1. Take images from images/* , create sizes and move them to static/uploads/images
// 2. Do some image compressions and optimisations on images in static/uploads/images/**/*
// 3. Make a shortcode which will translate images with src into a srcset with lazy loading
// 4. Add lazy loading script so that images not quite in view are not loaded yet.


import gulp from 'gulp';
import responsive from 'gulp-responsive';

gulp.task('images-resize', function() {
    return gulp.src('./images/**/*.{png,jpg}')
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
    .pipe(gulp.dest('./static/uploads/images')
)});

gulp.task('default', ['images-resize']);
