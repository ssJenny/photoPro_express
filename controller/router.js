/**
 * Created by Administrator on 2017/6/27.
 */

var file = require("../model/file.js");
//显示首页  通过exports暴露出去
exports.showIndex = function (req, res) {

    //res.send(): res.writeHead() 和 res.end() 的结合
    //res.render()渲染模板
    // res.send("show index")
   file.getDir(function (dirName) {
      // 渲染到模板引擎
      res.render("index",{
          photoDir: dirName
      });

   });
}

exports.showPhoto = function (req, res, next) {


    file.getPic(req.params.photoname,function (allImg) {
        // 渲染到模板引擎
        res.render("picture",{
            "photoname":req.params.photoname,
            "allImg": allImg
        });

    },next);
}

exports.showUpload = function (req, res) {
    file.getDir(function (dirName) {
        // 渲染到模板引擎
        res.render("upload",{
            photoDir: dirName
        });

    });
   // res.render("upload")
}
