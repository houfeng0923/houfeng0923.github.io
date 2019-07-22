## :root

比 html 优先级高 ,另外并非等同于 html

在声明全局 CSS 变量时 :root 会很有用


对比:

```
data:text/html,<div><style>:root { background: green; } html { background: red !important; }</style></div>
```

```
data:application/xhtml+xml,<div xmlns="http://www.w3.org/1999/xhtml"><style>:root { background: green; } html { background: red !important; }</style></div>
```