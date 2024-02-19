import { http } from "../../utils/request";

// 发送 get 请求, 获取最后更新时间
export function getLastTime() {
    return http.get<Date>("/getLastTime");
}