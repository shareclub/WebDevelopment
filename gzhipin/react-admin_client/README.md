## 项目描述
1、此项目为一个前后端分离的招聘APP，包括前端应用和后端应用

2、包括用户注册/登录、招聘者/应聘者列表、实时聊天等模块

3、前端：使用React全家桶+ES6+Webpack等技术

4、后端：使用Node+express+mongodb+socketIO等技术

5、采用模块化、组件化、工程化的模式开发

## 技术选型
- 前台数据展现/交互/组件化：react全家桶/技术栈
    - react
    - react-router-dom
    - redux
    - antd-mobile
- 后台项目
    - node
    - express
    - mongodb
    - socket.io
- 前后台交互
    - ajax请求
        - axios
        - async/await
    - 测试API接口
        - postman
- 模块化
    - ES6
    - babel
- 项目构建/工程化
    - webpack
    - react-creat-app
    - eslint
- 其他相关库
    - bluimp-mds
    - js-cookie
    - rc-queue-anim

## 前端路由
- 注册
    - /register
    - /register.jsx
- 登录
    - /login
    - login.jsx
- 主界面：main.jsx
    - boss界面
        - /laoban
        - laoban.jsx
    - workers界面
        - /workers
        - worders.jsx
    - 消息列表界面
        - /message
        - message.jsx\
    - 个人中心界面
        - /personal
        - personal.jsx
    - boss信息完善界面
        - /bossinfo
        - boss-info.jsx
    - worders信息完善界面
        - /workersinfo
        - worders-info.jsx
    - 聊天界面
        - /chat/:userid
        - chat.jsx

## API接口
- 全称：前后端交互API接口
- 重要概念
    - API(接口)
    - 接口文档
    - 测试接口
    - 对接口
    - 调接口
    - 联调
    - 前后端分离
    - mock(模拟)数据
- 接口文档

## 开发过程
1、使用create-react-app(脚手架)搭建项目

- 简介：create-react-app是react官方提供的用于搭建基于react+webpack+es6项目的脚手架

- 操作：

`npm install -g create-react-app  //全局下载工具`

`create-react-app gzhipin-client  //下载模板项目`

`cd gzhipin`

`npm start  //访问：localhost:3000`

注意：create-react-app my-app默认使用的是npm安装资源，这样会导致下载很慢，甚至会导致报错，只需要将其修改为淘宝源即可

`npm config set registry https://registry.npm.taobao.org`

`npm config get registry  //输出https://registry.npm.taobao.org表示设置成功`

`create-react-app my-app  //再次使用命令搭建app即可`

## 编码测试与打包发布项目
1、编码测试

`npm start` 

访问：http://localhost:3000

编码，自动编译打包刷新（live-reload），查看效果

2、打包发布

`npm run build`

`npm install -g serve`

`serve build`

访问：http://localhost:5000

## 项目源码目录设计
- src
    - api   //ajax相关
    - assets  //公用资源
    - components   //非路由组件
    - config     //配置
    - pages    //路由组件
    - utils    //工具模块
    - App.js   //应用根组件
    - index.js   //入口js

App.js文件代码：

```
import React, {Component} from 'react'

/*
应用根组件
*/
export default class App extends Component {
    
    render() {
        return <div>App</div>
    }
}

```

index.js文件代码：

```
/*
入口js
*/
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

//将App组件标签渲染到index页面的div上
ReactDOM.render(<App />, document.getElementById('root'))
```

## 引入antd

1、安装yarn(如果不想用yarn安装antd则不需要安装)

yarn是一个快速、可靠、安全的依赖管理工具

`npm install -g yarn`

2、下载组件库包

`yarn add antd`

3、使用教程

[https://ant.design/docs/react/getting-started-cn](https://ant.design/docs/react/getting-started-cn)

## 实现组件的按需打包

1、下载依赖模块

`yarn add react-app-rewired customize-cra babel-plugin-import`

2、定义加载配置的js模块：在根目录创建config-overrides.js

```
 const { override, fixBabelImports } = require('customize-cra');

 module.exports = function override(config, env) {
   // do stuff with the webpack config...
   return config;
 };

 module.exports = override(
     //针对antd实现按需打包：根据import来打包（使用babel-plugin-import
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: 'css',   //自动打包相关的样式
   }),
 );
```

3、修改package.json

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

//改为

"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```

## 自定义antd主题

需求：使antd的默认基本颜色从blue变为green

1、下载工具包

`yarn add less less-loader`

2、修改config-overrides.js

```
 const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
   style: true,
  }),
  //使用less-loader对源码中的less的变量进行重新定义
 addLessLoader({
   javascriptEnabled: true,
   modifyVars: { '@primary-color': '#1DA57A' },  //修改主题颜色
 }),
);
```

## 引入路由

1、下载路由包react-router-dom

`yarn add react-router-dom`

2、搭建路由
- pages
    - admin
        admin.jsx
    - login
        login.jsx 

修改App.js文件

```
import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'
/*
应用根组件
*/

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch> {/*只匹配其中一个*/}
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>  
                </Switch>
            </BrowserRouter>
        )
       
    }
}

```

## 开始进行页面布局（自定义）


## 高阶组件和高阶函数
1、高阶函数
    1). 一类特别的函数
        a.接受函数类型的参数
        b.返回值是函数
    2）.常见
        a.定时器：setTime()/setInterval()
        b.Promise:Promise() => {}) then(value => {}, reason => {})
        c.数组遍历相关的方法：forEach()/filter()/map()/reduce()/find()/findIndex()
        d.函数对象的bind()
        e.Form.create()()/getFieldDecorator()()
    3).高阶函数更加动态，更加具有扩展性


2、高阶组件
    1).本质是一个函数
    2).接收一个组件（被包装组件），返回一个新的组件（包装组件），包装组件会向被包装组件传入特定属性
    3).作用：扩展组件功能
    4).高阶组件也是高阶函数：接收一个组件函数，返回是一个新的组件函数

## 使用postman工具测试后台接口

安装接口文档进行测试，如果还没搭建好服务器，可以使用github上的测试接口https://api.github.com/users/itstrive


## 前后台交互Ajax

1、下载依赖包

`yarn add axios`

2、封装ajax请求模块

> 在github找axios库，里面有开发文档 https://github.com/axios/axios

在api目录创建ajax.js和index.js

```
//ajax.js
import axios from 'axios'

export default function ajax(url, data={}, type='GET') {
    if(type == 'GET') {  //发送GET请求
        return axios.get(url, {      //配置对象
            params: data     //指定请求参数  
                
        })
    } else {   //发送POST请求
        return axios.post(url, data)
    }
}
```

```
//index.js
import ajax from './ajax'

//登录
export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST')

//添加用户
export const reqAddUser = (user) => ajax('/manage/user/add', user, 'POST')
```

3、前台login.jsx调用ajax模块

```
//获取表单数据
    handleSubmit = (event) => {

        //阻止事件的默认行为
        event.preventDefault()

        //对所有表单字段进行校验
        this.props.form.validateFields((err,values) => {
            //校验成功
            if(!err) {
                //请求登录
                const {username, password} = values
                reqLogin(username, password).then(responese => {
                    console.log('成功了', responese.data)
                }).catch(error => {
                    console.log('失败了', error)
                })
            } else {
                console.log('校验失败！')
            }
        })
        //得到强大的form对象
        const form = this.props.form
        //获取表单项的输入数据
        const values = form.getFieldsValue()
        console.log("handleSubmit" , values)
    }
```

4、设置代理package.json中添加代码

> 将所有请求自动转发到http://localhost:5000

`"proxy": "http://localhost:5000"`

5、修改请求接口文件index.js

```
import ajax from './ajax'

const BASE = ''   //请求不限于http://localhost:3000
//登录
export const reqLogin = (username, password) => ajax(BASE + '/login', {username, password}, 'POST')

//添加用户
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST')
```

## 使用async和await简化promise对象的使用

```
this.props.form.validateFields(async (err,values) => {
            //校验成功
            if(!err) {
                //请求登录
                const {username, password} = values
                try {
                    const response = await reqLogin(username, password)  //reqLogin返回的是promise对象
                } catch(error) {
                    console.log('请求出错了', error)
                }  
            } else {
                console.log('校验失败！')
            }
        })
```

async和awit

1、作用：简化promise对象的使用：不用再使用then()来指定成功、失败的回调函数，以同步编码（没有回调函数了）方式实现异步流程

2、哪里写await:在返回promise的表达式的左侧写await，不想要promise，想要promise异步执行成功的value数据

3、哪里写async：await所在函数（最近的）定义的左侧

