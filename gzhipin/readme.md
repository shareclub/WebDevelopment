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

    
    