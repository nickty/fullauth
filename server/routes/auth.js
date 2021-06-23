const express = require('express')
const { register, registerUser } = require('../controllers/auth')

const router = express.Router()


router.get('/register', register)
router.post('/register', registerUser)


module.exports = router