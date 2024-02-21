import { http } from '../../utils/request';
import type { BlogListResponse } from '../types'

// 发送 post 请求, 获取对应页数的博客内容
export function getBlogItems( query: number ) {
    return http.post<BlogListResponse>('/info/blogItem', { "currentPage": query })
}