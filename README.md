# vuepress-template

[toc]

基于 [vuepress](https://vuepress.vuejs.org/zh/) 创建的模板，用于快速创建自己的技术博客，学习笔记，或者自己写的某个库的文档。

模板主要做的事：

1. 根据文件和目录的组织结构来自动生成导航栏和侧边栏；
2. 配置了 eslint, markdownlint, stylelint 等规范检查工具

模板会有一些特有的约定，但是相较于每次增删改一个文件或目录时，都要手动去修改导航栏配置或侧边栏配置数据时，省去了这些麻烦的事情，好让我们只需要关注在写作上面即可，写完文章后不需要做什么即可拥有对应的导航栏和侧边栏。

> VuePress 由两部分组成：第一部分是一个极简静态网站生成器 (opens new window)，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。
>
>每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

## 开始使用

```bash
# 先在远程创建一个自己项目的空的代码仓库，然后将它克隆到本地电脑上。
# 克隆自己的代码仓库到电脑本地
git clone https://github.com/xxx/xxx.git

# 进入项目目录
cd xxx

# 关联本仓库 uniapp-vant-template 到自己的项目
# 实际上就是添加一个远程仓库，将这个远程命名为 temp
git remote add temp https://github.com/drylint/vuepress-template.git

# 从本模板拉取代码到自己的项目，以后有更新时也执行此命令拉取所有更新
git pull temp master

# 安装依赖
npm install

# 运行项目 (开发时使用)
npm run serve

# 打包项目 (发布时使用)
npm run build

# 开发一些功能后，推送到自己的仓库
git push
```

开始写一些东西：

1. `docs` 目录下的所有文件和目录，除了 `.vuepress` 以外，其他的可以全部删除。
2. 在 `docs` 目录下新建 `README.md` ，然后可以在其中写一些文字了，这个文件将会打包作为首页。
3. 在终端命令行运行 `npm run serve` ，然后稍等一下即可看到控制台显示了一个网址，通常是 `http://localhost:8080/`
4. 按住 `ctrl` 然后使用鼠标左键单击那个链接即可在浏览器打开进入首页了，可以看到刚才书写的内容已经出现在页面上。
5. 配置自己的网站标题，logo 等信息，在 `docs/.vuepress/config.js` 中配置，具体的配置项可以参照 [vuepress 配置](https://vuepress.vuejs.org/zh/config/) 。

## 模板约定

VuePress 遵循 「约定优于配置」 的原则，所以此模板完全遵循官方约定及配置。

- 所有文档放置在 `docs/` 目录下
- 每一个文件夹下的 `README.md` 或者 `index.md` 文件都会被自动编译为 `index.html`，对应的链接将被视为 `/` ，所以目录内不要同时拥有 `README.md` 和 `index.md`
- 不需要生成导航或侧边栏的文件或文件夹命名以 `_` 或 `.` 开头，但是依然可以通过对应 URL 进行访问
- 如果不需要打包成页面，也就是不能通过 URL 访问，可以放在根目录下的 `temp` 目录中，通常用于草稿或未完成的文章等。

## 导航栏和侧边栏

此模板编写了一个 `docs/.vuepress/utils/NavAndSidebar.js` 文件来根据 `docs` 下的文件和目录结构，自动递归生成一个导航栏和对应页面的侧边栏。

注意，有些文章可能不想暴露到导航栏或者侧边栏中，本项目约定为：所有使用 `_` 或 `.` 开头来命名的文件和目录均不会生成到导航栏或是侧边栏。

- 如果目录内出现 `README.md` 或者 `index.md` 文件，则此目录名会作为导航栏的一个链接，点击此链接后，此目录内的所有页面将作为此链接的侧边栏内容。
- 否则，将会一直递归生成导航栏配置。
- 导航栏嵌套深度不能超过 3 层，否则会报错。

## 规范检查工具

项目配置了 eslint, markdownlint, stylelint 等规范检查工具，但是如果需要在编写的时候有及时的错误提示，需要在 VS Code 插件中安装 `eslint`, `markdownlint`, `stylelint` 工具。

同时，本仓库也将这几个需要的 VS Code 插件作为推荐插件放在了共享配置  `.vscode/extensions.json` 里面，通常来说，如果打开了本项目，如果 VS Code 检测到这些插件没有被安装，应该会弹出弹窗询问是否需要安装这些插件。
