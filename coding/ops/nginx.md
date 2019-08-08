
## config

nginx -s reload/stop
nginx -t



## nginx 热部署

master 读取配置,重新生成新的 worker 进程,优雅 结束旧的 worker.

## 性能

Nginx 采用了 Linux 的 epoll 模型


高可用方案: Keepalived + nginx

[proxy_pass] 反向代理 与  [upstream] 负载均衡




## references

- http://www.cszhi.com/20120513/nginx_nginx-conf.html
- [nginx 与前端开发](https://juejin.im/post/5bacbd395188255c8d0fd4b2?utm_medium=fe&utm_source=weixinqun)