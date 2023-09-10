import { http } from '../../utils/request'
import type { WebInfo } from '../types'

export function getWebInfo() {
    return http.get<WebInfo>('/info/webInfo')
} 