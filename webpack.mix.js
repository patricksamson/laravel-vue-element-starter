let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// You can comment this out if you do not need to analyse the compiled bundles
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
mix.webpackConfig({
  plugins: [
     new BundleAnalyzerPlugin(),
  ]
});

mix.js('resources/assets/js/app.js', 'public/js')
    .extract(['axios', 'vue']) // Do not extract 'element-ui', or the tree-shaking will be disabled!
    .sass('resources/assets/sass/app.scss', 'public/css')
    .disableNotifications();
