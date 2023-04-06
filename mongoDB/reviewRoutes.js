const express = require('express');
const router = express.Router();
const { Product } = require('./models/product');
const { User } = require('./models/User'); // Add this line to import the User model
const { protect } = require('./jwtMiddleware');
// Import the Review model
const { Review } = require('./models/Review');


router.post('/add-review', protect, async (req, res) => {
  const { productId, text, rating } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.scannedProducts.includes(productId)) {
      return res.status(404).json({ message: 'Product not found in user scanned products' });
    }

    const userWithProduct = await User.findOne({
      _id: userId,
      scannedProducts: { $elemMatch: { $eq: productId } }
    });

    if (!userWithProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const newReview = {
      productId: productId,
      userId: userId,
      text,
      rating,
    };

    // Create a new Review document in the Review collection
    const reviewDoc = new Review(newReview);
    await reviewDoc.save();

    // Add the new review to the user's reviews array
    userWithProduct.reviews.push(newReview);
    await userWithProduct.save();

    res.status(200).json({ message: 'Review added', userWithProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding review' });
  }
});



router.get('/get-reviews', protect, async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log("userID:", userId);
    const productReviews = user.reviews;

    res.status(200).json({ reviews: productReviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});
router.get('/all-reviews', protect, async (req, res) => {
  try {
    const allReviews = await Review.find();
    res.status(200).json({ reviews: allReviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching all reviews' });
  }
});




module.exports = router;