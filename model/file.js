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

            fs.stat("./upload" + files[i], function (err, stat) {
                if(files[i].isDirectory()){
                    dirName.push(files[i]);
                }
            })
            iterator(i + 1)
        })(0);
    })
}