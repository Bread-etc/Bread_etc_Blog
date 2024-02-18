import { http } from "../../utils/request";

// 发送 get 请求, 获得tag和alias对应的信息
export function getTagAlias() {
    return http.get<any>("/getTagList");
}