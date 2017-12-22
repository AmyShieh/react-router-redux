/**
 * Created by Amy on 2017/12/22.
 */
import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
// @withRouter
class AuthRoute extends Component{
    componentDidMount(){
        const publicList = ['/login','/register'];
        const pathname = this.props.location.pathname;
        if(publicList.indexOf(pathname)!=-1){
            return null;
        }
        // 获取用户信息
        axios('/user/info')
            .then(res=>{
                if(res.status == 200){
                    if(res.data.code ===0){

                    }else{
                        this.props.history.push('/login')
                    }
                    console.log(res.data)
                }
            })
        // 是否登录

        // 用户的 type
        // 现在的url地址,login是不需要跳转的
        // 用户是否完善信息（选择头像，个人简介）

    }
    render(){
        return (
            <div></div>
        )
    }

}

export default withRouter(AuthRoute);