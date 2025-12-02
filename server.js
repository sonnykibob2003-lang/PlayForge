require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const Product = require('./models/Product'); // Your Product model

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/playforge')

    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

let cart = [];

// Home route: display products from DB
app.get('/', async (req, res) => {
    try {
        const products = await Product.find().lean();
        res.render('index', { products });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
});

// Products page: show all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find().lean();
        res.render('products', { products });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
});

// Show add product form
app.get('/products/new', (req, res) => {
    res.render('add-product');
});

// Add new product to DB
app.post('/products', async (req, res) => {
    const { name, price, platform, image } = req.body;
    if (!name || !price || !platform || !image) {
        return res.status(400).send('All fields are required');
    }
    try {
        const newProduct = new Product({
            name,
            price: parseFloat(price),
            platform,
            image,
        });
        await newProduct.save();
        console.log('New product added:', newProduct);
        res.redirect('/products');
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(500).send('Error saving product');
    }
});

app.post('/products/delete/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (deletedProduct) {
            console.log(`Deleted product: ${deletedProduct.name} (ID: ${deletedProduct._id})`);
        } else {
            console.log(`No product found with ID: ${req.params.id}`);
        }
        res.redirect('/products');
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).send('Error deleting product');
    }
});


// Add to cart
app.post('/add-to-cart', async (req, res) => {
    const productId = req.body.id;

    try {
        const product = await Product.findById(productId).lean();
        if (!product) {
            return res.status(404).send('Product not found');
        }

        const existingItem = cart.find(item => item._id.toString() === productId);
        if (existingItem) {
            existingItem.qty += 1;
        } else {
            cart.push({ ...product, qty: 1 });
        }

        res.redirect(req.get('referer') || '/products');
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).send('Error adding to cart');
    }
});

// Remove from cart
app.post('/remove-from-cart', (req, res) => {
    const productId = req.body.id;
    cart = cart.filter(p => p._id.toString() !== productId);
    res.redirect(req.get('referer') || '/cart');
});

// View cart
app.get('/cart', (req, res) => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);
    res.render('cart', { cart, subtotal });
});

// Increase qty
app.post('/increase-qty', (req, res) => {
    const productId = req.body.id;
    const item = cart.find(p => p._id.toString() === productId);
    if (item) item.qty += 1;
    res.redirect('/cart');
});

// Decrease qty
app.post('/decrease-qty', (req, res) => {
    const productId = req.body.id;
    const item = cart.find(p => p._id.toString() === productId);
    if (item && item.qty > 1) {
        item.qty -= 1;
    } else {
        cart = cart.filter(p => p._id.toString() !== productId);
    }
    res.redirect('/cart');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
