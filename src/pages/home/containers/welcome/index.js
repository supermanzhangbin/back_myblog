import React from 'react';
import {
    Form, Icon, Input, Button, Checkbox,Layout,message
  } from 'antd';
import './index.scss';
import {hashHistory} from 'react-router';
import Dimensions from 'react-dimensions';
const {
    Header, Footer, Sider, Content,
  } = Layout;


class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account : '', // 账号
            password : '', // 密码
        }
    }

    inputChange = (type,e) => {
        if( type == 'account') {
            // 设置账号
            console.log(e.target.value);
            this.setState({
                account : e.target.value
            })
        } else if(type == 'password'){
            // 设置密码
            console.log(e.target.value);
            this.setState({
                password : e.target.value
            })
        }
    }

    goLogin = () => {
        // 开始登陆
        // 首先验证 账号与密码
        let {account, password} = this.state;
        console.log(account)
        console.log(password)
        if(account == '123456' && password == '413564') {
            // 说明账号密码正确
            // 路由到home页面
            localStorage.setItem('account',account);
            message.success('欢迎管理员进入系统!');
            setTimeout(() => {
                // 并设置个本地缓存
                hashHistory.push({
                    pathname:'/home'
                });
            }, 1000);
        } else {
            message.error('账号或者密码错误,请重试');
        }
    }

    render() {
        // const { getFieldDecorator } = this.props.form;
        const { containerWidth, containerHeight }  = this.props;
        console.log('containerWidth',containerWidth);
        console.log('containerHeight',containerHeight);
        return(
            <div className = "welcome">
                <Layout>
                    <Header style = {{background : '#16A4FF'}}>在线视频学习系统</Header>
                    <Content className="" style = {{paddingTop : '70px', height : containerHeight - 200 - 60 + 'px'}}>
                        <div className="">
                        <Form onSubmit={this.handleSubmit}  className="login-form">
                            <Form.Item>
                                <Input  onChange = {(e) => {this.inputChange('account',e)} } prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item>
                                <Input  onChange = {(e) => {this.inputChange('password',e)} } prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            </Form.Item>
                            <Form.Item>
                                <Checkbox>记住密码</Checkbox>
                            <a className="login-form-forgot" href="">忘记密码?</a>
                            <Button onClick = {this.goLogin} type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            Or <a href="">联系管理员!</a>
                            </Form.Item>
                        </Form>
                        </div>
                    </Content>
                    <Footer style = {{height : '200px', paddingBottom : '100px'}}>
                        Made with ❤ bin
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default Dimensions({
    getHeight() {
        return window.innerHeight;
    },
    getWidth() {
        return window.innerWidth - 30;
    },
})(Welcome);    