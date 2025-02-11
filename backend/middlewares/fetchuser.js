const jwt = require('jsonwebtoken');
const JWT_SECRET = "yashdev$$$$$gupta"

const fetchuser = ((req, res, next) => {

    const token = req.header("jwttoken")
    if (!token) {
        res.status(401).send({ error: "its seem to be a invalid token" })
    }
    const data = jwt.verify(token, JWT_SECRET)
    req.user = data.user


    next()

})
module.exports=fetchuser