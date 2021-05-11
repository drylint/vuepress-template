# Git 仓库

[coding](https://github.com/drylint/drylint.com.git)
[coding](https://e.coding.net/drylint/drylint.com/drylint.com.git)
[gitee](https://gitee.com/drylint/drylint.com.git)

添加到远程 origin 地址

```bash
git remote set-url --add origin https://e.coding.net/drylint/drylint.com/drylint.com.git
git remote set-url --add origin https://gitee.com/drylint/drylint.com.git
```

推送根目录的 `pages` 目录到远程 origin 的 gh-pages 分支

```bash
git subtree push --prefix pages origin gh-pages
```
