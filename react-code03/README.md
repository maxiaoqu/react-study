## 安装
```
npm install
```

## 运行
```
npm start
```

## 打包
```
npm run build
```




> ## Fetch网络请求

### 需要学习的知识点
[fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
[开发模式跨域参考](https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md)
[mocks数据](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)


### Fetch Get请求--->>>(Demo01FetchGet.jsx)
1、怎么使用Fetch获取数据并渲染

### Fetch Post请求--->>>(Demo02FetchPost.jsx)
模拟post请求

### Fetch 跨域问题--->>>(Demo03FetchProxy.jsx)
参考create-react-app的相关文档

### Fetch 跨域问题（mock）--->>>(Demo04FetchProxyMock.jsx)
mock数据使用node，具体参考mock文件夹，
具体使用方法：
* 1、开启一个新的cmd窗口，
* 2、cd ./mock
* 3、node index.jsx
* 4、访问：http://localhost:3100/apiServe/list

### Fetch 封装--->>>(demo05FetchComApi.jsx)
具体参考utils/http.js文件、api文件夹，
