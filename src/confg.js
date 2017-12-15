/**
 * Created by Amy on 2017/12/15.
 */
import axios from 'axios'
import {Toast} from 'antd'

axios.interceptors.request.use(function (config) {
    Toast.loading('加载中',0)
    return config
})

axios.interceptors.response.use(function (config) {
    Toast.hide();
    return config
})