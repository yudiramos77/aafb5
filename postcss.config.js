module.exports = {
    syntax: 'postcss-scss',
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        }),
        require('@fullhuman/postcss-purgecss')({
            content: ['_site/**/*.html']
        }),
    ],
};