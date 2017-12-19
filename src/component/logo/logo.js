/**
 * Created by amyqing719@gmail.com on 19/12/2017.
 */
import React,{Component} from 'react'
import logoImg from './logo.jpg'
import './logo.css'

class Logo extends Component{
    render(){
        return (
            <div className="logo-container">
                <img src={logoImg} alt=""/>
            </div>
        )
    }
}
export default Logo;