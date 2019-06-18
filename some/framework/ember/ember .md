
- [ember addons](https://emberobserver.com/)
- [ember guide](https://guides.emberjs.com/v2.6.0/)
- [ember style guide](https://github.com/dockyard/styleguides/blob/master/engineering/ember.md)

## some 

### two-binding 
 use component : {{input }}  / {{xxxx}} (need implement code about set value)
 
 extend: how to one-binding :  
	- http://emberup.co/bindings-with-htmlbars-helpers/

ember 问题： 单双向绑定不清晰。默认双向。

### 组件中引用类型的property是原型共享的

哪些可以定义为 应用类型 prop， 哪些要在 init 里定义？

- 一个场景： 引用一个全局 ember.obj, 希望在某个操作后对修改更新。
	可以通过 Ember.Object.create(o) 包装一下，。。。。
	- mixin  定义属性，混入类共享哦
	- 
### ember  model 逐层传递

- setupController() pass parent model 
- model() override parent model 
- this._super() get parent model 
- this.modelFor(‘xx’) get parent model 

## best practice 

### when to load data 
根据实际情况（重用层次）决定 是传递数据给组件，还是组件内加载数据。
并且有些组件是数据型的，甚至无 ui。
async component vs async route .




** https://emberigniter.com/should-components-load-data/ **
load data 结论：！！！
 - If you’re also changing the URL, use a Route.
 - If you can’t decide exactly where you’re going until after looking at the (asynchronously-loaded) data, use a Route.
 - Otherwise it’s probably fine to use an  ** asynchronous Component **

注： {{link-to 'xxx' model}} // 父 route 进入子 route，可传递 model 给 route，此时 model() 不会执行。

#### load data (or multiple data) from route before the view rendering  ? 

Ember.RSVP.hash()

- http://discuss.emberjs.com/t/best-practice-to-get-multiple-data-from-route-before-the-view-rendering/3016
- ** https://emberigniter.com/load-multiple-models-single-route/ **
	loading multiple data  结论：
	 - If the model (or models) are connected to the URL, use their respective model() hooks. (**model() 的继承. this.modelFor('index') **)
	 - Otherwise, and if no links to that route are present, RSVP.hash can be a good tradeoff between power and simplicity.
	- Alternatively, use **data-loading components**

#### if the same request in  component ,how to refactor ??
- if use model , it's a easy question.
- if use $.ajax,  extract requset logic to a model  .? 

#### load data in component  (async components)

需要注意点： 回调执行中需要注意当前组件是否已经销毁！！！

### actions in route or  controller ? 
in route : actions can bubbling up from leaf to parent .
如果 action 是 route 相关的，就放在 route 中定义（推荐），反之 controller 中（避免）；

另外 component 模板中只能访问组件	actions, controller 中定义的 actions 只能在对应 router 模板中使用；如果任何一个组件想访问当前路由下的 actions，可以借助 [ember-route-action-helper](https://github.com/dockyard/ember-route-action-helper)

** https://dockyard.com/blog/2016/02/19/best-practices-route-actions** 

模板中 actions 访问的是 routers 中还是 controllers 中?
- route 同级模板优先访问同级 controller 定义 actions，若无，访问 route 定义 actions
- route 下级的模板 通过 route-action  helper 访问上级 route 定义的 action


### communication between components 
组件之间是相互隔离的，通过 controller 上下文关联。
**data down , actions up**  pattern is the best  practice for component communication. （类 flux 单向数据流）
(可搜索相关文章加深理解；类似 react 的组件)

- upward  . url: model() ; not url: actions 
- downward   model
- sideways （event bus.)

** https://emberigniter.com/communication-between-distant-components/ **

data down: （如何更好理解：，结合 IDS）
一旦数据向下传递了，数据就不应该被下面的任意一层去改变（这是为了性能），数据的拥有者（即封装了该数据的对象）也不应该在下面的任意一层里去做改变数据的动作（这是为了组件的单一职责）。

#### parent  child  communication 

早先依赖 nearestOfType \ parentView | targetObject 获取父组件实例, 后续相关 api 已经逐渐废弃和私有。数据传递依赖 DDAU 原则 。

- 父组件模板传递 this 给子组件，子组件通过传递对象获取父组件状态 
	- 直接设置  parent = this ，暴露给业务开发。
	- 通过 yield (hash item=(component 'item' parent=this) ) ,隐藏在父组件内设置

> 老版本支持targetObject == controller (parentscope has controller) / else parent scope (==parentView)
 > 待验证方案1： 新版本2.9+ 替代 targetObject方法：
let parentView =    this.parentView;
while(parentView) {parentView = parentView.parentView;}
if(parentView)  return  parentView._targetObject;
> 方案2： 如果确定 类型： 使用 nearestOfType  （cp 为 volatile) 

### You should never change properties on components, services or models during didInsertElement because it causes significant performance degradation.

from ember warning info .
一般出现在在 didInsertElement 中 使用第三方 dom 组件（jq 插件)：条件：
 -  hbs 模板使用了{{input}}双向绑定组件
 -  dom 组件同步触发了 input 的 change 事件

so, 最好的方案是： 

Ember.run.scheduleOnce('afterRender', ()=> { /*  jq plugin init  /  set('value') to {{input}} / ...  */ });


### computed better observes ???

https://dockyard.com/blog/2015/11/16/best-practices-functional-programming-and-the-observer-effect

computed : lazy compute ;   多个依赖变更，只会触发一次计算属性的重计算
observes： 目前感觉是 与 runloop 无关。 多个属性变更，会触发多次 observer 执行 ，需要通过 once 优化。


## anti-pattern

###  handle every use-case in component 

要避免上帝组件，首先要合理地拆分成子组件，但有时候过量的拆分只会增加理解和维护成本。要充分和合理利用 route / controller / component /service 的职责和特性来组织代码。



- [](http://gregbabiars.com/case-against-ember-controllers/)
	// 随着 ember2.0， 已经弱化了 controller 的职责，文章提到的部分问题已经在框架层面引导开发者避免。
	后续 ember 可能会引入’routable components‘替代 controller

- [should we use ctrl !!!](https://emberigniter.com/should-we-use-controllers-ember-2.0/)

### access controller in view 
1. how access ..... (2.x 已经不再允许访问 this.get('controller')._targetObject )
	router 可通过 this.controllerFor('xx') get controller / this.controller 
 通过 action 与组件交互

### handling state in controller 

router controller  is  singleton
/person/:id 
	如果在路由 person 的 controller 中设置是否删除的状态，在切换 id 时，由于 controller 是共享的，所以会保留这个状态，产生非预期效果。但可以在 router 的 setupController/resetController 中重置默认状态。问题是一方面状态管理分散，另一方面 如果场景比较复杂，会有大量的临时状态需要重置。

方案:
  就像上面的场景， 封装到单独的组件中维护该状态（对外暴露 action）。并且配合 route，为 edit 增加新的路由。
  (其他：ng2 中组件有相应的 hook 去处理)


- [](http://gregbabiars.com/case-against-ember-controllers/)

	另外，对于app级别(long-lived)的state，由于component生命周期短暂，可以保持在service中。
	
	- [](https://dockyard.com/blog/2015/12/07/best-practices-service-backed-components)


### thinking in ember way 

extend < mixin  < reopenClass

about  binding and render :  

		ember 通过比对 模板上下文的变量 来决定是否render dom （或者后面的vdom？)
		react 通过比对 props、state决定是否render vdom；通过diff vdom 来 update view；

默认单向，及通过 mut 的双向绑定 :
	
	{{input value=(mut (get bootstrap 'profile.type') ) }}  // two way binding 
	{{input value=(get bootstrap 'profile.type')  }} //  one way 
	{{input value=val }} // two way 
	
	https://canary.ember-twiddle.com/d1e85bab28a62d2ccaaeecfff9cf8a71?openFiles=index.template.hbs%2C
	
** 何为双向数据绑定 ？ **
	
	

#### [should-we-use-ember-controllers!!!!](https://emberigniter.com/should-we-use-ember-controllers/)
 minimize controller: 
 - query parameters 
 -  connect route's model with  component

## references 

- [good flow！！！](https://emberigniter.com/5-essential-ember-2.0-concepts/)
- [ember news](https://emberigniter.com/)
- [ember blogs](https://dockyard.com/blog/categories/ember)
- [tips](http://colobu.com/2014/09/26/Emberjs-tips-tricks-and-best-practices/)
- [Building a complex web application with Ember.js 2.7!!](http://yoember.com/)

- [DDAU 理解精华, thinking in ember2](https://ruby-china.org/topics/28230?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
- [**ember watch rss**](http://emberwatch.com/)

- [](https://blog.instant2fa.com/choosing-ember-over-react-in-2016-41a2e7fd341#.gwjh10mss)

-[ why ember ...](https://emberway.io/ember-get-shit-done-36383c2ccc53#.lqdc8sxyd)
	
	> Stop thinking about the little details and start getting more done
	
- [an-in-depth-introduction-to-ember-js](https://www.smashingmagazine.com/2013/11/an-in-depth-introduction-to-ember-js/)
### demo
- [real-time chat](https://blog.pusher.com/real-time-chat-with-ember-2-and-pusher/)
- 

### 3rd ember 
- [awesome-ember](https://github.com/nmec/awesome-ember)
- [animated outlet](https://github.com/billysbilling/ember-animated-outlet)
- [ember-animation .推荐](https://github.com/ember-animation/liquid-fire)

- [ember-power-select](https://github.com/cibernox/ember-power-select)
- [ember-let](https://github.com/thefrontside/ember-let)
- [ember-inject-script]()
 -[ember-composable-helpers]()
 - [ember-engines]()  惰性按需加载、。。。
- [ember-concurrency](http://ember-concurrency.com/#/docs)

- [more addons ](https://emberobserver.com/categories/dev-tools)
- [sparkles-component](https://github.com/rwjblue/sparkles-component)

#### form validate 

- [ember-cp-validations](https://github.com/offirgolan/ember-cp-validations)

- [ember-changeset !!!](https://github.com/DockYard/ember-changeset)
- [ember-buffered-proxy](https://github.com/yapplabs/ember-buffered-proxy)

- [ember-changeset-validations](https://github.com/DockYard/ember-changeset-validations)	
- [ember-validations](https://github.com/DockYard/ember-validations)

#### es7 

- [es7-decorators](https://github.com/rwjblue/ember-computed-decorators)
> ember getter的 懒执行特性貌似被打破（如果函数传递依赖参数）




### ember glimmer 

- [解释 Glimmer 内部原理的系列视频集合](https://www.youtube.com/playlist?list=PLpAr6J-75N24C-XQgIUDMtcgaurV4GDTZ)
- [Yehuda 解释 Glimmer 原理的文章，基本上就是 EmberConf 内容的浓缩精华版](http://yehudakatz.com/2017/04/05/the-glimmer-vm-boots-fast-and-stays-fast/)


