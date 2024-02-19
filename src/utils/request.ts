import axios from "axios";
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useMessage } from "naive-ui";

// 创建axios实例
const service: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 一般请求拦截里面加token,用于后端的验证
        const token = localStorage.getItem('token') as string;
        if (token) {
            config.headers!.Authorization = token;
        }

        return config;
    },
    (error: AxiosError) => {
        const message = useMessage();
        message.error(error.message);
        return Promise.reject(error);
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        const { code, message, data } = response.data;

        // 根据自定义错误码判断请求是否成功
        if (code === 200) {
            return data;
        } else {
            // 处理业务错误
            message.error(message);
            return Promise.reject(new Error(message));
        }
    },
    (error: AxiosError) => {
        // 处理HTTP网络错误
        let result = '';
        // HTTP 状态码
        const status = error.response.status;
        switch(status) {
            case 400:
                result = "请求错误(400)";
                break;
            case 401:
                result = "token失效，请重新登录(401)";
                // 此处可用触发退出的action (清空storage并跳转登录页)
                break;
            case 403:
                result = "拒绝访问(403)";
                break;
            case 404:
                result = "请求资源不存在(404)";
                break;
            case 500:
                result = "服务端发生错误(500)";
                break;
            case 501:
                result = "服务未实现(501)";
                break;
            case 502:
                result = "网络错误(502)";
                break;
            case 503:
                result = "服务不可用(503)";
                break;
            case 504:
                result = "网络超时(504)";
                break;
            case 505:
                result = "HTTP版本不受支持(505)";
                break;
            default:
                result = `连接出错${status}!`;
        }
        const message = useMessage();
        message.error(result);
        return Promise.reject(error);
    }
)

// 导出封装的请求方法
export const http = {
    get<T=any>(url: string, config?: AxiosRequestConfig) : Promise<T> {
        return service.get(url, config);
    },

    post<T=any>(url: string, data?: object, config?: AxiosRequestConfig) : Promise<T> {
        return service.post(url, data, config);
    },

    put<T=any>(url: string, data?: object, config?: AxiosRequestConfig) : Promise<T> {
        return service.put(url, data, config);
    },

    delete<T=any>(url: string, config?: AxiosRequestConfig) : Promise<T> {
        return service.delete(url, config)
    }
}

export default service;
