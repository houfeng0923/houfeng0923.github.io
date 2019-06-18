对于 web developer 来说，代码依赖管理一直都是个头疼的问题。自前端代码模块化开发以来，前端依赖管理也从原始的手动加载维护演化为基于模块仓库和工具的自动管理。目前相对比较流行的包管理工具是 bower 和 npm。

## bower && npm

[bower](https://bower.io/)的完全面向 web 的包管理工具。本身并不存储模块代码，对包结构也无强制规范。安装的依赖默认存储在`bower_components`目录下，存储特点是扁平化的依赖结构，如果依赖库相互之间有版本冲突，bower 会提示用户并让用户仲裁版本。
由于本身的设计缺陷无法满足复杂项目的构建需求，bower 在社区也越来越不流行，但还有一些依赖只能通过 bower 安装（比如 ember 的一些库）。
[npm](https://www.npmjs.com/)起初是 Node.js 生态的包管理器，后来随着同构 js 库的发展，npm 已经发展成了 JavaScript 生态的包管理器。npm 模块遵循 CommonJS 规范，代码统一发布到 npm 仓库。安装的依赖存储在`node_modules`目录下，依赖采用树形结构存放，也就是同一个依赖可能会存在不同的版本，对于 web 开发者来说要注意代码冗余。

## 部署版本问题

bower 和 npm 都支持[语义化版本号](http://semver.org/lang/zh-CN/)来定义依赖版本。给版本兼容和依赖升级带来一些便利，但也造成了版本的不确定性。在实际开发和部署时，往往会造成开发时和部署时安装的依赖版本不一致，给线上产品带来未知风险。

## npm 锁定依赖版本

为此，npm 提供了`shrinkwrap`命令来解决这个问题。在开发阶段依赖稳定后，运行如下命令：

```
npm shrinkwrap
npm shrinkwrap--dev//将dev-dependencies计算在内
```

shrinkwrap 会在根目录生成`npm-shrinkwrap.json`文件。之后的 npm install 会参照这个文件的版本来安装。

### 注意项

1. shrinkwrap 计算时是根据当前依赖安装的目录结构生成的，如果你不能保证 package.json 文件定义的依赖与`node_modules`下已安装的依赖是匹配、无冗余的，建议在执行 shrinkwrap 命令前清理依赖并重新安装（rm -rf node_modules && npm install）或精简依赖（npm prune）。
2. 默认情况下，shrinkwrap 只计算 dependencies 依赖，而不计算 dev-dependencies，如果在生产环境也需要开发依赖或你的依赖分类不清晰，使用`--dev`参数生成 shrinkwrap 文件确保不会出问题。
3. 如果不需要关注 dev-dependencies，建议 npm install --production 或 npm prune --production

### bower 锁定版本

bower 官方并未提供该功能，这里提供下社区贡献的方案：[bower-shrinkwrap-resolver](https://github.com/shyiko/bower-shrinkwrap-resolver)

1.npm install bower -g
2.npm install bower-shrinkwrap-resolver -g
3.添加以下内容到`.bowerrc`:
```
{
"resolvers": [
"bower-shrinkwrap-resolver"
]
}
```

之后执行 bowerinstall,会自动生成`bower-shrinkwrap.json`文件。如果需要重新生成，执行`bower install --reset-shrinkwrap`。

## 参考资料

-[npm shrinkwrap](https://docs.npmjs.com/cli/shrinkwrap)
-[使用npm shrinkwrap来管理项目依赖](http://tech.meituan.com/npm-shrinkwrap.html)
-[那些年使用npm进行依赖管理所踩的坑](http://www.cnblogs.com/snadn/p/5328050.html)
-[uber/shrinkwrap](https://github.com/uber/npm-shrinkwrap)



todo :

http://taobaofed.org/blog/2016/03/31/what-can-we-learn-from-left-pad-event/

