/*1、连接数据库 */
//引入md5加密模块
const md5 = require('blueimp-md5')

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

/*得到对应特定集合的Model*/
//定义Schema(描述文档结构)
const userSchema = mongoose.Schema({
    //指定文档的结构：属性名/属性值/属性值的类型/是否必须的/默认的
    username: {type: String, required: true}, //用户名
    password: {type: String, required: true}, //密码
    type: {type:String, required: true},  //用户类型：workers/boss
    header: {type:String}
})

//定义Model
const UserModel = mongoose.model('user', userSchema)  //集合名称为：users

/*通过Model或其他实例对象对集合数据进行CRUD操作 */
//通过Model实例的save()添加数据
function testSave(){
    //创建UserModel的实例
    const userModel = new UserModel({username: 'Jason', password: md5('123456'), type: 'worker'})
    //调用save()保存
    userModel.save(function (error, user) {
        console.log('save()', error, user)
    })
}
//testSave()

//通过Model的find()/findOne()查询多个或一个数据
function testFind() {
    //查询多个
    UserModel.find(function (error, users) {
        //得到的是包含所有匹配文档对象的数组，如果没有任何数据则返回空数组
        console.log('find()', error, users)
    })
    //查询一个
    UserModel.findOne({'username':'Tom'}, function (error, user) {
        //得到的是匹配的文档对象，如果没有匹配的就是null
        console.log('findOne()', error, user)
    })  
}
//testFind()

//通过Model的findByIdAndUpdate()更新某个数据
function testUpdate(){
    UserModel.findOneAndUpdate({_id: '5d8d6c97a3964b2c285e896b'},
    {password: '1234566'},function (error, oldUser) {
        console.log('findByIdAndUpdate()', error, oldUser)
    })
}
//testUpdate()

//通过Model的remove()删除匹配数据
function testDelete() {
    UserModel.deleteMany({_id: '5d8d661b929abc2efc70762b'}, function(error, doc) {
        console.log('deleteMany', error, doc)  
        //{n：1， ok:1, deleteCount:1}  n表示删除数量，ok表示操作成功,deleteCount表示删除数量
    })
}
//testDelete()