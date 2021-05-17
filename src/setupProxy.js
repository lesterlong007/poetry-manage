/**
 * @Author lester
 * @Date 2021-05-09
 */

const { createProxyMiddleware  } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    '/api/admin',
    createProxyMiddleware({
      // target: "https://admin.tonyou.vip/",
      target: "http://8.134.57.112:80/",
      changeOrigin: true
    })
  );
};
