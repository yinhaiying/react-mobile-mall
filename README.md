# react-mobile-mall

使用 react 实现的移动端商城,前端页面采用 React+Redux；后端使用 Express + mongoodb。

## 部署踩坑

1. 使用 yarn 不支持--prefix 参数

```js
 "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false yarn install --prefix frontend && yarn build  frontend"
```

如上所示，本来使用 yarn 执行命令，结果发布时发现它找不到 build 命令，最后发现 yarn 不支持--prefix 参数，因此一直在当前目录中查找命令，导致报错。最后不得不换回 npm。
