

## core object

Compiler: 代表构建过程中整个 webpack **环境**. 提供给 loader 和 plugin 使用. (extends Tapable)

Compilation: 对象代表了一次单一的版本构建和生成资源(**内容**)。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，一次新的编译将被创建，从而生成一组新的编译资源。一个编译对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。编译对象也提供了很多关键点回调供插件做自定义处理时选择使用。

Module

[核心流程](https://img.alicdn.com/tps/TB1GVGFNXXXXXaTapXXXXXXXXXX-4436-4244.jpg)

## related lib

json schedule for option formatting check: [schema-utils](https://github.com/webpack-contrib/schema-utils)

-  ajv（JSON 模式验证器）

## step

### basic webpack

模块依赖 + 模块查找 => moduleDepsTree :> 模块拼接\文件分割(bootstrap) 输出

[fake-webpack](https://github.com/youngwind/fake-webpack.git)



## loader

input(source) : output(parse source)

 [编写一个 loader!!!](https://webpack.docschina.org/contribute/writing-a-loader/)

### resolver

模块插件: [webpack/enhanced-resolve](https://github.com/webpack/enhanced-resolve)

三种类型:

- normal : 通过绝对/相对路径,解析模块
- context: 通过给定的 context 解析模块
- loader: 解析一个 webpack loader

### context

loader.addDependency() ?

loader.emitFile()

### loader :pitching

[pitching loader](https://webpack.docschina.org/api/loaders/#%E8%B6%8A%E8%BF%87-loader-pitching-loader-)
[pitching loader](https://survivejs.com/webpack/extending/loaders/#pitch-loaders)

例子: style-loader, bundle-loader, script-loader

```
module.exports.pitch(request) {}

module.exports = function(content, map) {}
```

### cachable

this.cachable()?

https://github.com/webpack-contrib/cache-loader/blob/master/README.md

### loader-runner

### loader-utils




### source-map-loader

    若依赖项有存在的 map, 通过该 loader 添加到webpack 构建过程.


### less-loader

核心步骤: lessc(source): {css, map, imports} => addDependency(imports) , css remove sourcemapurl , pass to next loader

**less-loader 将 less 编译器进行了扩展，自定义路径解析逻辑。然后通过 webpack 的 this.resolve 解析依赖。**

- [less-laoder: use less plugin](https://github.com/webpack-contrib/less-loader/blob/master/src/createWebpackLessPlugin.js#L95)

### post-loader

通过 postcss 解析 css(post css plugin).
若项目中 css 没有 @import\css modules , 不需要 css-loader 处理


### css-loader

**css modules**

通过 postcss, 处理 @import \ url() 依赖 ,最终解析成css 或 module;
post css **modules** plugins:  values, local, extractImport, modulesScope

**option: importLoaders**

目前需要手动设置的参数(将来视 webpack 支持决定是否自动识别).具体可[参考](https://github.com/webpack-contrib/css-loader/issues/137) , 为 css 文件中 @import/url() 的其他资源文件设置正确的loader!

### style-loader

输入 css string(module), 输出 js module string . (pitching loader)

### vue-loader




## plugin


Tapable: webpack 依赖的基础类库; webpack 本质是一种事件流机制的架构, tapable 提供一系列 Hook 函数, webpack 使用 tapable 来实现插件的 binding 和 applying. (类比 node EventEmitter )

插件必须包含 apply() 方法完成注册. (会在 compiler.run(cb) 之前注册完).webpack 构建到某个阶段就会发布一个生命周期事件,此时订阅了发布事件的 plugins 会按照注册顺序执行 callback.

- [compiler 钩子](https://webpack.docschina.org/api/compiler-hooks/)
- [compilation 钩子](https://webpack.docschina.org/api/compilation-hooks/)

to review some simple plugins , you can see how the  plugin work :

- [ignore-assets-webpack-plugin](https://github.com/medfreeman/ignore-assets-webpack-plugin)


###

### sourcemap plugin

devtool:

    控制如何生成 sourcemap;  而 SourceMapDevToolPlugin 进行更细粒度的配置.

    module: 如何生成对应的 sourcemap ?


- [打破砂锅问到底：详解Webpack中的sourcemap](https://segmentfault.com/a/1190000008315937)



## temp (ember auto import)




## references

- [细说 WebPack 之流程](http://taobaofed.org/blog/2016/09/09/webpack-flow/)
- [webpack 源码探索之插件机制 - 掘金](https://juejin.im/post/5a80e7fe6fb9a0633a70fe62)
- [Extending with Loaders](https://survivejs.com/webpack/extending/loaders/)
- [webpack进阶:可视化展示webpack内部插件与钩子关系](https://juejin.im/post/5bb06c55e51d450e7c0d8ab9)
- [Webpack原理-编写Plugin](https://juejin.im/post/5a5c18f2518825734f52ad65)

