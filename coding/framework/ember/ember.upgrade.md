
## upgrade 2.8.0

> take care of [changelog 2.8.0](https://github.com/emberjs/ember.js/blob/v2.8.0/CHANGELOG.md)

### bower install ember的速度太慢 （暂时手动clone单一版本）
### 代码注意(已知)：

  1. baseURL -> rootURL , rootURL 以'/' 结尾并需要更新 html 文件

### 处理 deprecated api

  1. warn:  Ember.Handlebars.SafeString -> Ember.String.htmlSafe
  2. error: Ember.Object remove() -> destroy()

### performance warning

  1. warn: You should never change properties on didInsertElement about {{input}} . 方案是使用 Ember.run

### 手动创建组件 createWithOwner方法失效

#### layout问题.具体方案:


有两个方案：

1. layout

```
import template from '../templates/xxxx';

// ....
layout: template

```

2. 继续使用 layoutName，在父类中设置 layout: ✅

```
layout: Ember.computed('layoutName', function(){
    let name = this.get('layoutName');
    if(!name) return null;
    return getOwner(this).lookup(`template:${name}`);
});
```
> 具体原因 应该是ember layout设置逻辑有更新


考虑全部更新成方案 1 。 好处是可避免使用 ember 的依赖管理，后续有可能过渡到 webpack


#### 通过 createWithOwner 创建的组件（一般是popup），如果组件内有编辑控件（input），无法获取到录入值

text 无法获取到值。 checkbox 可以。

排查进展：

 - debug 发现 组件未注册到正确的 viewRegistry[1], 导致 delegate input event 未触发。
 - ember 组件 mixin 了 target_action_support，内部托管 dom 事件，而 handle 会在 viewRegistry 中查找 view 对象，若 view 未空，不会更新组件 value。


>  **后续还是应该避免手工创建控件**

解决方法：

create 前指定 renderer ：

```
BaseComponent.reopenClass({
  createWithOwner: function(holder, o) {
    let owner = getOwner(holder);
    let param = o || {};
    setOwner(param, owner);
    param.renderer = holder.renderer;
    return this.create(param);
  }
});
```

或者采用：

```
let loading = Ember.getOwner(this).lookup('component:common/loading-overlay');
loading.append();
```

以上方法都需要注意点：

component 需要指定 `layoutName` ,否则 ember 无法找到对应的模板.


[1]: ember 内部渲染有多个 Renderer（InsertRenderer/InteractiveRenderer) 每个都管理独立的 _viewRegistry 集合

## 升级 2.10.1 问题

- this.isVisible : 之前默认 true。现在为 undefined
- renderer  ， this.$() === undefined
- routeName: error  不允许重自定义 error 名字的路由

1. index 路由 定义 loading.hbs ，替换 notification.loading
2. createWithOwner 只能在 component 有效，还需尽快替换，废弃手工创建！
3. createWithOwner 组件:flashAlert  destroy 出错. willDestroyElement 获取不到 $() 。暂时直接 remove。
4. rename error 路由
5. 替换在组件外 create 组件的代码 ：route/index.js 移除 create 组件逻辑：

- bootstrap loading ,使用 substate loading、error
- logout loading /confirm/notify modal : {{app-modals}}


## 升级 2.11

- 2.11 依赖 jquery 3.x ,部分 jquery 插件会有不兼容问题。holding
- 等待升级 2.12 LTS 版本

## 升级2.12.1

- upgrade ember-cli@2.12.1
- ember init
- rm bower (ember-cli-node-assets)


## 升级 2.18

### some change list

 - so many [bugfix](https://github.com/emberjs/ember.js/blob/master/CHANGELOG.md#2122-april-27-2017)
 - glimmer vm 升级 (todo)
 - [history rfc](https://github.com/bcardarella/rfcs/blob/0ad4c1360f77b6db637417c1f97fa79239e29ecb/text/0000-track-unique-history-location-state.md)
- [router service rfc](https://github.com/emberjs/rfcs/blob/master/text/0095-router-service.md), [api](https://emberjs.com/api/ember/2.17/classes/RouterService)
- [js module!! rfc](https://github.com/emberjs/rfcs/blob/master/text/0176-javascript-module-api.md), [upgrade tool](https://emberjs.com/blog/2017/09/01/ember-2-15-released.html#toc_updating-your-application)

#### other

- Array/String.prototype

### glimmer

createWithOwner 失效 ...

### some

- `items.@each.{prop1,prop2}`
- deprecations [targetObject](https://emberjs.com/deprecations/v2.x/#toc_code-targetobject-code)


### end

 - npm  strt  启动变慢
 - .observes  .property 保留



## upgrade 3.2

### createWithOwner  失效

方案:

```
TemplateEditPopup._fullName = 'component:chart-indicator-template-edit-popup';
application.register(TemplateEditPopup._fullName, TemplateEditPopup);
```


#### note:

intializer: Application init

instance-intializer: ApplicationInstance init

关于 registry, App 和 Appinstance 各自包含一个 registry. 示例 会现在 Appinstance 中查找, 无则 fallback 到 App 的 registry 中 查找 (lookup).

application.register()

appInstance.register() // application._container_.registry.register()


## check  upgrade 3.8


### @tracked


[reducing-memory-consumption](https://github.com/emberjs/rfcs/blob/be351b059f08ac0fe709bc7697860d5064717a7f/text/0000-tracked-properties.md#reducing-memory-consumption)


不是很优雅的方案.没有升级动力..


### others

- [Do You Need EmberObject?](https://www.pzuraq.com/do-you-need-ember-object/)
- [Ember Octane Update: What's up with {{action}}?](https://www.pzuraq.com/ember-octane-update-action/)
- [On {{mut}} and 2-Way-Binding](https://www.pzuraq.com/on-mut-and-2-way-binding/)