const express = require('express')
const { testAuth, register } = require('../controllers/auth')

const router = express.Router()


router.get('/test', testAuth)
router.post('/register', register)


module.exports = router