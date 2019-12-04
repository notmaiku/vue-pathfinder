module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: '@import "@/assets/s/main.scss";'
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-pathfinder/'
    : '/'
}