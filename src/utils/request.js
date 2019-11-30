// 数据请求封装文件

import axios from 'axios'
import { Toast } from 'antd-mobile'
// axios.defaults.baseURL = 'https://api.example.com'; // baseURL  后端地址
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN; // 权限认证
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // 表示为post请求统一设置请求头
// axios.defaults.headers.post['Content-Type'] = 'application/json'; // 表示为post请求统一设置请求头


const request = ({
  url,
  params,
  headers,
  data,
  method = "GET" // get GET  Get
}) => { //参数就是axios的配置
  return new Promise((resolve,reject) => {
    switch ( method.toUpperCase() ) {
      case 'GET':
        // axios.get()
        axios({
          url,
          method,
          params
        }).then( res => resolve( res ))
          .catch( err => reject( err ))
        break;
      case 'POST':
        axios({
          url,
          method,
          data, 
          headers: {}
        }).then( res => resolve( res ))
          .catch( err => reject( err ))
        break;
    
      default:
        break;
    }

    // axios拦截器

    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      Toast.loading('Loading...', 1, () => {
        console.log('Load complete !!!');
      });
      return config;
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    });

    // 添加响应拦截器
    axios.interceptors.response.use(function (response) {
      // 对响应数据做点什么
      Toast.hide()
      return response;
    }, function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    });

  }) 
}

export default request