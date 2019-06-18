


## cache control

about Cache-Control , you can see [Caching best practices &amp; max-age gotchas](https://jakearchibald.com/2016/caching-best-practices/) for detail .

```
no-cache doesn't mean "don't cache", it means it must check (or "revalidate" as it calls it) with the server before using the cached resource. no-store tells the browser not to cache it at all. Also must-revalidate doesn't mean "must revalidate", it means the local resource can be used if it's younger than the provided max-age, otherwise it must revalidate.
```
