module.exports = (ctx) => ({
    plugins: {
        'postcss-preset-env': {},
        'cssnano': ctx.env === 'production' ? {} : false,
        'autoprefixer': {}
    }
})