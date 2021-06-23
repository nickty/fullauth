const express = require('express')
const User = require('./models/auth')
const mongoose = require('mongoose')
require('dotenv').config()


const app = express(); 

mongoose.connect('mongodb://127.0.0.1:27017/auth')
.then( () => console.log('DB connected from Arif'))
.catch( (err => console.log))



app.use(express.json());

const authRouter = require('./routes/auth')

console.log('push from arif')


app.use('/api', authRouter)

const port = process.env.PORT || 5000
app.listen(port, () => console.log("Server started"))