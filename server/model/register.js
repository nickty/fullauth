const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: 30
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
    }
})

module.exports = mongoose.model('User', UserScheme);