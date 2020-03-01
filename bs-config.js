module.exports = {
    server: {
        baseDir: './dist',
        middleware: {
            1: require('connec-history-api-fallback')({index: '/index.html', verbose: true})
        }
    }
}