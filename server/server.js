const express = require('express')

const app = express(); 

const authRouter = require('./routes/auth')

console.log('from mizan')

app.use('/api', authRouter)


app.listen(8000, () => console.log("Server started"))