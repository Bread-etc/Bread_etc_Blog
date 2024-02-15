// 通用参数类型
export type Result<T> = {
  code: number,
  message: string,
  data: T
}

// 单篇博客信息
export interface BlogItem {
  code: number;
  message: string;
  data: {
    // No
    id: number;
    // 文章简介 (可有可无)
    content?: string;
    // tag (标签)
    tag: string;
    // title (标题)
    title: string;
    // img (封面)
    image?: string;
    // alias (文件名)
    alias: string;
    // time (发布时间)
    time?: Date;
  };
}


// 博客信息参数类型
export interface BlogListResponse {
  code: number,
  message: string,
  data: {
    // 当前页数
    currentPage: number,
    // 页数大小
    pageSize: number,
    // 博客总数
    totalCount: number,
    // 对应博客列表
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

// 文章和分类信息
interface tagCount {
  tag: string,
  count: number
}

export interface tagInfo {
  code: number,
  message: string,
  data: tagCount[]
}

// 文章详细信息
export interface Text {
  blogId: number,
  text: string
}
