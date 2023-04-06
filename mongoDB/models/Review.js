// models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports.Review = mongoose.model('Review', reviewSchema);
