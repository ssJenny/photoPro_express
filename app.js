/**
 * Created by Administrator on 2017/6/27.
 */
var express = require("express");
var router = require("./controller")

var app = express();

//设置模板引擎
app.set("view engine","ejs");

//静态化路径
app.use(express.static("./public"));

app.get("/", router.showIndex);
app.get("/:photoname", router.showPhoto);



app.listen(5000);