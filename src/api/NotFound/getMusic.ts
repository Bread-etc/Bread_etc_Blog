import { http } from '../../utils/request'

export function getMusic() {
    return http.get<string>("/getSong");
}