import { MockMethod, MockConfig } from "vite-plugin-mock";

const mock: Array<MockMethod> = [
    {
        url: 'info/blogList',
        method: 'get',
        response: () => {
            return {
                status: 200,
                message: 'success',
                // data: [{
                //     "id": '@increment(1)',
                //     "title": '@ctitle()',
                //     "content": '@cparagraph()'
                // }] 
                data: 'hello,world'
            }
        }
    }
]

export default mock