(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{192:function(s,e,t){"use strict";t.r(e);var n=t(6),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vuepress-template"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-template"}},[s._v("#")]),s._v(" vuepress-template")]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#开始使用"}},[s._v("开始使用")])]),t("li",[t("a",{attrs:{href:"#模板介绍"}},[s._v("模板介绍")])]),t("li",[t("a",{attrs:{href:"#导航栏和侧边栏"}},[s._v("导航栏和侧边栏")])]),t("li",[t("a",{attrs:{href:"#规范检查工具"}},[s._v("规范检查工具")])])])]),t("p"),s._v(" "),t("p",[s._v("基于 "),t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress"),t("OutboundLink")],1),s._v(" 创建的模板，用于快速创建自己的技术博客，学习笔记，或者自己写的某个库的文档。")]),s._v(" "),t("p",[s._v("模板主要做的事其实就是根据文件和目录的组织结构来自动生成导航栏和侧边栏，所以会有一些特有的约定，但是相较于每次增删改一个文件或目录时，都要手动去修改导航栏配置或侧边栏配置数据时，省去了这些麻烦的事情，好让我们只需要关注在写作上面即可，写完文章后不需要做什么即可拥有对应的导航栏和侧边栏。")]),s._v(" "),t("blockquote",[t("p",[s._v("VuePress 由两部分组成：第一部分是一个极简静态网站生成器 (opens new window)，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。")]),s._v(" "),t("p",[s._v("每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。")])]),s._v(" "),t("h2",{attrs:{id:"开始使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始使用"}},[s._v("#")]),s._v(" 开始使用")]),s._v(" "),t("p",[s._v("克隆此仓库：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 克隆项目")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/drylint/vuepress-template.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("做一些适配自己项目的修改：")]),s._v(" "),t("ol",[t("li",[s._v("修改项目目录名称为自己的项目名称")]),s._v(" "),t("li",[s._v("修改 "),t("code",[s._v("package.json")]),s._v(" 文件，只保留此仓库中的 "),t("code",[s._v("scripts")]),s._v(" 和 "),t("code",[s._v("devDependencies")]),s._v(" 字段即可，其他信息全部替换为自己的相关信息即可。当然，这不是必须的，以后再做也行。")])]),s._v(" "),t("p",[s._v("安装依赖包：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("开始写一些东西：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("docs")]),s._v(" 目录下的所有文件和目录，除了 "),t("code",[s._v(".vuepress")]),s._v(" 以外，其他的可以全部删除。")]),s._v(" "),t("li",[s._v("在 "),t("code",[s._v("docs")]),s._v(" 目录下新建 "),t("code",[s._v("README.md")]),s._v(" ，然后可以在其中写一些文字了，这个文件将会打包作为首页。")]),s._v(" "),t("li",[s._v("在终端命令行运行 "),t("code",[s._v("npm run serve")]),s._v(" ，然后稍等一下即可看到控制台显示了一个网址，通常是 "),t("code",[s._v("http://localhost:8080/")])]),s._v(" "),t("li",[s._v("按住 "),t("code",[s._v("ctrl")]),s._v(" 然后使用鼠标左键单击那个链接即可在浏览器打开进入首页了，可以看到刚才书写的内容已经出现在页面上。")]),s._v(" "),t("li",[s._v("配置自己的网站标题，logo 等信息，在 "),t("code",[s._v("docs/.vuepress/config.js")]),s._v(" 中配置，具体的配置项可以参照 "),t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress 配置"),t("OutboundLink")],1),s._v(" 。")])]),s._v(" "),t("h2",{attrs:{id:"模板介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板介绍"}},[s._v("#")]),s._v(" 模板介绍")]),s._v(" "),t("p",[s._v("VuePress 遵循 「约定优于配置」 的原则，所以此模板同样遵循官方推荐的目录结构：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("├── docs                              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文档目录")]),s._v("\n│   ├── .vuepress                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，存放全局的配置、组件、静态资源等。")]),s._v("\n│   │   ├── components                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，该目录中的 Vue 组件将会被自动注册为全局组件")]),s._v("\n│   │   ├── theme                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，存放本地主题。")]),s._v("\n│   │   │   └── Layout.vue\n│   │   ├── public                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，静态资源目录。")]),s._v("\n│   │   ├── styles                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，存放样式相关的文件。")]),s._v("\n│   │   │   ├── index.styl            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局样式文件，具有比默认样式更高的优先级。")]),s._v("\n│   │   │   └── palette.styl          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。")]),s._v("\n│   │   ├── templates                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，存储 HTML 模板文件。")]),s._v("\n│   │   │   ├── dev.html              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于开发环境的 HTML 模板文件。")]),s._v("\n│   │   │   └── ssr.html              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建时基于 Vue SSR 的 HTML 模板文件。")]),s._v("\n│   │   ├── config.js                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，配置文件的入口文件，也可以是 YML 或 toml。")]),s._v("\n│   │   └── enhanceApp.js             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，客户端应用的增强。")]),s._v("\n│   │\n│   │\n│   ├── README.md                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# / , 渲染到导航栏作为一个链接 【首页】")]),s._v("\n│   ├── config.md                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /config.html 渲染到导航栏作为一个链接 【config】")]),s._v("\n│   ├── foo                           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 渲染到横向导航栏作为导航栏下拉菜单 【foo】")]),s._v("\n│   └── "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n│\n│\n└── package.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("ul",[t("li",[s._v("所有文档放置在 "),t("code",[s._v("docs/")]),s._v(" 目录下")]),s._v(" "),t("li",[s._v("每一个文件夹下的 "),t("code",[s._v("README.md")]),s._v(" 或者 "),t("code",[s._v("index.md")]),s._v(" 文件都会被自动编译为 "),t("code",[s._v("index.html")]),s._v("，对应的链接将被视为 "),t("code",[s._v("/")]),s._v(" ，所以目录内不要同时拥有 "),t("code",[s._v("README.md")]),s._v(" 和 "),t("code",[s._v("index.md")])]),s._v(" "),t("li",[s._v("不需要生成导航或侧边栏的文件或文件夹命名以 "),t("code",[s._v("_")]),s._v(" 或 "),t("code",[s._v(".")]),s._v(" 开头，但是依然可以通过对应 URL 进行访问")]),s._v(" "),t("li",[s._v("如果不需要打包成页面，也就是不能通过 URL 访问，可以放在根目录下的 "),t("code",[s._v("temp")]),s._v(" 目录中，通常用于草稿或未完成的文章等。")]),s._v(" "),t("li",[s._v("具体的目录结构及文件结构，以及这些目录和文件哪些将会作为导航栏，哪些将会作为侧边栏等等，可以参照本仓库的 "),t("code",[s._v("docs")]),s._v(" 目录下的文件和目录用例。")])]),s._v(" "),t("h2",{attrs:{id:"导航栏和侧边栏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导航栏和侧边栏"}},[s._v("#")]),s._v(" 导航栏和侧边栏")]),s._v(" "),t("p",[s._v("此模板编写了一个 "),t("code",[s._v("docs/.vuepress/utils/NavAndSidebar.js")]),s._v(" 文件来根据 "),t("code",[s._v("docs")]),s._v(" 下的文件和目录结构，自动递归生成一个导航栏和对应页面的侧边栏。")]),s._v(" "),t("p",[s._v("可以参照本仓库现有的 "),t("code",[s._v("docs")]),s._v(" 内的文件和目录结构，以及页面上对应渲染出的位置，来查看哪些文件和目录会作为导航栏，哪些文件和目录会作为侧边栏。")]),s._v(" "),t("p",[s._v("注意，有些文章可能不想暴露到导航栏或者侧边栏中，本项目约定为：所有使用 "),t("code",[s._v("_")]),s._v(" 或 "),t("code",[s._v(".")]),s._v(" 开头来命名的文件和目录均不会生成到导航栏或是侧边栏。")]),s._v(" "),t("h2",{attrs:{id:"规范检查工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规范检查工具"}},[s._v("#")]),s._v(" 规范检查工具")]),s._v(" "),t("p",[s._v("项目配置了 eslint, markdownlint, stylelint 等规范检查工具，但是如果需要在编写的时候有及时的错误提示，需要在 VS Code 插件中安装 "),t("code",[s._v("eslint")]),s._v(", "),t("code",[s._v("markdownlint")]),s._v(", "),t("code",[s._v("stylelint")]),s._v(" 工具。")]),s._v(" "),t("p",[s._v("同时，本仓库也将这几个需要的 VS Code 插件作为推荐插件放在了共享配置  "),t("code",[s._v(".vscode/extensions.json")]),s._v(" 里面，通常来说，如果打开了本项目，如果 VS Code 检测到这些插件没有被安装，应该会弹出弹窗询问是否需要安装这些插件。")])])}),[],!1,null,null,null);e.default=a.exports}}]);