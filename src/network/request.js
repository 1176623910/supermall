import axios from 'axios'
export function request(config) {
    // 1.创建axios的实例
    const instance= axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    // 2.拦截
    instance.interceptors.request.use(config => {
      // config中的信息不符合要求

      // 每次发送请求超时的时候都希望在界面中显示一个请求的图标

      // 某些网络请求（比如登录token） 必须携带
      return config
    },err => {
       //console.log(err)
     })

    // 响应拦截
    instance.interceptors.response.use(res => {
      return res.data
    },err => {
      //console.log(err)
    })

    // 3.发送真正的网络请求
   return instance(config)
}
