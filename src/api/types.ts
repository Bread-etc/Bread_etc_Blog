
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
  time: String,
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
    articleNum: number,
    uptime: string,
    totalWords: string,
    visitorsNum: number,
    totalPageViews: number,
    lastUpdate: string,
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


// 文章详细信息
export interface Text {
  blogId: number,
  text: string
}

// 404 页面接口
export interface NotFoundMusic {
  musicLink: string
}