/**
 * Created by amyqing719@gmail.com on 19/12/2017.
 */
import React,{Component} from 'react';
import Logo from '../../component/logo/logo'
import {List,InputItem,WhiteSpace,Button,Radio} from 'antd-mobile';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            type: 'genius'
        }
        this.register = this.register.bind(this);
    }
    register(){
        this.props.history.push('/register')
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                <List>
                    <InputItem>用户名</InputItem>
                    <InputItem>密码</InputItem>
                    <InputItem>确认密码</InputItem>
                    <RadioItem checked = {this.state.type==='genius'}>应聘</RadioItem>
                    <RadioItem checked = {this.state.type==='boss'}>BOSS</RadioItem>
                </List>
                <WhiteSpace/>
                {/*<Button type='primary'>登录</Button>*/}
                {/*<WhiteSpace/>*/}
                <Button onClick={this.register} type='primary'>注册</Button>

                <h1>register</h1>
            </div>
        )
    }
}
export default Register;