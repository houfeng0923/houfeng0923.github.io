



# topics

## clear/modify code


- [babel-plugin-transform-inline-environment-variables](https://www.npmjs.com/package/babel-plugin-transform-inline-environment-variables)
- [babel-plugin-transform-define](https://www.npmjs.com/package/babel-plugin-transform-define)
- [babel-plugin-minify-replace](https://www.npmjs.com/package/babel-plugin-minify-replace)
- [babel-plugin-minify-dead-code-elimination](https://github.com/babel/minify/blob/master/packages/babel-plugin-minify-dead-code-elimination/README.md)

- [**ember-cli/babel-plugin-debug-macros**](https://github.com/ember-cli/babel-plugin-debug-macros)
  > `ember-cli-babel`  used to replace flag: `import { DEBUG } from '@glimmer/env'`
- [ember-cli/broccoli-config-replace](https://github.com/ember-cli/broccoli-config-replace)
- [andybluntish/ember-cli-replace](https://github.com/andybluntish/ember-cli-replace/blob/master/README.md)
- [ember-cli/babel-plugin-filter-imports](https://github.com/ember-cli/babel-plugin-filter-imports)

base broccoli plugin:

- [broccolijs/broccoli-filter](https://github.com/broccolijs/broccoli-filter)
- [broccolijs/broccoli-persistent-filter](https://github.com/broccolijs/broccoli-persistent-filter)
> cache + processString
- [broccolijs/broccoli-multifilter](https://github.com/broccolijs/broccoli-multifilter)

## broccoli 整合其他build

- [chadhietala/broccoli-rollup](https://github.com/chadhietala/broccoli-rollup)
> 用例:
> - [ember-cli/ember-fetch](https://github.com/ember-cli/ember-fetch/blob/master/index.js)

## hbs compilers


- ember-cli-htmlbars (in `ember-cli-preprocess-registry`)
  - `htmlbars-ast-plugin`: 可以注册该类型的 ast plugin 处理 hbs [demo code](https://github.com/ember-template-lint/ember-cli-template-lint/blob/v2.0.2/index.js#L75)
  > registry `template` - toTree() -> processString() ...
  >                                -> processString() -> ember compiler() to js string
  >                                -> registry ast for hbs
  > about processor sort: [see `before`](https://github.com/BBVAEngineering/ember-cli-htmlbars-minifier/blob/master/package.json#L78)
  - babel-plugin-htmlbars-inline-precompile
    ([ember-cli/ember-cli-htmlbars-inline-precompile](https://github.com/ember-cli/ember-cli-htmlbars-inline-precompile))
    
  - [ember-template-recast](https://github.com/ember-template-lint/ember-template-recast)

## extend build

- [MiguelMadero/ember-cli-bundle-loader](https://github.com/MiguelMadero/ember-cli-bundle-loader)
> 最接近期望的一个类库了

- [embroider](https://github.com/embroider-build/embroider)


另外,还可以 通过`PACKAGER` , 替代 `_defaultPackager`

### some config

```
// ignore some addon
let app = new EmberApp(defaults, {
    addons: {
      blacklist: [
        'ember-math-helpers' //  ignore some addon libs in build
      ]
    },
});
// ignore some paths, use `ember-cli-funnel`
```
