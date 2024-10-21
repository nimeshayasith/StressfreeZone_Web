const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Ensure the User model is correctly imported

const protect = async (req, res, next) => {
  let token;

  // Check for token in the Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extract the token after 'Bearer'
      token = req.headers.authorization.split(' ')[1];

      // Verify token and extract payload (e.g., user ID)
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user by decoded ID, excluding the password field
      req.user = await User.findById(decoded.user.id).select('-password');

      if (!req.user) {
        return res.status(401).json({ msg: 'User not found' });
      }

      // Proceed to the next middleware or route handler
      next();
    } catch (err) {
      // If token verification fails
      res.status(401).json({ msg: 'Token is not valid' });
    }
  }

  // If no token is found
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
};

module.exports = {protect};
