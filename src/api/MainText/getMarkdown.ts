import { http } from "../../utils/request";

// 发送 post 请求, 获取具体某一篇文章的内容
export function getMarkdown(query: string) {
    return http.post<string>("/getMarkdown", { "alias": query });
}