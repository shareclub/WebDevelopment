## 使用脚手架快速搭建项目

1、创建项目文件目录gzhipin-server

2、安装express-generator

`npm i express-generator`

3、生成项目文件

`npm express -e`

4、安装依赖模块

`npm install`

5、运行

`npm start`

## 后台简单编码并测试

1、需求：
    - 后台应用运行终端指定为4000
    - 提供一个用户注册的接口
        - path为/register
        - 请求方式为：POST
        - 接收username和password参数
        - admin是已经注册用户
        - 注册成功返回：{code:0, data:{_id:'abc',username:'xxx',password:'123}}
        - 注册失败返回：{code:1, msg:'此用户已存在'}

1)修改端口号：bin/www

`var port = normalizePort(process.env.PORT || '4000');`

2）注册新路由：routers/index.js

```
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
```

2、重启服务器

`npm start`

3、使用postman发送请求测试接口

成功返回：

```
{
    "code": 0,
    "data": {
        "_id": "abc",
        "username": "xxx",
        "password": "123"
    }
}
```

失败返回：
```
{
    "code": 1,
    "msg": "此用户已存在"
}
```


## 后台应用自动重运行

1、问题：每次修改后台应用代码，需要重新运行命令修改才生效

2、解决：使用nodemon包

3、下载：npm install --save-dev nodemon

4、修改package.json 配置:"start":"nodemon ./bin/www"

5、重启服务器，每次修改代码保存后，就会自动重新运行


## 使用mongoose操作数据库

1、安装mongodb数据库

[https://www.runoob.com/mongodb/mongodb-window-install.html](https://www.runoob.com/mongodb/mongodb-window-install.html)

mongodb常用命令：

```
show dbs      //查看全部数据库
show collections    //查看当前数据库中的集合
user db_name    //切换数据库
db     //查看当前所在数据库
db.test.find()  //在test集合中查找所有数据
db.dropDatabase()   //删除当前数据库
db.collections.drop()  //删除当前集合


```

1、下载依赖包

`npm install --save mongoose blueimp-md5`

2、创建db/db_test.js

```
/*1、连接数据库 */
//引入mongoose
const mongoose = require('mongoose')
//连接指定数据库（URL只有数据库是变化的）
mongoose.connect('mongodb://localhost:27017/gzhipin_test',{ useNewUrlParser: true ,useUnifiedTopology: true })
//获取连接对象
const conn = mongoose.connection
//绑定连接完成的监听（用来提示连接成功）
conn.on('connected', function(){
    //连接成功回调
    console.log('数据库连接成功！')
})

//定义Model
const UserModel = mongoose.model('user', userSchema)  //集合名称为：users

/*通过Model或其他实例对象对集合数据进行CRUD操作 */
//通过Model实例的save()添加数据
function testSave(){
    //创建UserModel的实例
    const userModel = new UserModel({username: 'Tom', password: md5('123'), type: 'dashen'})
    //调用save()保存
    userModel.save(function (error, user) {
        console.log('save()', error, user)
    })
}
//testSave()


```




