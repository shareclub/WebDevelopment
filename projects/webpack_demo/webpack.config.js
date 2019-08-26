const path = require('path'); //创建一个绝对路径

module.exports = {
    entry: './src/index.js', //入口文件，版本大于4.0默认以index.js文件为入口文件，所以可省略配置
    mode: 'development', //开发模式有development和production
    output: {
        filename: 'bundle.js', //输出文件
    }
}