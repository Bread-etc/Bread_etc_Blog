// 创建用户模型
import { defineStore } from 'pinia'
import { reactive, toRefs } from "vue"

// 定义状态的类型 一般情况下Pinia会自动推断出state的类型，你就无需定义接口。如果state的数据类型比较复杂，推荐你定义一个接口来描述state的类型
interface UserState {
    firstName: string
    lastName: string
}

const useUserStore = defineStore('user', () => {
    const state = reactive<UserState>({
        firstName: 'GG',
        lastName: 'Bond'
    })
    
    const fullName = (): string => state.firstName + ' ' + state.lastName
    
    return {
        ...toRefs(state),
        fullName
    }
})

export default useUserStore