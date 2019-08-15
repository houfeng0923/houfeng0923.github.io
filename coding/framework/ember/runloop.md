
### queues

// => ["actions", "routerTransitions", "render", "afterRender", "destroy"]

// sync 废弃


## 哪些场景需要理解运行循环？

最常见的问题是集成一个非 Ember 接口的异步回调。例如：

AJAX 回调
DOM 更新和事件回调
Websocket 回调
setTimeout 和 setInterval 回调
postMessage 和 messageChannel 事件处理器

dom 操作更新场景：
使用运行循环，可以为此类优化问题实现应用范围内的全局优化，而不单单是一个个场景。

在回调被出发时，应该开始一个运行循环。
some
Is This Executed At All Times?
No. Essentially the loop will run in response to certain user and timer events. This is not the same as a while(true) loop on a server otherwise control would never be given back and the application would hang.

## case

```
function logFour() {
  console.log('processing: task 4')
}
console.log('before Ember.run'); // 1
Ember.run(function(){
  Ember.run.schedule('actions', function task1(){
    console.log('processing: task #1');
  });

  Ember.run.schedule('afterRender', function task3(){
    Ember.run.schedule('actions', () => { console.log('next queue task') })
    console.log('processing: task #3');
  });

  Ember.run.scheduleOnce('afterRender', logFour);
  Ember.run.scheduleOnce('afterRender', logFour);
  Ember.run.scheduleOnce('afterRender', logFour);

  Ember.run.schedule('render', function task2() {
    console.log('processing: task #2');
  });

  console.log('end of callback'); // 2
});

console.log('after Ember.run'); // end


//
before Ember.run
end of callback
processing: task #1
processing: task #2
processing: task #3
processing: task 4
next queue task
after Ember.run

// if no Ember.run:

before Ember.run
end of callback
after Ember.run
processing: task #1
processing: task #2
processing: task #3
processing: task 4
next queue task

```

> 若当前执行上下文中没有打开的 runloop 实例,那自动开启(begin)一个实例,并在 next(tick) 执行(flush) 所有队列中的 task(end).(异步)
> 若当前执行上下文存在 runloop, 在 run 执行末尾 会执行所有 task(同步).


- [demo](http://jsfiddle.net/6p6XJ/399/)

- [问题demo](https://machty.s3.amazonaws.com/ember-run-loop-visual/index.html) or  [link](https://s3.amazonaws.com/emberjs.com/run-loop-guide/index.html)
> `after run` 执行时机不对(动画演示需要异步)




**注意**

- 在同一 runloop 中，可以继续添加 task，同时保持 tasks 的执行序列
- Ember.run() 同步执行 queue tasks。
- autorun 的 schedule：
```
run.schedule
run.scheduleOnce
run.once
```
异步执行`end`


[动画对比](http://jsfiddle.net/jashkenas/CGSd5/)
[使用run的差异demo](http://jsfiddle.net/machty/6p6XJ/328/),可以体会下 runloop 的存在。



## 延伸

- [guide](https://guides.emberjs.com/v2.7.0/applications/run-loop/)
- https://teamgaslight.com/blog/a-beginners-guide-to-the-ember-run-loop
- http://stackoverflow.com/questions/13597869/what-is-ember-runloop-and-how-does-it-work
- http://www.programwitherik.com/why-you-should-care-about-the-ember-run-loop/
- https://github.com/eoinkelly/ember-runloop-handbook#enough-with-the-mousemove-already