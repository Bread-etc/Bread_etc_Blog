import { http } from '../../utils/request'
import type { NotFoundMusic } from '../types'

export function getMusic() {
    return http.get<NotFoundMusic>('/notFoundMusic')
}