import { http } from '../../utils/request';

import type { BlogListResponse } from '../types'

export function getBlogInfo( query: number ) {
    return http.post<BlogListResponse>('/info/blogItem', { "currentPage": query })
}