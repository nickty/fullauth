const express = require('express')
const mongoose = require('mongoose')
const User = require('./model/register')

const app = express(); 

// database connected

mongoose.connect('mongodb://127.0.0.1:27017/auth')
    .then(() => console.log('Db connected'))
    .catch(error => console.log(error))
app.use(express.json());

const authRouter = require('./routes/auth')

console.log('from rajib')

app.use('/api', authRouter)


app.listen(8000, () => console.log("Server started"))