// vue.config.js
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/': {
        target: 'http://www.yufang.fun:8089/',
        changeOrigin: true
      }
    }
  }
}
