/**
 * Created by Amy on 2017/12/22.
 */
const express  = require('express');
const userRouter = require('./user')
const app = express();
const mongoose = require('mongoose')

app.use('/user',userRouter)

// const User = mongoose.model('user',new mongoose.Schema({
//     user:{type:String,require: true},
//     age:{type:Number,require:true}
// }))

// 新增数据
// User.create({
//     user:'amy',
//     age:23
// },function (err,doc) {
//     if(!err){
//         console.log(doc)
//     }
// })


// app.get('/',function (req,res) {
//     res.send('<h1>Hello World</h1>')
// })

// app.get('/data',function (req,res) {
//     User.find({user:'amy'},function (err,doc) {
//         res.json(doc)
//     })
// })

app.listen(7190,function () {
    console.log('Node app start at port 7190')
})