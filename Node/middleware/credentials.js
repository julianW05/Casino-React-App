const allowedOrgins = require ('../config/allowedOrgins');

const credentials = (req, res, next) => {
    const orgin = req.headers.origin;
    if (allowedOrgins.includes(orgin)) {
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

module.exports = credentials;