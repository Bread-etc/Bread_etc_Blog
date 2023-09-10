
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

// 网站统计信息
export interface WebInfo {
  code: number,
  message: string,
  data: {
    文章数目: number,
    运行时间: string,
    总字数: string,
    访客数: number,
    总访问量: number,
    最后更新: string,
  }
}

interface SubItem {
  name: string,
  meta: {
    key: number,
    path: string,
  }
}

interface CategoryItem {
  name: string,
  meta: {
    key: number,
    path: string,
  },
  content: SubItem[]
}

// 文章和分类信息
export interface generalInfo {
  code: number,
  message: string,
  data: {
    articalNum: number,
    category: CategoryItem[]
  }
}
