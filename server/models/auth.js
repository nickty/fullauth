const mongoose = require('mongoose')   
const {Schema} = mongoose;

const UserSchema = new Schema ({

  name: {
      type: 'string',
      required: true
  },
  email: {
      type: 'string',
      unique: true,
      trim: true,
      required: true
  },
  password: {
      type: 'string',   
      required: true
  }


})
module.exports = mongoose.model('User', UserSchema)