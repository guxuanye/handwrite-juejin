# 手写一个掘金客户端

## 该项目为字节校园前端中级项目——手写一个掘金客户端

### 技术栈
框架：React
语言：Typescript
CSS预处理器：Less
UI：Antd

### 项目架构

#### PageHome页面
    用于浏览文章列表

    顶部为导航栏、两个Tab；
    中间为List，在里面渲染每一条文章的简要信息
    底部为一个Tab，可以选择“热门、最新、历史记录”

    <Header />
    <TabField />
    <TabTech />
    <List />
        <Article />
    <TabType />

#### PageArticle页面
    用于浏览文章
    上半部分为导航栏
    下半部分为文章具体内容和评论区，评论区包括一级评论和二级评论
    <Header />
    <ViewArticle />
        <Author />
        <Comment />
            <CommentFirst />
            <CommentSecond />