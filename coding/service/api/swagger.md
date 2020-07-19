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

相关规范: openApi schema / json schema

> OpenAPI通常被描述为JSON Schema的扩展，但是这两个规范随着时间的推移而发生了变化并且独立发展。 OpenAPI v2基于JSON Schema草案v4，带有很长的偏差列表，但OpenAPI v3缩小了该列表，增加了对草案v5的支持并使差异列表更短。 尽管OpenAPI v3缩小了差距，但JSON Schema差异问题尚未得到彻底解决，随着JSON Schema的新草案问世，随着时间的推移，分歧实际上越来越差。 目前，OpenAPI仍处于草案5，JSON Schema已发布草案8。


## 相关方案

- [RAP](http://rap2.taobao.org/)
- [YApi-高效、易用、功能强大的可视化接口管理平台](http://yapi.demo.qunar.com/)
- [NEI - 接口管理平台](https://nei.netease.com/)
- [Macaca DataHub](https://macacajs.github.io/macaca-datahub/zh/)
- [phodal/fe](https://github.com/phodal/fe/blob/master/chapters/chapter-13.md)
- [Mock-高效、易用、功能强大的可视化接口管理平台](https://mock.yonyoucloud.com/)
- [xbl/raml-mocker](https://github.com/xbl/raml-mocker)
- [Insomnia api文档创建 桌面工具](https://insomnia.rest/)

## refs

- [使用Swagger生成RESTful API文档](https://www.xncoding.com/2017/06/09/web/swagger.html)
- [Introduction · Swagger从入门到精通](https://huangwenchao.gitbooks.io/swagger/content/)
- [swagger-ui](https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/usage/installation.md)
- [doc tools: sourcey/spectacle](https://github.com/sourcey/spectacle)
- [doc tools: Redocly/redoc](https://github.com/Redocly/redoc)
- [bittrex api doc](https://github.com/Bittrex/bittrex.github.io)

> 推荐使用 redoc工程 生成工具[Redocly/create-openapi-repo](https://github.com/Redocly/create-openapi-repo), 模板更新为[Rebilly/RebillyAPI](https://github.com/Rebilly/RebillyAPI/blob/master/web/index.html)
> [redocpro](https://redocpro.redoc.ly/docs/basic-usage/)

## others

[Raml](https://raml.org/) .Swagger 与 RAML 相比，RAML 解决的问题是设计阶段的问题，而 Swagger 则是侧重解决现有 API 的文档问题.

- [API 设计: RAML、Swagger、Blueprint三者的比较 - 沧海一滴 - 博客园](https://www.cnblogs.com/softidea/p/5728952.html)
