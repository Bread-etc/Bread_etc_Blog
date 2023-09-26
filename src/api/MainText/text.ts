import { http } from '../../utils/request'
import type { Text } from '../types'

export function getBlogText( query: number ) {
    return http.post<Text>('/info/text', { "blogId": query })
}