import { http } from '../../utils/request'
import type { Text } from '../types'

export function getBlogText() {
    return http.post<Text>('/info/text')
}