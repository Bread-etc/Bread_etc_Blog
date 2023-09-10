import { http } from '../../utils/request'
import type { generalInfo } from '../types'

export function getGeneralInfo() {
    return http.get<generalInfo>('/info/general')
}