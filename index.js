const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connectDB = require('./db')
const recordRout = require('./controller/student_controller')

app.use(bodyParser.json())
app.use('/api/records',recordRout)




connectDB()
.then(()=>{
    console.log('Database Connected ...');
    app.listen(3000,()=>{
        console.log('Server running at 3000');
    })
}).catch(err => console.error(err))