
> 2016年12月26日

## problems in ng1


- component 概念不清晰 （directive ）

	- scope
	- attribute directive  /  component directive

- framework 功能不完整

	- route (access control)

- workflow (without webpack )

	- module : 项目模块管理（es6 / amd）与ng模块管理  (di)

		> ng1 的模块方案并没有解决当时业界在模块依赖管理和打包的问题（webpack还在萌芽），相反还增加了一定的障碍（虽然有变通的解法）

	- code spilting

-  开发体验

	- debug





## some point in ng2

## also based template

模板开发的优势:  关注点分离, 清晰控制流, 便于动静分离,编译出高性能


- [NG-VDOM：全新的 Angular 开发方式!!- 知乎](https://www.zhihu.com/people/trotyl/posts)

### zone.js

- [zonejs 暴力之美](http://www.cnblogs.com/whitewolf/p/zone-js.html)

除了对 browser/nodejs 异步 api 的重写（wrap），特别的，对于 on* 属性或者事件回调，zonejs are patched in Zone.js as EventTasks。[详细](https://github.com/angular/zone.js/blob/master/STANDARD-APIS.md)


利用 zone.js , 在 ApplicationRef 中，订阅 zone.onMicrotaskEmpty ，如此，ng 可以在异步逻辑结束后，刷新组件树（触发 root 组件的 detectChanges, 从根节点到子节点递归 CD）

另外，利用 rx.js ，绑定到模板中的 event 指令实例化后，会 订阅对应的 Observable（借助 rx.js 实现），在接收回调中，会触发 markForCheck; 之后再借助 zone.onMicrotaskEmpty， 执行组件树 CD。


通过以上 2 点，ng2+可以覆盖所有变更检测场景。

ps： 值得注意的是， 若加入第三方组件先于 zone 执行，并使用了 native 异步 api，那么 在 native 异步 api 内调用的变更，不会被感知到（包括在内部调用 zone wrapped 的 异步 api）。

在需要使用 native 异步 api 的时候，可以通过 ngZone，提供的 zone.runOutsideAngular(() => {} ).







### component

#### lifeCycle ？



- ngAfterViewChecked

### 关于性能

	main:

	- ng2 know the change

		> when:  ngZone
		> what: ??? diff pojo、 immutable、rxjs
	- ChangeDetectionStrategy!

		>  ng1(scope tree + dirty check)   ,  ng2(component tree + detectionStrategy, 类react)

#### ChangeDetectionStrategy.onPush

	ng2 中，对应 CheckOnce status， 在目前版本（6+）中，目前的理解是： CheckEnabled.
	一旦组件 cd策略 标记为 onPush，则在cd时，检测逻辑是：判断 Input 是否有引用变更。
	此外，一旦Input被父组件变更，在父组件更新逻辑中，会更新对应子组件的 state （ checked && onPush -> checkEnabled ）,
	进而使子组件再次执行CD。

#### 对 Change Detection 的理解

	首先，ng2 始终从组件树的根组件（root）开始执行 cd，默认情况下，会遍历整个组件树完成check (注意是所有组件)。
	另外，ng2 通过对组件 设置 ChangeDetectionStrategy.onPush （前提是开发者明确这么做的结果），来优化 CD，
	假如组件设置了onPush，根据该策略，仅当组件 Input 属性 引用变化时触发CD（无Input直接判定），若判定无变化则跳过该组件及对应的子组件树; 若判定 Input 有变化，则只更新认为变化了的 Input 绑定的组件(view).

	捕获state变化的时机：

	- 对于通过交互指令（click ...)绑定的回调，借助Zone（EventTasks），进而触发应用组件树CD(from root).
		猜测：markForCheck 导致 父链路 onPush 无效， 内部机制是？

	- 对于异步回调，借助 NgZone (onMicrotaskEmpty) ，ng2也可以捕获到变化，进而触发应用组件树CD(from root).
		[ApplicationRef](https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html#who-notifies-angular),

	Observers

	ChangeDetectorRef
		> ChangeDetectorRef 能让你更灵活地控制检测器的行为(如控制页面刷新的频率)

		- markForCheck： Marks all OnPush ancestors as to be checked. (标记，并不check)
		- detectChanges: Checks the change detector and its children. （以当前组件为root，检测）

		[两者 比较](https://stackoverflow.com/questions/41364386/whats-the-difference-between-markforcheck-and-detectchanges)

	others:

	- web worker for perf
	- JiT  vs  AoT [vs](https://segmentfault.com/a/1190000008739157)?
    - [没错，我就是要吹爆Angular](https://zhuanlan.zhihu.com/p/38430368)
    - [NG-VDOM：全新的 Angular 开发方式!!- 知乎](https://www.zhihu.com/people/trotyl/posts)


	references:

	- [cd demo!!](https://github.com/thoughtram/angular2-change-detection-demos)
	- [checklist for perf](https://github.com/mgechev/angular-performance-checklist)
	- [performance-optimization-in-angular-2-0](https://eyalvardi.wordpress.com/2016/12/20/performance-optimization-in-angular-2-0/)
	- [Angular2 脏检查过程](https://blog.csdn.net/u011256637/article/details/71056731)
	- https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html
	- https://pascalprecht.github.io/slides/angular-2-change-detection-explained/#/43
	- [ng2状态管理方案](https://www.zhihu.com/question/46662780/answer/102300661?utm_source=wechat_session&utm_medium=social)

### ngModule ?

### CDK

一套 ui 组件的基础架构.包含了 ui 无关的通用逻辑。脱胎于 @angular/material .

> The goal of the CDK is to give developers more tools to build awesome components for the web. This will be especially useful for projects that want to take advantage of the features of Angular Material without adopting the Material Design visual language. — Angular Team.

- [cdk](https://hackernoon.com/a-first-look-into-the-angular-cdk-67e68807ed9b)


#### Portal

> A Portalis a piece of UI that can be dynamically rendered to an open slot on the page. The “piece of UI” can be either a Component or a TemplateRef and the "open slot" is a PortalHost.

	- [cdk poral ](https://blog.angularindepth.com/angular-cdk-portals-b02f66dd020c)

