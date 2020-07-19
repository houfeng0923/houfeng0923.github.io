## 状态管理

### 传统

各级 component/role/scope 实例化 state/model 维护;

维护 domain model 对象 (rich model)

案例:

- ember object (computed)
    配合 computed props 适合维护复杂领域模型对象

### 集中状态管理

root state , 统一维护

sub state -> model (list[poor model / simple vo])

案例:

- redux
    state 中维护基础数据, 衍生属性不在 state 中维护;
    一种是

### 集中 model


案例:

#### ember:

- ember service + object / ember-data

#### react

- mobx

    - [datx](https://github.com/infinum/datx/)
    - [mobx-collection](https://github.com/lukaszgrolik/mobx-collection)

- react  axiom (https://hackernoon.com/introducing-react-axiom-84bf37a50adb) , a lib that use models in react !

#### vue

- [vue-mc](http://vuemc.io/#introduction)n

- [mobx-vue](https://github.com/mobxjs/mobx-vue)

- [dwqs/vue-mobx](https://github.com/dwqs/vue-mobx)


## conclusion

> differences between them is the way they manage state. 

backbone: (manual)  I have no idea what I should re-render. You figure it out.

ember: (data binding)  I know exactly what changed and what should be re-rendered because I control your models and views.

angularjs:  I have no idea what changed, so I'll just check everything that may need updating.

react:  I have no idea what changed so I'll just re-render everything and see what's different now.

from [Change And Its Detection In JavaScript Frameworks](https://teropa.info/blog/2015/03/02/change-and-its-detection-in-javascript-frameworks.html)


other articles about reactivity:

- [What Is Reactivity?](https://www.pzuraq.com/what-is-reactivity/)