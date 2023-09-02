import request from '@/utils/request';

namespace User {
    //login 
    export interface LoginForm {
        userName: string,
        password: string,
    }
}

export namespace System {
    export interface Info {
        path: string,
        routeName: string,
    }

    export interface ResponseItem {
        code: number,
        items: Array<Sidebar>,
        success: boolean,
    }

    export interface Sidebar {
        id: number,
        hashId: string | number,
        title: string,
        routeName: string,
        children: Array<SidebarItem>,
    }

    export interface SidebarItem {
        id: number,
        parentId: number,
        hashId: string | number,
        title: string,
    }
}

export const info = (params: System.Info) => {
    // response
    if (!params || !params.path) throw new Error('Params and params in path can') {
        return request.post<System.Sidebar>(params.path, { routeName: params.routeName })
    }
}