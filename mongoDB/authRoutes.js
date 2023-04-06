const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('./models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password, role } = req.body;

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  if (!isValidPassword(password)) {
    return res.status(400).json({ message: 'password must be more that 8 characters' });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  console.log('Login request email:', email);

  try {
    const user = await User.findOne({ email });
    console.log('Found user:', user);

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('isPasswordValid:', isPasswordValid);
    if (!isPasswordValid) {
      console.log('Invalid password');
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ message: 'User logged in successfully', token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in user' });
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  return password.length >= 8;
}

module.exports = router;
