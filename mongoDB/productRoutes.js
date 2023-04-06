const express = require('express');
const router = express.Router();
const { User } = require('./models/User');
const { Product } = require('./models/product'); // Import Product model
const { protect } = require('./jwtMiddleware');

router.post('/create-product', protect, async (req, res) => {
    const { productId } = req.body;
  
    try {
      const product = new Product({ productId, userId: req.user.id });
      await product.save();
  
      res.status(200).json({ message: 'Product created successfully', product });
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ message: 'Error creating product' });
    }
  });
  
  router.post('/add-product', protect, async (req, res) => {
    const { productId } = req.body;
  
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const productExists = user.products.some(
        (existingProductId) => existingProductId === productId
      );
  
      if (!productExists) {
        user.products.push(productId);
        await user.save();
        res.status(200).json({ message: 'Product added successfully', user });
      } else {
        res.status(400).json({ message: 'Product already exists in user data' });
      }
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).json({ message: 'Error adding product' });
    }
  });
  

  router.get('/user-products', protect, async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const scannedProductIds = user.scannedProducts;
  
      const scannedProducts = scannedProductIds.map((productId) => ({
        productId: productId,
      }));
  
      res.status(200).json({ scannedProducts: scannedProducts });
    } catch (error) {
      console.error('Error fetching user scanned products:', error);
      res.status(500).json({ message: 'Error fetching user scanned products' });
    }
  });
  
  
  
  router.post('/add-scanned-product', protect, async (req, res) => {
    const { productId } = req.body;
  
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const productExists = user.scannedProducts.some(
        (existingProductId) => existingProductId === productId
      );
  
      if (!productExists) {
        user.scannedProducts.push(productId);
        await user.save();
        res.status(200).json({ message: 'Scanned product added successfully', user });
      } else {
        res.status(400).json({ message: 'Product already exists in user data' });
      }
    } catch (error) {
      console.error('Error adding scanned product:', error);
      res.status(500).json({ message: 'Error adding scanned product' });
    }
  });
  
  
  
  
  

module.exports = router;
