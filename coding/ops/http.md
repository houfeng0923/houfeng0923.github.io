


## cache control

about Cache-Control , you can see [Caching best practices &amp; max-age gotchas](https://jakearchibald.com/2016/caching-best-practices/) for detail .

```
no-cache doesn't mean "don't cache", it means it must check (or "revalidate" as it calls it) with the server before using the cached resource. no-store tells the browser not to cache it at all. Also must-revalidate doesn't mean "must revalidate", it means the local resource can be used if it's younger than the provided max-age, otherwise it must revalidate.
```

- [浅聊HTTP缓存 (HTTP Cache) - 掘金](https://juejin.im/post/5bf3c28ee51d4514df5b7625#heading-30)
- [循序漸進理解 HTTP Cache 機制 | TechBridge 技術共筆部落格](https://blog.techbridge.cc/2017/06/17/cache-introduction/)