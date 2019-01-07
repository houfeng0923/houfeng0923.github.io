
## git config (~/.gitconfig)

- 常用的命令alias就不说了，下回分享下整理好的配置安装脚本
- 团队频繁更新同一分支，容易产生无谓的merge记录干扰分支提交主线，严重推荐设置：
`git config --global pull.rebase true`


## 规范 ci msg

### commitizen

https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly

use: git cz  instead !  // how to use git commit
> 为什么 git-cz 命令 可以通过 ** git  cz ** 方式使用？
> 与node、npm无关，与 [git](http://www.cnblogs.com/kidsitcn/p/4743042.html) 子命令 有关系!!!!


### automic changelog file

[standard-version](https://github.com/conventional-changelog/standard-version) ( automic tag ,version , changelog )

other for github : https://github.com/lerna/lerna-changelog  


### contributing doc

like [angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)



