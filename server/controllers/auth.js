const User = require('../models/auth')
const jwt = require('jsonwebtoken')
const sgEmail = require('@sendgrid/mail')

sgEmail.setApiKey(process.env.SENDGRID_API_KEY)

exports.register = (req, res) => {
    res.send('Hello from Arif register')
}

//Register a user => /api/register
exports.registerUser = async (req, res) => {
//   const user = await User(req.body)


const { name, email, password } = req.body

// console.log(req.body)

const user = await User.findOne({email}).exec();

    if(user){
        return res.status(400).json({
            error: 'Email is taken'
        })
    } else {

    const token = jwt.sign({name, email, password}, process.env.JWT_SECRET, {expiresIn: '10m'})

    //send email

    const emailData = {
        from: 'flipcute.com@gmail.com',
        to: email,
        subject: 'Account activation link',
        html:`
            <p>Please use the following link to activate your account</p>
            <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
            <hr />
            <p>This meal may contain senetive information</p>
            <p>${process.env.CLIENT_URL}</p>
        `
    }


            sgEmail.send(emailData).then(() => {
                console.log('Message sent')
            }).catch((error) => {
                console.log(error.response.body)
                // console.log(error.response.body.errors[0].message)
            })
        
        }        

//   console.log(user)
//   user.save()
//   res.send(user)
} 


