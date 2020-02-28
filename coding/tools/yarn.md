

## cache

default（默认)：发起请求获取服务器版本 checksum 后对比本地缓存版本，如果 checksum 一致说明本地缓存与线上版本一致，使用本地版本。这个过程一般会返回 http status 304，在无网络下直接使用本地缓存 http status 200 。

--prefer-online：优先线上版本，直接发起请求下载线上版本，不对本地缓存做任何校验工作，但线上版本的其他依赖包可以使用缓存。这个过程一般会返回 http status 200 + 若干 304， 在无网络下会报错。

--prefer-offline：直接使用缓存版本，不对线上版本做任何校验工作。无论在有无网络的情况下都直接使用本地缓存，这个过程一般会返回 http status 200 。

我们不难看出最稳妥的方式是比对线上版本后确定是否需要更新缓存。

https://github.com/jf3096/npmrc

## lock


- lockfile-lint



## workspaces

> monorepos

```
yarn install --focus

yarn workspace package-xxx add react react-dom --dev
// lerna add react react-dom --dev --scope package-xxx
```


- [Ease the Transition to a Monorepo with Focused Workspaces](https://classic.yarnpkg.com/blog/2018/05/18/focused-workspaces/)
- [精读《Monorepo 的优势》 - 掘金](https://juejin.im/post/5cd8c1d6e51d456e55623bf2)

