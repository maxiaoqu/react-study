// mock数据，模拟跨越
/*
* 1、开启一个新的cmd窗口，
* 2、cd ./mock
* 3、node index.js
* 4、访问：http://localhost:3100/apiServe/list
* */
const express = require("express")
const app = express();
const apiUrl = require("./apiUrl");

app.use("/", apiUrl);

app.listen(3100, function () {
    console.log("serve running at port 3100");
})