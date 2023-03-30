const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();


const userRoutes = require("./userRoutes");
const authRoutes = require('./authRoutes');
const reviewRoutes = require('./reviewRoutes'); // Add this line
const productRoutes = require('./productRoutes');

const app = express();

app.use(express.json());
app.use(cors());

// Use the userRoutes
app.use("/api/users", userRoutes);
// Use the product routes as middleware
app.use('/api/products', productRoutes);

app.use('/auth', authRoutes);
app.use('/reviews', reviewRoutes); // Add this line

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://himasha:BKPmDGg6NKXYQgJl@cluster007.ainerdb.mongodb.net/myDatabaseName?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
