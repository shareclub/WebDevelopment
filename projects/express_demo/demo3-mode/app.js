//导入模块
var express = require('express');
var bodyParase = require('body-parser');

//创建对象
var app = express();

//创建解析格式
var jsonParase = bodyParase.json();
var urlParase = bodyParase.urlencoded({ extened: false });

//获取json编码的请求体
app.post('/login', urlParase, function(req, res) {
    //如果请求体为空，返回400状态
    if (!req.body) return res.sendStatus(400);
    //否则返回内容
    res.send('Welcome  json' + req.body.username);
});

//获取url编码的请求体
app.post('/about', urlParase, function(req, res) {
    if (!req.body) return res.sendStatus(400);
    res.send('about url' + req.body.username);
});

app.listen(3000);