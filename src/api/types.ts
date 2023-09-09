
// 通用参数类型
export type Result<T> = {
  code: number,
  message: string,
  data: T
}

// 单篇博客信息
export interface BlogItem {
  id: string,
  title: string,
  content: string,
  image: string,
  category: string,
}


// 博客信息参数类型
export interface BlogListResponse {
  code: number,
  message: string,
  data: {
    currentPage: number,
    pageSize: number,
    totalCount: number,
    list: BlogItem[]
  }
}
