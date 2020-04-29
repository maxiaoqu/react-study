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




> ## Ant Design UI的使用

### 具体参考官网
https://ant.design/docs/react/introduce-cn

### 需要注意的是
#### create-react-app创建的项目
1、运行npm run eject:拉取react的配置文件
2、安装使用 babel-plugin-import：npm install babel-plugin-import --save-dev
3、在根目录下的package.json下的bable中添加相应代码
```
"babel": {
    "presets": [
      "react-app"
    ]
}

修改成
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
        ["import", {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": "css"
        }]
    ]
}
```