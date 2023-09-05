import { http } from '../../utils/request';

import type { blogListData } from './types'

export function getBlogList() {
    return http.get<blogListData>('/info/blogList')
}