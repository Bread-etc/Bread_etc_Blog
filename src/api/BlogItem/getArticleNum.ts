import { http } from "../../utils/request";

// 发送 get 请求, 获取文章总数
export function getArticleNum() {
    return http.get<number>("/analytic/getArticle");
}