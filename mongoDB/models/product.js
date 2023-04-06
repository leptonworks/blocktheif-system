const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  reviews: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      text: String,
      rating: Number,
      created_at: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = { Product };
