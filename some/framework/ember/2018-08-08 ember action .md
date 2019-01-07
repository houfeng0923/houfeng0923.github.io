#  closure actions


onclick={{action ''}} vs {{action ''}}

{{action ''}} :   按照 controller -> router 顺序查找 actions， ctrl actions 返回 true，则冒泡到 router actions。

onclick={{action ''}}： 仅查找 ctrl (或组件内)内 actions。 ？？


**closure actions** :
  <a  onclick={{action 'login'}}>xxx</a>
  {{my-button action=(action "sayHi")}}
   > 对应 action 可以接受 event
  // not 
   <button {{action "sayHi"}}>Salute</button> 
   {{my-button action="sayHi"}}



```
你可以去看 action helper 的源码

我以前看过一次，不过现在也有些模糊了，大致的区别是前者在 context.actions 里执行了对应的 handler 之后会 send 一个对应名称的 event，controller 收到（假设 action 在更内层的 component 里触发）执行，继续 send 给 route，route 收到执行，继续 send 给 ApplicationRoute

内置的 loading / error 其实也是这么处理的。因为这种 action 其实是用的 Ember.Evented 来分发的，所以执行的时候并不能获得原生的（或者 jQuery 的）event object

后者则很纯粹，它就是一个函数（但是由 action helper 做了高阶函数封装，而且可以多次封装，每一次封装的时候都 closure 了当前的 context 因此可以跨越多个 context 不断传递）通过 DOM 的 onxxx 绑定在元素身上

这种 action 执行时的 context 以当时为准，并不限于 controller / route / component，但是也不会像第一种 action 那样自动在框架内 bubble up
```
总之： 推荐使用 closure action，绑定执行上下文，避免不明确的语义环境。

参考相关： 
http://miguelcamba.com/blog/2016/01/24/ember-closure-actions-in-depth/

