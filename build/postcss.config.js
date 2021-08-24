'use strict'

module.exports = ctx => {
    return {
        map: {
            inline: false,
            annotation: true,
            sourcesContent: true
        },
        plugins: {
            'postcss-flexbugs-fixes': {},
            'postcss-calc': {},
            autoprefixer: {
                cascade: true
            },
            rtlcss: ctx.env === 'RTL' ? {} : false
        }
    }
}
