const { verify } = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.get('Authorization');
  if (!token || token === '') {
    req.isAuth = false;
    res.status(401).send('Authorization failed..');
    next();
  }

  let decoded;

  try {
    decoded = verify(token, process.env.JWT_SECRET);
  } catch (error) {
    req.isAuth = false;
    res.status(401).send('Authorization failed..');
    next();
  }

  if (!decoded) {
    req.isAuth = false;
    res.status(401).send('Authorization failed..');
    next();
  }

  req.isAuth = true;
  req.user = decoded.user;
  req.userData = decoded;
  next();
};
