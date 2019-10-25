


[site](https://diandiandidi.info/)


## 自签名

```
sudo openssl req \
  -x509 \
  -nodes \
  -days 365 \
  -newkey rsa:2048 \
  -keyout example.key \
  -out example.crt
```

> req：处理证书签署请求。
> -x509：生成自签名证书。
> -nodes：跳过为证书设置密码的阶段，这样 Nginx 才可以直接打开证书。
> -days 365：证书有效期为一年。
> -newkey rsa:2048：生成一个新的私钥，采用的算法是2048位的 RSA。
> -keyout：新生成的私钥文件为当前目录下的example.key。
> -out：新生成的证书文件为当前目录下的example.crt。

> Common Name : localhost // or others

## references

- [Let&#39;s Encrypt，免费好用的 HTTPS 证书 | JerryQu 的小站](https://imququ.com/post/letsencrypt-certificate.html)
- [mkcert: 生成本地自签证书](https://github.com/FiloSottile/mkcert)