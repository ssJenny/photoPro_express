/**
 * Created by Administrator on 2017/6/27.
 */

var file = require("../model/file.js");
var fs = require("fs")
var path = require("path");
var formidable  = require("formidable");
var sillytime = require("silly-datetime");


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

exports.upLoadPics = function (req, res,next) {
    var num = parseInt(Math.random()*89999+10000);
    var uploadtime = sillytime.format(new Date(), 'YYYYMMDDHHmm');
    var form = new formidable.IncomingForm();
    form.uploadDir = "./temp";
    form.parse(req, function(err, fields, files) {


        var extname = path.extname(files.imgSrc.name);

        fs.rename("./" + files.imgSrc.path,"./upload/" +fields.dirName +"/" +uploadtime+num+extname,function(err,data){
            if(err){
                next();
               console.log("失败");
               return;
            }
        })

        res.redirect("/" + fields.dirName)
        res.end();
    });
}

exports.showErr = function (req, res) {
    res.render("404");
}