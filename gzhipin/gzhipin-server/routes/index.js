var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
1、需求：
    - 后台应用运行终端指定为4000
    - 提供一个用户注册的接口
        - path为/register
        - 请求方式为：POST
        - 接收username和password参数
        - admin是已经注册用户
        - 注册成功返回：{code:0, data:{_id:'abc',username:'xxx',password:'123}}
        - 注册失败返回：{code:1, msg:'此用户已存在'}
*/
router.post('/register',function(req,res){
  //获取请求参数
  const {username,password} = req.body;
  //处理
  if(username == 'admin') {
    //注册失败
    res.send({code:1, msg:'此用户已存在'})
  } else {
    //注册成功
    res.send({code:0, data:{_id:'abc',username:'xxx',password:'123'}})
  }

})


module.exports = router;
