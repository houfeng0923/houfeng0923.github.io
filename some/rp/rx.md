## RxJava

RX: 处理异步数据流、事件流的编程模型.

Observable(可观察序列)  + 操作符（LINQ）+ Schedulers（并发支持? Observable 的特殊实现）


### VS Iterable


### Observables

- 冷 、热

	一个"热"的Observable可能一创建完就开始发射数据，因此所有后续订阅它的观察者可能从序列中间的某个位置开始接受数据（有一些数据错过了）。一个"冷"的Observable会一直等待，直到有观察者订阅它才开始发射数据，因此这个观察者可以确保会收到整个数据序列。

- ConnectableObservable  需要调用 connect() 方法

- Single （Observable） 变种

	Single只会调用这两个方法(onSuccess/onError)中的一个，而且只会调用一次，调用了任何一个方法之后，订阅关系终止。

	Observable.create() : Single  . // 但方法前面 不只有2个方法？


	https://mcxiaoke.gitbooks.io/rxdocs/content/Single.html


### references

- http://mushuichuan.com/2015/12/11/rxjava-operator-1/
- https://mcxiaoke.gitbooks.io/rxdocs/content/



### vs rx.js

异步的 `lodash` (或者说是 `ramda`)

zip / zipWith

map




- [可能是最好的 Rx 初学者教程](https://zhuanlan.zhihu.com/p/25552305)
- [Using RxJS with React.js](https://medium.com/@fahad19/using-rxjs-with-react-js-part-3-dispatching-events-from-component-1808d383cbf0)