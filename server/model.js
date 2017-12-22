/**
 * Created by Amy on 2017/12/22.
 */
const DB_URL = 'mongodb://localhost:27017/react-router-redux'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function () {
    console.log("mongo connect success")
})