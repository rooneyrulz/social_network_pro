const { verify } = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.get('X-native-auth');
    if (!token || token === '') {
        req.isAuth = false;
        res.status(401).send('Authorization failed..');
        return next();
    } else {
        let decoded;

        try {
            decoded = verify(token, process.env.JWT_SECRET);
        } catch (error) {
            req.isAuth = false;
            res.status(401).send('Authorization failed..');
            return next();
        }

        if (!decoded) {
            req.isAuth = false;
            res.status(401).send('Authorization failed..');
            return next();
        } else {
            req.isAuth = true;
            req.user = decoded.user;
            req.userData = decoded;
            return next();
        }
    }
};