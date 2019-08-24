var path = require('path');

//规范化路径
console.log(path.normalize('/asd/tsste/sae/..'));

//连接路径
console.log(path.join('/test/..', 'abc/deg'));

//解析为绝对路径
console.log(path.resolve('/foo/bar', './baz'));

//判断是否为绝对路径
console.log(path.isAbsolute('e:/projects/node_demo/path.js'));

//将绝对路径转为相对路径
console.log(path.relative('e:/projects/node_demo/path.js', 'e:/projects/node_demo/os.js'));

//返回路径中代表文件夹的部分
console.log(path.dirname('input.txt'));

//返回路径最后部分
console.log(path.basename('e:/projects/node_demo/path.js'));

//返回路径中文件的后缀名
console.log(path.extname('e:/projects/node_demo/path.js'));

//返回路径字符串的对象
console.log(path.parse('e:/projects/node_demo/path.js'));

//从对象中返回字符串，与path.parse相反
console.log(path.format({
    root: 'e:/',
    dir: 'e:/projects/node_demo',
    base: 'path.js',
    ext: '.js',
    name: 'path'
}));