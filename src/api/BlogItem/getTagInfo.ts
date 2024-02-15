import { http } from "../../utils/request";
import type { tagInfo } from "../types";

// 发送 get 请求,获取 tag 分类及其数量
export function getTagInfo() {
    return http.get<tagInfo[]>("/analytic/getTag");
}