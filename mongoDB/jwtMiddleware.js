const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('./config');

const protect = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    console.log('Token not found'); // Add this log statement
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    console.log("User ID from JWT:", decoded.id); // Add this log statement
    next();
  } catch (error) {
    console.error('Error verifying token:', error); // Log the error
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { protect };
