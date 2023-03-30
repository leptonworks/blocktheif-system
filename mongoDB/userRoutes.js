const express = require('express');
const router = express.Router();
const {User} = require('./models/User');
const { protect } = require('./jwtMiddleware');

router.get('/profile', protect, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    console.log("User : ",user)
    if (!user) {
        console.log("User not found with ID:", req.user._id); // Add this log statement
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role : user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


module.exports = router;
