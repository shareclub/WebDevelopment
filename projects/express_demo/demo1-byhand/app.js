//导入模块
var express = require('express');

//生成对象
var app = express();

//应用层中间件
app.use(function(req, res, next) {
    console.log('hello world');
    next();
});

app.use(function(req, res, next) {
    console.log('welcome to shareclub');
    res.send('hello world');
    next(); //如果注释next(),则不会继续执行下一个中间件函数
});

app.use(function(req, res, next) {
    console.log('最后一个中间件了');
});

app.listen(3000);