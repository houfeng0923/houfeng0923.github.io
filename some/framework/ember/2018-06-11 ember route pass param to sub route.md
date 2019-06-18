问题：

index.place 下 存在多个子路由， 子路由希望共享同一个 url 参数 symbolid,

原方式并没有实现共享，因为 queryParams 只针对 其中之一子路由设定。

现方案： 提升 queryParams 到 父路由， 参数保持在父路由对应的 controller 中（之后 组件通过 lookup 定位 ctrl 更新 参数 来更新 url）
```
Ember.getOwner(this).lookup('controller:index.place').set('symbolId', this.get('symbolId'));
// 按照 ember way , 推荐方法是 ctrl 传入组件 action ！
```

注意：
1. redirect 需要传递 参数：
```
let symbolId = transition.queryParams.symbolId;
this.transitionTo('index.place.streaming', {
    queryParams: { symbolId }
 });
 ```
2. 子路由 model(params, transition) , 需要在 transition 中获取参数
```
    let symbolId = (transition.queryParams || {}).symbolId;
 ```
 

3: queryParams; 

https://guides.emberjs.com/release/routing/query-params/

```
      refreshModel: true, // full transition ， invoke mode()/ setupController() 
      replace: true  // not invoke above method.  no history stack 
```   

借助 ctrl 生命周期及单实例， 可以保持路由 qp 状态，下次进入保留上次状态。
如果并非每次进入都保留上次状态，可以预先保存状态到全局 service 等



一般：更改 ctrl 与 route queryParams 对应的属性，url 会同步更新。
所以，若需要 url 保存状态，需要通过 ctrl （隐式 ctrl 也 ok， 显示 ctrl 可以更灵活的控制 参数，alias 等 ）。
直接传递 ctrl prop 到组件可以自动实现 url 联动；或者 lookup 到指定 ctrl 做 prop 更新。
1; order  使用后者；
2：position-list 使用前者

增强组件：
https://github.com/offirgolan/ember-parachute


