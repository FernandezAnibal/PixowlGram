const jwt = require('jsonwebtoken');

function verifyToken (req, res, next){
    const token = req.headers["x-access-token"];
    if(!token){
        return res.status(401).json({
            auth:false,
            message: 'no token provided'
        });
    }
    const decode = jwt.verify(token, process.env.Secret)
    req.userId = decode.id;
    next();

}

module.exports = verifyToken;