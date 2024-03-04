# 个人博客搭建

本项目是基于一个 Vue3 + Typescript + Vite 的个人博客，目前还在开发阶段,,,

## 更新日志

### 2023/08/06 更新
- 首次使用`vite`创建工作目录。
- 加入`vue-router`
- 加入`Element Plus`

### 2023/08/07 更新
- 创建`stores`目录
- 加入`Pinia`
- 使用`css modules`，防止命名重复
- 增加`global.less`全局变量

### 2023/08/08 更新
- 添加`Navigation`组件（需要解决居中问题）
- 添加配置环境变量
- 在`global.less`添加全局样式变量
- 移除`Element-Plus`

### 2023/08/09 更新
- 添加`Bootstrap`框架
- 使用行列栅格实现两栏布局
- 更改`study`路由页面

### 2023/08/10 更新
- 通过`navbar`完成移动端和PC端的导航栏样式适配
- 挖坑（深色模式/暗夜模式）

### 2023/08/11 更新
- 修改app主体为普通的container，不再采用流式容器
- 完成导航栏`hover`特效
- 引入`vue3typed`完成打字机特效
- 更改主页图片样式

### 2023/08/12 更新
- 增加主页按钮路由
- 使用`setup`语法糖(组合式API)
- 使用`blur`滤镜增加蒙版

### 2023/08/13 更新
- 完成主页卡片组件`HomeCards`
- 开创使用`emoji`先例
- logo改为`ggbond`
- 增加导航栏滚动栏查询特效

### 2023/08/14 更新
- 完成主页`Footer`组件
- 更改导航栏吸顶效果改为全局吸顶
- 更改`navbar`占位元素

### 2023/08/15 更新
- 完善`navbar`导航栏适配移动端下拉菜单
- 更新下拉菜单

### 2023/08/16 更新
- 完成移动端`dropdownMenu`下拉菜单动画效果
- 移除下拉菜单内边距`p-2`
- 动画效果使用`transition`元素包裹解决

### 2023/08/17 更新
- 开启学习页面`study`的编写工作
- 初步确定`study`页面左边部分布局
- 初步制作`MasterCard`结构

### 2023/08/18 更新
- 继续完善作者卡片结构
- 寻找更多灵感

### 2023/08/19 更新
- 完善`study`页面结构

### 2023/08/20 更新
- 增加`study`页面`POSTBlog`按钮
- 后续添加发布博客路由验证功能

### 2023/08/21 未更新
- 今日外出,暂缓一天

### 2023/08/22 更新
- 更新study面板
- 加入箭头`arrowhead`

### 2023/08/23 更新
- 使用`container-fluid`流式容器代替`container`从而改变导航栏的底部栏的长度
- 增加`mixin.scss`背景颜色变量

### 2023/08/24 更新
- 初步使用`pinia`加入深色模式
- 使用`pinia`存储模式信息
- 改用`vite-plugin-theme`加入深色模式

### 2023/08/25 更新
- 即将删除`bootstrap`框架
- 加入`Element Plus`

### 2023/08/26 更新
- 进行大面积重构`vite.base.config.ts/package.json/App.vue`

### 2023/08/27 更新
- 重构`Navigation.vue`组件
- 更新`ThemeSwitcher`组件并连接`pinia`

### 2023/08/28 更新
- **顶级更新:**加入`深色模式darkMode`

### 2023/08/29 更新
- 重构`home`组件,更改部分样式

### 2023/08/30 更新
- 修改`homeCard`组件

### 2023/08/31 更新
- 完成`homeCard`组件修改

### 2023/09/01 更新
- 完成`MasterCard`组件
- 加入link: github | gmail

### 2023/09/02 更新 (31)
- 完成`SortCard`和`WebInfo`组件,等待后端请求
- 加入`FastMock`模拟数据
- 使用`pinia-plugin-persist`来持久化存储pinia数据
- 更改组件文件目录

### 2023/09/03 更新 (32-33)
- 移除`presist`插件
- 使用`localstorage`持久化存储
- `ThemeSwitcher`组件修改完成
- 改动移动端深色模式Switcher位置

### 2023/09/04 更新 (34)
- 引入`axios`.封装axios中

### 2023/09/05 更新 (35)
- 初步基础封装`axios`的`request.ts`

### 2023/09/06 更新 (36)
- 添加`mockJS`代替`fastMock`以增加响应速度
- 处理导航栏localStorage问题

### 2023/09/07 更新 (37)
- 由于配置问题去除`vite-plugin-mock`以及`mock`
- 修改`study`页面三个card组件

### 2023/09/08 更新 (38)
- 增加换页组件`el-pagination`

### 2023/09/09 更新 (39)
- 完成换页组件`el-pagination`的制作
- 更新`fastmock`和`api`目录下`BlogItem.ts`的内容
- 初步完成换页组件

### 2023/09/10 更新 (40)
- 完成`MasterCard`和`SortCard`组件网络请求

### 2023/09/11 更新 (41)
- 初步添加`MainText`组件骨架屏
- 处理`study`路由移动端和PC端样式

### 2023/09/12 更新 (42)
- 增加骨架屏,调整左右布局宽度为三七开
- 骨架屏存留`白点bug`
- 移动端`刷新闪屏bug`

### 2023/09/13 更新 (43)
- 更新`Navigation`和`Essay`组件

### 2023/09/14 更新 (45)
- 骨架屏bug修复
- 更新骨架屏实现方式
- 初步制作`Contact`页面
- 增加`textarea`

### 2023/09/15 更新 (46)
- 微调评论区样式
- 开始后端制作

### 2023/09/16 更新 (47)
- 初步制作`about`页面
- 吃M记😋

### 2023/09/17 更新 (48)
- 完善`about`页面
- 关于后端`springboot`
- 修改部分dark和light模式样式

### 2023/09/23 更新 (49)
- 初步了解动态添加路由
- 加入markdown渲染插件`mavon editor`

### 2023/09/24 更新 (50)
- 移除`mavon-editor`,加入`vue3-markdown-it`
- 加入`getBlogInfo`接口

### 2023/09/26 更新 (51)
- 更新`/info/blogItem`接口,接入后端应用和数据库

### 2023/09/27 更新 (52)
- 修复发布时间显示问题

### 2023/09/29 更新 (53)
- 修改`WebInfo`接口类型

### 2023/09/30 更新 (54)
- 选用github oAuth2 登录

### 2023/10/01 更新 (55)
- 加入`gitalk`

### 2023/10/02 更新 (56)
- 摸鱼一天
- 改用`@giscus/vue`

### 2023/10/03 更新 (57)
- 加入github登录后评论功能
- 存留切换主题后评论模块不能自动切换主题的问题

### 2024/2/15 更新 (58)
- 完善404页面

### 2024/2/16 (59)
- 改用`naive-ui`
- 停用`element-plus`

### 2024/2/17 (60)
- 修复`giscus-widget`深色模式问题

### 2024/2/18 (61)
- 修改`n-pagination`和`n-skeleton`组件部分样式
- 修改`request.ts`

### 2024/2/19 (62)
- 修改`SortCard`组件
- add `getTagList.ts`
- 修改`home`和`Navigation`组件,优化体验
- 删除ggbond
- 修改`WebInfo`组件 (剩余getVisitors api未处理)

### 2024/2/20 (63)
- 彻底移除`element-plus`
- 修改`MainText`组件

### 2024/2/21 (64)
- 大部分完成(剩余访客)

### 2024/3/4 (65)
- 部署完成,开始优化工作