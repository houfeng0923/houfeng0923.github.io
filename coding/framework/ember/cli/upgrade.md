

## step

1. 合并 virtual/express

1.1  最小化代码和文件差异

1.2  文件内差异

  提供 ENV 区分
  `ember-cli/babel-plugin-debug-macros`, `htmlbars-ast-plugin` 做代码清理;

  > import { isCfx, isTraders, isTradersDemo } from '@env';

1.3 文件差异

  - 路由/组件,按照对应的源文件结构组织,单独存放, build 时 overwrite.
  > 逻辑实现简单
  > 缺点: 差异目录下,感官上内容不完整

  - 按照路由组织差异,一旦内容存在较大(小差异在文件内处理)差异, 切分到不同的 route
  > build时,根据router.js? (或指定排除route-list) 差异化构建
  > 考虑 private component (local-resolver? )


1.4 目录结构

  component/route 结构调整

  类 `ember-cli-extended-resolver`


1.5 build 脚本

  每个"package"下单独一个 ember-cli-build, 但结构可能不同
  后续,希望拦截 build export 做 merge 整合,统一做 build 优化.

  https://cli.emberjs.com/release/advanced-use/asset-compilation/


1.5 输出

- index.html
  > 默认的 patterns 不支持更多env环境变量替换,需要考虑 增加 replace (针对outputPaths配置)
  > `ember-cli-replace`


