## ember app building

### features

- 使用 ember cli 及相关工具(blueprint,config) 等基础设施
- 替换 ember cli build 的工作(需要先细致了解 build 的功能和工作流程)
- 思考如何改造代码,使之: 兼容 ember cli 及 webpack 构建(并可以发挥 webpack code split 的能力)
- 思考如何实现多项目输出


### ember cli 结构和功能

- build using `Broccoli.js` (*****)
- transform code using `Babel` (**)
- http dev server (proxy) (**)
- blueprints  (-)
- tests (-)
- addon system (*****)
- plugins (ember-cli-*) (****)

- ember resolver 2


### step

1. [ ] ember build 实现多工程构建!
2. [ ] webpack 实现 构建 单一工程
3. [ ] webpack 多工程构建


> 关于 1,并非是简单的工程融合(/advance + /express + /),还要考虑模块,组件的复用.

思路调整: 在不改变原有 proj 结构的前提下, 提取复用逻辑模块 ,组成 "公共包"
问题:
  - 公共包结构: 接近 addon? 如此,直接使用 addon,问题是修改麻烦,类似 chart,需要更新依赖
              与 addon 有差异,需要 开发新的 build 逻辑
  - 公共包依赖: addon 作为依赖,可以自动 install addon deps;
              若公共包不作为依赖,而是作为特殊的 merge code,需要处理依赖问题
                - app.import
                - dynamic import
                - 与主 project 依赖版本冲突
              处理方法: lerna? (部署时,也要注意依赖包的初始化和同步,install build)


#### multi project


理想项目结构:

```
.
├── -nextop
│   ├── components
│   │   └── x-table
│   │       ├── component.js
│   │       ├── template.hbs
│   │       └── [style.css]
│   ├── services
│   │   ├── realtime.js
│   │   └── ajax.js
│   ├── helpers
│   ├── utils
│   ├── models
│   ├── vendor
│   │   └── fx-util.css
│   ├── index.js
│   └── README.md
├── app-express(like pods)
│   ├── components
│   │   └── news-rolling
│   │       ├── component.js
│   │       ├── template.hbs
│   │       └── [style.css]
│   ├── login
│   │   ├── route.js
│   │   └── template.hbs
│   ├── index
│   │   ├── route.js
│   │   └── template.hbs
│   ├── services
│   │   ├── setting.js
│   │   └── tone.js
│   ├── styles
│   │   └── app.css
│   └── app-build.js
|
├── app-advance
│   └── ...
├── ...
└── ember-cli-build.js

```



- [Share EmberJS common code between apps](https://dev.to/michalbryxi/share-emberjs-common-code-between-apps-1a7k)
- [Support for multiple &quot;app&quot; folders? · Issue #6887 · ember-cli/ember-cli](https://github.com/ember-cli/ember-cli/issues/6887)

## some ember cli info

https://cli.emberjs.com/release/advanced-use/asset-compilation/

[embroider-build/embroider](https://github.com/embroider-build/embroider)