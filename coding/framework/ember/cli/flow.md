

## resolver flow

 相关组件: `ember-resolver`

 默认 classic resolver ,内部定义了几种 resolve 策略:
 ```
 moduleNameLookupPatterns: computed(function(){
    return [
      this.podBasedModuleName,
      this.podBasedComponentsInSubdir,
      this.mainModuleName,
      this.defaultModuleName, // 默认根据parsedName 拼模块路径,查找对应路径模块是否注册,返回
      this.nestedColocationComponentModuleName,
    ];
  }).readOnly(),
  ```

扩展例子:

- `ember-cli-extended-resolver`

- `ember-local-resolver`

  use `expandLocalLookup() api`, 在当前路由 fold 下定义的组件,并且在当前路由模板中使用,会调用该 api