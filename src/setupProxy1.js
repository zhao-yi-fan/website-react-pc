const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api1', {
      target: 'http://localhost:3000',
      changeOrigin: true, // 控制服务器请求头host的值
      pathRewrite: { '^/api1': '' }
    }),
    proxy('/api2', {
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' }
    }),
  )

}