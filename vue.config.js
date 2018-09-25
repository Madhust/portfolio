module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
    configureWebpack: {
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
      }
    }
}