## Swagger



### restful api



> 不同于 soap api, restful api 依赖 http 方法,缺少类似 WSDL 的语言来定义提供者和使用者之间的请求和响应结构. 很多 api 提供者采用 word 文档等方式来记录 api 用法.


### swagger ?

**api 表达工具**

#### 生成文档?格式?

方式:


- 通过注解生成 doc (同步  / 污染)
- 通过 [swagger editor](http://editor.swagger.io/#/) 编写 api 文档的 yaml/json 定义, 之后通过 工具(如下) 生成 html 或 pdf 等格式文档


关于注解:

swagger 貌似是支持  javax.ws.rs 规范, 是否使用其注解?

相关工具:

- [swagger2markup:](https://github.com/Swagger2Markup/swagger2markup)
- [com.github.kongchen]

### openAPI 的关系?

[OpenAPI 规范](https://swagger.io/specification/)（以前称为 Swagger 规范）

- [什么是OpenAPI？Swagger是什么？ - Break易站](https://www.breakyizhan.com/swagger/2806.html)


### 示例




### 问题

- 使用哪种生成方式? 注解 or 手写 yaml?
- 如何提供文档? 服务提供 or 分发文档?



## 相关方案

- [RAP](http://rap2.taobao.org/)
- [YApi-高效、易用、功能强大的可视化接口管理平台](http://yapi.demo.qunar.com/)


## refs

- [使用Swagger生成RESTful API文档](https://www.xncoding.com/2017/06/09/web/swagger.html)
- [Introduction · Swagger从入门到精通](https://huangwenchao.gitbooks.io/swagger/content/)