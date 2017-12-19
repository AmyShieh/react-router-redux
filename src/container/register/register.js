/**
 * Created by amyqing719@gmail.com on 19/12/2017.
 */
import React,{Component} from 'react';
import Logo from '../../component/logo/logo'
import {List,InputItem,Whote,WhteSpace,Button} from 'antd';

class Register extends Component{
    render(){
        return (
            <div>
                <Logo></Logo>
                <h1>register</h1>
                    <Button type="primary">登录</Button>
            </div>
        )
    }
}
export default Register;