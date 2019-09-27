import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'

import './login.less'
import { reqLogin } from '../../api/index.js'
/*
登录的路由组件
*/

class Login extends Component {

    //获取表单数据
    handleSubmit = (event) => {

        //阻止事件的默认行为
        event.preventDefault()

        //对所有表单字段进行校验
        this.props.form.validateFields(async (err,values) => {
            //校验成功
            if(!err) {
                //请求登录
                const {username, password} = values
                try {
                    const response = await reqLogin(username, password)  //reqLogin返回的是promise对象
                    console.log(response.data)
                } catch(error) {
                    console.log('请求出错了', error)
                }  
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

    /*
    对密码进行验证
    */
    validatePwd = (rule, value, callback) => {
        console.log('validatePwd()', rule, value)
        if(!value) {
            callback('密码必须输入')
        } else if(value.length < 4) {
            callback('密码至少4位')
        } else if(value.length > 12) {
            callback('密码至多12位')
        } else if(!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('密码必须是英文、数字、下划线组成')
        } else {
            callback()   //验证通过
        }
    }

    render() {

        //获取具有强大功能方法的表单对象form
        const form = this.props.form
        const { getFieldDecorator } = form;

        return (
            <div className="login">
                <header className="login-header">
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {
                                getFieldDecorator('username', {
                                    //声明式验证：直接使用定义好的规则进行验证
                                    rules:[
                                        {required: true, whitespace: true, message: '用户名必须输入'},
                                        {min: 4, message: '用户名至少4位'},
                                        {max: 12, message: '用户名至多12位'},
                                        {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字、下划线组成'},
                                    ],
                                    initialValue : 'admin'
                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名"
                                    />
                                )
                                
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    rules: [
                                        {
                                            validator:this.validatePwd
                                        }
                                    ]
                                })(
                                    <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}

/*
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


*/

/*
作用：包装Form组件生成一个新的组件：Form(Login)
新组件会向Form组件传递一个强大的对象属性：form
*/
const WrapLogin = Form.create()(Login) 
export default WrapLogin
/*
1、前台表单验证
2、收集表单数据
*/