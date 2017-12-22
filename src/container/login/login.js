/**
 * Created by amyqing719@gmail.com on 19/12/2017.
 */
import React ,{Component} from 'react';
import Logo from '../../component/logo/logo'

import { Button,List, InputItem, WhiteSpace, WingBlank} from 'antd-mobile';

// const Button = require('antd/lib/button')
class Login extends Component{
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
    }
    register(){
        console.log(this.props)
        this.props.history.push('./register')
    }
    render(){
        return (
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List renderHeader={() => ''}>
                        <InputItem type="phone">
                            用户名
                        </InputItem>
                        <InputItem type="password">
                            密码
                        </InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary'>登录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>


                <h1>login Page</h1>
            </div>
        )
    }
}

export default Login