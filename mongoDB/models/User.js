// User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  products: [
    {
      type: Number,
    },
  ],
  scannedProducts: [
    {
      type: Number,
    },
  ],
  reviews: [
    {
      productId: Number,
      text: String,
      rating: Number,
    },
  ],
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };
