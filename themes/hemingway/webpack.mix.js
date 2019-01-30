let mix = require('laravel-mix');

mix.webpackConfig({ devtool: 'source-map' });

mix.options({
    publicPath: 'static',
    fileLoaderDirs: {
        fonts: 'fonts',
        images: 'img'
    },
    notifications: {
        onSuccess: false,
        onFailure: true
    }
});

mix.js('assets/js/app.js', 'static/js').sourceMaps();

mix.sass('assets/sass/app.scss', 'static/css')
    .options({
        postCss: [require('postcss-preset-env')()]
    })
    .sourceMaps();
