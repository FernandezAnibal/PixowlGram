const authCtrl = {}

const User = require('../models/Users');
const jwt = require('jsonwebtoken');

authCtrl.signUp = async (req, res, next) => {
    const {email, password} = req.body;
    const user = new User ({
        email,
        password
    })
    user.password = await user.encryptPass(user.password);
    await user.save();
    
    const token =  jwt.sign({id: user._id}, process.env.Secret, {
        expiresIn: 1600
    })

    res.json({auth: true, token});
}

authCtrl.signIn = async (req, res, next) => {
    const {email, password} = req.body;
    const user = await User.findOne({
        email
    })
    if(!user){
        return res.status(404).send("The email doesn't exists");
    }

    const passwordCheck = await user.validatePass(password)
    
    if(!passwordCheck) {
        res.status(401).json({auth:false, token: null})
    }

    const token = jwt.sign({id: user._id}, process.env.Secret,{
        expiresIn: 1600
    })

    res.json({auth: true, token});
}

module.exports = authCtrl;