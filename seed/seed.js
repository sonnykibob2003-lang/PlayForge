require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product'); 
const products = require('../routes/data/products');

const MONGO_URI = process.env.MONGO_URI;

async function seedDB() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Connected to MongoDB');

        await Product.deleteMany({});
        console.log('Cleared old products');

        await Product.insertMany(products);
        console.log(`Inserted ${products.length} products`);

        await mongoose.disconnect();
        process.exit(0);
    } catch (err) {
        console.error('Error seeding the database:', err);
        process.exit(1);
    }
}

seedDB();



