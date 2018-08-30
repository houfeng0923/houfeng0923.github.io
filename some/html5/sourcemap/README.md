



## ember cli 相关问题

#### 相关依赖项

- ember-cli-babel
- broccoli-asset-rev
- broccoli-uglify-sourcemap
- ......

与生成文件名有关系的配置： fingerprint

默认 `extensions` 配置里包含 map 文件， 所以 map 文件会被同样 计算 hash 处理

customHash ：string | function  ，无法满足关联需求

问题： broccoli 如何/何时 更新 源文件的 sourceMapingURL ？


#### 工程 依赖 popper.js 为什么会导出 map 文件

ember-popper 依赖 popper.js , 工程通过  nodeAssets 插件 重新生成 map 文件：

```
nodeAssets: {
      'popper.js': {
        srcDir: 'dist/umd',
        import: {
          include: ['popper.js'],
          processTree(input) {
            return fastbootTransform(input);
          }
        },
        public: ['popper.js.map']
      }
 }
```
补充：可以不用导出，最终 ember 生成的 sourcemap 文件里会包含 popper source，前提是 不要 import 压缩版本。


#### chart lib sourcemap 解决方法

1. 直接引入 dist 打包后 index.js, 通过 source-map-loader 引入 index.js.map ,这样 最终生成的 map 文件， 可以在浏览器中正确使用。(需要移出 webpack dll 配置 。有影响!)

2. ember 工程如何 生效呢?  通过 dynamic import 导入 chart lib, 更新 ember-auto-import (fix 了 sourcemap 相关的 bug， 具体细节), 之后	配置 webpack:

```
autoImport: {
    webpack: {
    devtool: 'source-map',
    module: {
        rules: [{
        test: /multi-chart/,
        use: ["source-map-loader"],
        enforce: "pre",
        }]
    }
    }
}
```

## 对比 webpack

devtool: // 几种取值 https://segmentfault.com/a/1190000008315937

另外，涉及一个内置插件： SourceMapDevToolPlugin （https://webpack.docschina.org/plugins/source-map-dev-tool-plugin/）。提到 devtool 实现更细粒度控制。




## 相关资料

- [JavaScript Source Map 详解 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)
- [BASE64 VLQ 编码规则 &#8211; Allen.M成长的路](http://blog.allenm.me/2012/12/base64-vlq-encoding/)
- [打破砂锅问到底：详解Webpack中的sourcemap - 教练，我想写前端 - SegmentFault 思否](https://segmentfault.com/a/1190000008315937)
- [Source Maps](https://survivejs.com/webpack/building/source-maps/)

- [danvk/source-map-explorer](https://github.com/danvk/source-map-explorer#readme)
- [stefanpenner/broccoli-concat-analyser](https://github.com/stefanpenner/broccoli-concat-analyser)