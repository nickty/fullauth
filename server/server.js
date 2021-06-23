const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()


const app = express(); 

mongoose.connect('mongodb://127.0.0.1:27017/auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, 
    useFindAndModify: false
})
.then( () => console.log('DB connected from Arif'))
.catch( (err => console.log))

app.use(express.json());

const authRouter = require('./routes/auth')


app.use('/api', authRouter)

const port = process.env.PORT || 5000
app.listen(port, () => console.log("Server started"))