
### 浏览器初步性能测试结果：

浏览器json解析足够快，大多数场景不会影响性能（1,378,170/s）
firefox binary解析过慢，慢于json。。
纯binary BufferArray解析最快，（十几倍优势），protobuf解析相比json解析快3倍左右(仅限node环境)

https://jsperf.com/protobuf-vs-json-parse



faster decode lib: [dcodeIO/protobuf.js](https://github.com/dcodeIO/protobuf.js)

```
JSON#parse x 638,001 ops/sec ±2.09% (81 runs sampled)
Protobuf#decode x 1,914,976 ops/sec ±1.59% (77 runs sampled)
Protobuf#decode.tojson x 1,659,516 ops/sec ±0.94% (83 runs sampled)
```

### 总结: json vs protobuf

> 对于 java <-> java 的端到端场景；protobuf 有更明显的优势（无论是序列化还是反序列化及网络流量）
>
> 以下主体限定 web 浏览器 <-> java 的场景

#### java 端序列化

protobuf 序列化效率更高并节省传输流量成本；**如果对服务端性能 和流量 有更高要求，可以考虑protobuf**

#### web 端反序列化（基于 protobuf.js）

protobuf 反序列化速度在 chrome、safari 中与 json 基本相近（或微弱优势）;
在 firefox 和 ie 中 不如 json 效率高。

- [perf](https://jsperf.com/protobuf-perf2)


#### 传输

**与单纯的 json 序列化，protobuf 压缩流量的效果显著。**
即便如 erebor，采用自定义紧缩json，protobuf 仍然有字节优势；

另外， 部分浏览器(排除ie，safari部分)支持  websocket `Sec-WebSocket-Extensions` 来协商 payload 压缩；目前没找到相关工具测试，但类比 http zip 的话，应该可以接近 protobuf 的压缩效果。

目前 chrome firefox 初步测试工作正常；
与 protobuf 相比，**协议扩展压缩方式对客户端来说调试成本不变；时机成熟可以优先考虑！**
**另外需要考虑消息size 和压缩效果的关系！**
[websocket](./websocket.md)

## endian

protobuf 字节序采用 little-endian 的方式
protobufjs 在node平台系列号为Buffer，浏览器环境为 ArrayBuffer, 都是单字节数组 .


## refs

- [Beating JSON performance with Protobuf](https://auth0.com/blog/beating-json-performance-with-protobuf/)
- [InfoQ - 促进软件开发领域知识与创新的传播](https://www.infoq.cn/article/json-is-5-times-faster-than-protobuf)