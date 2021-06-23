const User = require('../model/register')
//test route
exports.testAuth = (req, res,) => {
    res.status(200).json({
        success: true,
        message: 'how are you'
    })
}

//register route
exports.register = async (req, res) => {
    const user = await User(req.body)
    console.log(user)
    user.save()
    res.send(user)
}