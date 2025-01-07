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

      // Fetch user from DB, checking both _id (regular) and googleId (Google Sign-In)
      let user = await User.findById(decoded.id).select('-password');

      if (!user) {
        // If not found by _id, try finding by googleId (for Google Sign-In users)
        user = await User.findOne({ googleId: decoded.id }).select('-password');
      }

      if (!user) {
        return res.status(401).json({ msg: 'User not found' });
      }

      req.user = user;

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
