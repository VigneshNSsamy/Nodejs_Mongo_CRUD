const mongoose = require('mongoose')
const dburl = 'mongodb+srv://admin_v:vicky2023@cluster0.4qefo8p.mongodb.net/college_db?retryWrites=true&w=majority'


module.exports = ()=>{
   return mongoose.connect(dburl)
}
