




### about eslint --fix

哪些可以自动 fix ?

    fixable: 'code'

- plugin: 定义一个或一类,一组 rules; 包括规则检测和是否 fixable; 如 eslint-plugin-react / eslint-plugin-vue
- config: 组合 rules,定义一套编码规范; 依赖 **plugin**; 如 eslint-config-prettier / eslint-plugin-vue/config/recommend /

```
eslint: 开头的是 ESLint 官方的扩展，一共有两个：eslint:recommended 、eslint:all。
plugin: 开头的是扩展是插件类型，也可以直接在 plugins 属性中进行设置，后面一节会详细讲到。
最后一种扩展来自 npm 包，官方规定 npm 包的扩展必须以 eslint-config- 开头，使用时可以省略这个头，上面案例中 eslint-config-standard 可以直接简写成 standard,再如 @vue/prettier
```

## prettier (formatter)

在格式化代码方面， Prettier 确实和 ESLint 有重叠，但两者侧重点不同：ESLint 主要工作就是检查代码质量并给出提示，它所能提供的格式化功能很有限；而 Prettier 在格式化代码方面具有更大优势。而 Prettier 被设计为易于与 ESLint 集成，所以你可以轻松在项目中使两者，而无需担心冲突。

[用 ESLint 和 Prettier 写出高质量代码](https://egoist.moe/2017/12/11/write-better-code-with-eslint-and-prettier/)

[使用ESLint ＆ Prettier美化Vue代码](https://nice.lovejade.cn/zh/article/beautify-vue-by-eslint-and-prettier.html#%E4%BF%AE%E6%94%B9%E8%A7%84%E5%88%99%E9%85%8D%E7%BD%AE)


related:

[What's the difference between prettier-eslint, eslint-plugin-prettier and eslint-config-prettier?](https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint)


## other configs


https://www.youtube.com/watch?v=lHAeK8t94as
https://github.com/wesbos/eslint-config-wesbos

## eslint-plugin

- [手摸手教你写个ESLint 插件以及了解ESLint的运行原理](https://juejin.im/post/5de8f14ff265da33f9794489)


## parser

// espima(默认), babel-eslint, @typescript-eslint/parse
"parse": "esprima",

[How to use custom parser? | eslint-plugin-vue](https://vuejs.github.io/eslint-plugin-vue/user-guide/#usage)

##  todo

eslint 生态

[深入理解 ESlint - 掘金](https://juejin.im/post/5d3d3a685188257206519148)
https://github.com/typescript-eslint/typescript-eslint
https://www.npmjs.com/package/eslint-config-ali
https://zhuanlan.zhihu.com/p/76697446