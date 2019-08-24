//用管道和链式来压缩和解压文件
var fs = require('fs');
var zlib = require('zlib');

//压缩文件
// fs.createReadStream('input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('input.txt.gz'));

//解压文件
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));


console.log("程序执行完成");