import { http } from "../../utils/request";

// 发送 get 请求, 获取天数
export function getDays() {
    return http.get<number>("/analytic/getDays");
}