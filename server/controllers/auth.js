const User = require('../models/auth')

exports.register = (req, res) => {
    res.send('Hello from Arif register')
}

//Register a user => /api/register
exports.registerUser = async (req, res) => {
  const user = await User(req.body)

  console.log(user)
  user.save()
  res.send(user)
  

}