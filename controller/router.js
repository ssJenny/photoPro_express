/**
 * Created by Administrator on 2017/6/27.
 */

var file = require("../model/file.js");
//显示首页  通过exports暴露出去
exports.showIndex = function (req, res) {

    //res.writeHead() 和 res.end() 的结合
    //res.render()渲染模板
    // res.send("show index")
   file.getDir(dirName,{
       photoDir: dirName
    });
}

exports.showPhoto = function (req, res) {
    res.send("相册" + req.params.photoname)
}