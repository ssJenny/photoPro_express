/**
 * Created by Administrator on 2017/6/27.
 */

var fs = require("fs");
// 读取文件，通过迭代器
exports.getDir = function (callback) {
    var dirName = [];

    fs.readdir("./upload", function (err, files) {
        (function iterator(i) {

            if(i == files.length){

                //使用回调函数将读取的目录返回
                callback(dirName);
                return;
            }

            fs.stat("./upload/" + files[i], function (err, stat) {

                if(stat.isDirectory()){
                    dirName.push(files[i]);
                }
                iterator(i + 1);
            })

        })(0);
    })
}

exports.getPic = function (photoname, callback,next) {

    var pathname ="./upload/"+photoname;
    var allImg = [];


    //读取文件目录
    fs.readdir(pathname, function (err, files) {
        if (err) {
            next();
            return;
        }
        (function iterator(i) {
            if (i == files.length) {
                //渲染模板到页面
               callback(allImg)
                return;
            }
            fs.stat(pathname  +"/"+  files[i], function (err, stat) {
                //根据文件属性归类到不同的数组
                if (!stat.isDirectory()) {
                    allImg.push(files[i]);
                }
                iterator(i + 1);
            })
        })(0);
    });

}