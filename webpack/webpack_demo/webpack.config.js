const path = require('path'); //创建一个绝对路径

module.exports = {
    entry: './src/index.js', //入口文件，版本大于4.0默认以index.js文件为入口文件，所以可省略配置
    mode: 'development', //开发模式有development和production
    output: {
        filename: 'main.js', //输出文件
        path: path.resolve(__dirname, 'dist') //文件目录
            //path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
            //path.resolve([…paths])里的每个参数都类似在当前目录执行一个cd操作
    }
}