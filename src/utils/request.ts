import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse, Axios } from "axios";
import { ElMessage, ElLoading, ElMessageBox } from "element-plus";

// response interface { code, msg, success }
// 不含data
interface Result {
    code: number,
    success: boolean,
    msg: string
}

// request interface 含data
interface ResultData<T = any> extends Result {
    data?: T
}

enum RequestEnums {
    TIMEOUT = 5000, // 请求超时时间
    FAIL = 500, // 服务器异常
    LOGINTIMEOUT = 401, // 登录超时
    SUCCESS = 200, // 请求成功
}

// axios基础配置
const config = {
    baseURL: 'localhost:3030' as string,
    timeout: RequestEnums.TIMEOUT as number,
    withCredentials: true, // 跨域的时候允许携带凭证
}

class Request {
    service: AxiosInstance;

    constructor (config: AxiosRequestConfig) {
        // 实例化service
        this.service = axios.create(config);

        // 请求拦截器 request <- { 请求拦截器 } <- server
        this.service.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                const token = localStorage.getItem('token') ?? '';
                return {
                    ...config,
                    headers: {
                        'customToken': "customBearer" + token
                    }
                }
            },
            (error: AxiosError) => {
                // 请求报错
                Promise.reject(error)
            }
        );

        // 响应拦截器 response -> { 响应拦截器 } -> client
        this.service.interceptors.response.use(
            (response: AxiosResponse) => {
                const { data, config } = response;
                if (data.code === RequestEnums.LOGINTIMEOUT) {
                    ElMessageBox.alert('Session expired', 'System info', {
                        confirmButtonText: 'Relogin',
                        type: 'warning'
                    }).then(() => {
                        // 或者调用 logout 方法处理
                        localStorage.setItem('token', '');
                        location.href = '/'
                    })
                }
                if (data.code && data.code !== RequestEnums.SUCCESS) {
                    ElMessage.error(data);
                    return Promise.reject(data);
                }
                return data
            },
            (error: AxiosError) => {
                const { response } = error;
                if (response) {
                    this.handleCode(response.status);
                }
                if (!window.navigator.onLine) {
                    ElMessage.error("网络连接失败,请检查网络");
                    // 可重定向去404
                }
            }
        )
    }

    public handleCode = (code: number): void => {
        switch (code) {
            case 401:
                ElMessage.error("登录失败,请重新登录");
                break;
            case 500:
                ElMessage.error("请求异常,请联系网站管理员");
                break;
            default:
                ElMessage.error("请求失败");
                break;
        }
    }

    // 通用方法封装
    get<T>(url: string, params?: Object): Promise<ResultData<T>> {
        return this.service.get(url, { params });
    }
    post<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.service.post(url, params);
    }
    put<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.service.put(url, params);
    }
    delete<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.service.delete(url, { params });
    }
}

export default new Request(config);