/* 配置反向代理 */

const proxy = require('http-proxy-middleware') // 引入中间件

module.exports = function ( app ) {
  /* 
    * app.use(proxy(标识符,反向代理配置))
      * 标识符选取域名后第一个路径 
        *  比如： http://m.maoyan.com/ajax/movieOnInfoList?token=          /ajax
        *  比如： http://www.qinqin.net/index.php?r=class/category&type=1   /index.php
  */
  app.use(proxy( // 猫眼的配置
    '/ajax',{
      target: 'http://m.maoyan.com', // 
      changeOrigin: true//使用我们当前的http://localhost:3000来代替目标源
    }
  ))

  app.use(proxy(
    '/index.php',{
      target: 'http://www.qinqin.net',
      changeOrigin: true 
    }
  ))
}