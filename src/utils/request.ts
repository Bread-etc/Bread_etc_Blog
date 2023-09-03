import axios from "axios";

// 创建axios实例
const request = axios.create({
    baseURL: 'https://www.fastmock.site/mock/09d46f08fcc9e3aa7d20a714cb5fe876/info',
    timeout: 50000, // 请求超时时间为5秒
    withCredentials: true, // 异步请求携带cookie
    // headers: {
    //     // 设置后端需要的传参类型
    //     'Content-Type': 'application/json',
    //     'token': 'x-auth-token',
    //     'X-Requested-With': 'XMLHttpRequest',
    // }
})


// 请求拦截器
request.interceptors.request.use(
    config => {
        // 如果你要去localStor获取token,(如果你有)
        // let token = localStorage.getItem("x-auth-token");
        // if (token) {
                //添加请求头
                //config.headers["Authorization"]="Bearer "+ token
        return config
    },
    error => {
        // 对请求错误做出事情
        Promise.reject(error)
    }
)

// 响应拦截器
request.interceptors.response.use(
    response => {
        // 对响应数据做什么
        return response
    },
    error => {
        // 对响应错误做些什么
        return Promise.reject(error)
    }
)

export default request