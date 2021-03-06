
## doc

typescript is structurally typed!! (not nominal typing, like java)


- https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Modules.html
- awesome-typescript
- [为什么说 TypeScript 不适合大型项目？](https://www.infoq.cn/article/Bmx*2UO9VRMTSbSWw4qX?utm_source=wechat_session)

- [When To Use TypeScript - A Detailed Guide Through Common Scenarios](https://khalilstemmler.com/articles/when-to-use-typescript-guide/)



## command


tsc -d ./src/utils/dom.ts // 生成 .d.ts 文件


如何 导出项目  d.ts？

```
"tsc --declaration --declarationDir ./dist --noEmitOnError && dts-bundle  --name multi-chart --main ./dist/index.d.ts --out index.d.ts --removeSource && delete-empty ./dist "
```

## config

### tslint.json


```rules

"only-arrow-functions": [true, "allow-declarations", "allow-named-functions"],

```




## 语法案例

相关资源：

- [Typescript有什么冷门但是很好用的特性](https://www.zhihu.com/question/276172039)
- [精读《Typescript2.0 - 2.9》 - 掘金](https://juejin.im/post/5b0b93386fb9a00a202ca9f1)
- [TypeScript Evolution | Marius Schulz](https://blog.mariusschulz.com/series/typescript-evolution)
- [Typescript 中的 interface 和 type 到底有什么区别 - 掘金](https://juejin.im/post/5c2723635188252d1d34dc7d#heading-5)
- [TypeScript 疑难杂症](https://zhuanlan.zhihu.com/p/82459341)

- [infer | 深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/tips/infer.html#%E4%BB%8B%E7%BB%8D)

### built-in types/interfaces

Readonly<>
ReadonlyArray<>

```
// 深层 readonly： const a = {} as const;
// or
type Immutable<T> = {
  readonly [K in keyof T]: Immutable<T[K]>;
};
```


Partial<>
Required<>
Pick<>
Record<>
NonNullable<>
...

Omit<>

```
type Partial<T> = {
    [P in keyof T]?: T[P];
};

type Required<T> = {
    [P in keyof T]-?: T[P];
};
```


### 已知对象、函数返回值 获取类型

type Person = typeof p1;

// type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type Person = ReturnType<typeof getPersonFn>



### 泛型 - Listener接口

todo: error

```

 type IEventMap = {
  [key: string]: Function;
}

class Evented<M extends IEventMap> {
  private _listeners: {
    [P in keyof M]: Function[];
  };

  constructor() {
    this._listeners = {};
  }

  on<K extends keyof M>(name: K, callback: M[K]) {
    let _listeners = this._listeners;
    if (!_listeners) return;
    let callbacks = _listeners[name];
    if (!callbacks) {
      callbacks = _listeners[name] = [];
    }
    callbacks.push(callback);
    return this;
  }
}


type ChartDataEventMap = {
  'xxx': () => void;
  'data': () => void;
}

class ChartData extends Evented<ChartDataEventMap> {

  constructor() {
    super();

  }
}

let d = new ChartData();

d.on('xxx', ) // auto suggestion work

// 遗留问题： IEventMap， ChartDataEventMap 如果是 interface，会报：

`Index signature is missing` 错误。目前版本 2.7.2


```

### 泛型

export function toMap<T extends { [key: string]: any }, M extends { [p: string]: T }>(arr: T[] = [], key: string = 'id'): M {
  return arr.reduce((acc, q) => ({ ...acc, [q[key]]: q }), {} as M);
}



### 扩展函数对象

```
interface IHelper {
  (): HTMLElement;   // 函数调用
  node(): HTMLElement;
  css(styles: Object): IHelper;
  addClass(cls: string[] | string): IHelper;
  removeClass(cls: string[] | string): IHelper;
  append(...nodes: HTMLElement[]): IHelper;
  appendTo(parent: HTMLElement): IHelper;
}

let node: HTMLElement;

const helper = (() => node) as IHelper;  // !

helper.node = () => node;
// ...

// or 使用  Intersection Types：  https://jsfiddle.net/hd0s1df6/


```

## 协变与逆变


infer : 表示在 extends 条件语句中待推断的类型变量。

```
type ParamType<T> = T extends (param: infer P) => any ? P : T;

type ReturnType<T> = T extends (...args: any[]) => infer P ? P : any;
```


### 用户自定义的类型保护

```


function _isHelper(raw: HTMLElement|IHelper): raw is IHelper {  // 类型谓词
  return _.isFunction(raw) && raw.constructor === NOOP;
}


function test(raw: HTMLElement)

	if (_isHelper(raw)) {
  		raw = raw(); // raw 已经缩减为具体类型 ： IHelper
    }

    document.appendChild(raw)

 }

```

### module type convertion 

```
const { create } = require('../index') as typeof import('babel-test');
```

### __proto__

```
Object.setPrototypeOf(context, parentContext);
Object.setPrototypeOf(context, new.target.prototype);

// https://zhongsp.gitbooks.io/typescript-handbook/content/doc/release-notes/TypeScript%202.2.html

```

### mixin

https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#support-for-mix-in-classes


### curry

- [typed-curry](https://github.com/TylorS/typed-curry/)

like memoize

```
export function memoize<U extends Function>(fn: U): U {
  return function() { fn();} as any;
}

```

### module  merging

a.d.ts + b.d.ts 同一个 module 定义会合并
module can also merge with interface, classes, enums.
but Classes cannot merge with other class, variables, or interfaces .



### 字符串字面量类型 与 枚举


const enum A {
  a
};

// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。


### namespace  与  module

https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Namespaces%20and%20Modules.html


module 一般使用在  .d.ts 文件中，用于声明组件库的 api，在 代码中通过 `/// <reference path="myModules.d.ts" />` 引入加载位置。
就可以通过 import 导入 模块了。譬如 node.d.ts 的使用。 [三斜线指令](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Triple-Slash%20Directives.html)

使用命名空间是为了提供逻辑分组和避免命名冲突。

接口静态属性：

export interface DrawOpt {
    isOverlay?: boolean;
}

export namespace DrawOpt {
    export const overlay = { isOverlay: true };
}

### 导入json、导入其他格式（webpack）

  declare module '*.css';

  // 2.9 已发布，可以直接导入 json  (--resolveJsonModule = true)

### Conditional types (from 2.8)


export type PropertyNames<T> = { [K in keyof T]: K }[keyof T];

// override Object.keys
export function keys<K extends keyof T>(obj: T):K[] { return Object.keys(obj) as K[];  }

// use
export function deepMergeObject<T>(target: T, source: Partial<T>, replace?: Array<PropertyNames<T>>): T {}

> some issues about [Object.keys](https://github.com/Microsoft/TypeScript/issues/20503)
> --keyofStringsOnly (maybe work in 2.9)


## 对 Generators 和 async/await 的类型定义

```
async function f() {
  for await (const x of fn1()) {
    console.log(x);
  }
}

async function f() {
  for (const x of await fn2()) {
    console.log(x);
  }
}

// 对于 fn1，它的返回值是可迭代的对象，并且每个 item 类型都是 Promise 或者 Generator。对于 fn2，它自身是个异步函数，返回值是可迭代的，而且每个 item 都不是异步的。举个例子：

function fn1() {
  return [Promise.resolve(1), Promise.resolve(2)];
}

function fn2() {
  return [1, 2];
}

```



## js 语法检测（配合vscode）

https://code.visualstudio.com/Docs/languages/javascript#_type-checking-and-quick-fixes-for-javascript-files

// @ts-check

// @ts-nocheck

// @ts-ignore



or // "javascript.implicitProjectConfig.checkJs": true


## optional-chaining

- [optional chaining in typescript](https://medium.com/inside-rimeto/optional-chaining-in-typescript-622c3121f99b)

### 扩展

- https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Declaration%20Merging.html
- [ts 体系调研报告](https://zhuanlan.zhihu.com/p/29564751?utm_source=wechat_session&utm_medium=social)




### debugger

- [evanw/node-source-map-support](https://github.com/evanw/node-source-map-support)
- https://medium.com/@dupski/debug-typescript-in-vs-code-without-compiling-using-ts-node-9d1f4f9a94a

```
# mocha test is ts file (ts-node)

{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Test",
      "cwd": "${workspaceRoot}",
      "env": {
        "TS_NODE_COMPILER_OPTIONS": "{\"module\":\"commonjs\",\"target\":\"es2015\",\"inlineSourceMap\":true,\"sourceMap\":true}"
      },
      "program": "${workspaceRoot}/node_modules/mocha/bin/_mocha",
      "args": [
        "-r",
        "ts-node/register",
        "--timeout", "999999",
        "--colors",
        "./test/**/*-spec.ts"
      ],
      "sourceMaps": true,
      "internalConsoleOptions": "openOnSessionStart"
    }
  ]
}


```



## webpack loader

now, ts-loader is faster then awesome-typescript-loader .

[构建性能](https://webpack.docschina.org/guides/build-performance/)优化,
use [@babel/plugin-transform-typescript](https://babeljs.io/docs/en/next/babel-plugin-transform-typescript.html)  应该也可以(但有很多限制):
Does not type-check its input. For that, you will need to install and set up TypeScript.

