# PlayForge Game Store

## Project Overview
PlayForge is a simple online game store web application built with **Node.js**, **Express**, **EJS**, and **MongoDB**.  
It allows users to:

- View available games and consoles on the homepage and products page.
- Add new products through an admin interface.
- Add products to a shopping cart and adjust quantities.
- Remove products from the cart or delete products entirely from the store.
- View the subtotal of their cart before purchase.

The app uses **MongoDB** to store product information and manages cart functionality in memory.

---

## Features

- Dynamic product listing with EJS templates.
- Add, delete, and view products.
- Shopping cart with quantity controls.
- Responsive design using **Bootstrap 5**.
- MongoDB database integration for product storage.
- `.env` configuration for sensitive environment variables.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sonnykibob2003-lang/PlayForge.git

2. Navigate to the project folder:
type the following:   cd PlayForge

3. Install the dependencies: npm install

# -----------------------------------------CONFIGURATION-----------------------------------------------

Configuration 

1. Create a .env file in the root of your project (if not already created).

2. Add your MongoDB connection string in the .env file:

MONGO_URI="mongodb+srv://SonnyK:767632@cluster0.d28jave.mongodb.net/playforge?retryWrites=true&w=majority&appName=Cluster0"

# -------------------------------- RUNNING THE PROJECT-------------------------
1. Start the server with:
npm start


2. Then open your browser and visit:
http://localhost:3000
You should see the homepage of PlayForge with available products.


# -------------------------------------------FOLDER STRUCTURE------------------------------------
PlayForge/
│
├─ models/              
├─ routes/              
├─ seed/                
├─ views/               
│   ├─ add-product.ejs
│   ├─ cart.ejs
│   ├─ index.ejs
│   └─ products.ejs
├─ public/              
├─ server.js            
├─ package.json
├─ package-lock.json
└─ .gitignore


# --------------------------------------------DEPLOYMENT-----------------------------------------------
Deployment on Render

The PlayForge website is deployed using Render

, a cloud platform that enables automatic deployment directly from a GitHub repository. Render continuously monitors the repository for changes, so whenever new code is pushed to GitHub, Render automatically rebuilds and redeploys the application without any manual intervention. This feature ensures that the live website is always up-to-date with the latest version of the code.

Compared to traditional cloud providers like AWS or GCP, Render offers a simpler deployment process with one-click setup, automatic builds, and environment variable management. While AWS or GCP provide more extensive scalability and fine-grained control, Render is ideal for smaller projects and rapid development because it minimizes configuration complexity. You can still scale your application as needed, but the deployment process remains very straightforward.

Sensitive data, such as the MongoDB connection string, is secured using Render’s environment variables. Instead of hardcoding credentials in the code, the .env file values are added directly in Render’s Environment tab. The application then reads these values using the dotenv package in Node.js. This ensures that sensitive information is never exposed in the public repository or the deployed website.

Live URL of the deployed website: https://playforge.onrender.com

GitHub repository: https://github.com/sonnykibob2003-lang/PlayForge



# --------------------------------------------USER INSTRUCTIONS-----------------------------------------------
1. Navigate to /products/new to add a new product.

2. Use the Add to Cart button to add products to your cart.

3. Go to /cart to view your cart, adjust quantities, or remove products.

4. Use the Delete button on products to remove them from the store entirely.


# ---------------------------------------------------Notes

Make sure MongoDB is running and accessible via your connection string.

.env and node_modules are ignored in Git for security and file size reasons.

This project is built for learning purposes and can be extended with authentication, checkout functionality, and other advanced features.

# ---------------------------------------------------Technologies Used
Node.js

Express.js

MongoDB & Mongoose

EJS (Embedded JavaScript templates)

Bootstrap 5




