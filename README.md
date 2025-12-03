# PlayForge – Cloud-Deployed Full-Stack Game Store Application

A full-stack web application built using **Node.js, Express, EJS, and MongoDB Atlas**, deployed on **Render** with continuous deployment, secure environment variables, and Git version control. This project demonstrates cloud deployment, database integration, and structured backend/frontend development as required by the ICTCLD507 assessment.

---

##  Features
- Full-stack Node.js + Express application
- EJS templating for dynamic pages
- MongoDB Atlas cloud database using Mongoose
- Secure environment variables using dotenv
- Fully deployed on Render (cloud host)
- Continuous Deployment (CD) from GitHub → Render
- Production-grade file structure
- Responsive front-end layout with public assets

---

## Technologies Used
- **Node.js, Express**
- **MongoDB Atlas, Mongoose**
- **EJS Templates**
- **dotenv for environment variables**
- **Render (Cloud Deployment)**
- **Git + GitHub (Version Control)**

---

##  Environment Variables (Security)
This project uses a `.env` file to securely load sensitive data.

Create a `.env` file in the root directory:

PORT=3000
MONGO_URI=your_mongodb_atlas_string_here
SESSION_SECRET=your_session_secret_here


>  Do NOT commit `.env` to GitHub.  
> `.env` is included in `.gitignore`.

Render handles these environment variables through its dashboard under **Environment Variables**.

---

## Folder Structure
|-- controllers/
|-- models/
|-- routes/
|-- views/
|-- public/
|-- index.js
|-- package.json
|-- README.md
|-- .gitignore
|-- .env (not included in repo)


---

##  Installation & Running Locally

### 1. Clone the Repository

git clone https://github.com/sonnykibob2003-lang/PlayForge.git

cd PlayForge


### 2. Install Dependencies
npm install

### 3. Configure `.env`
Create a `.env` file containing:
PORT=3000
MONGO_URI=your_mongodb_atlas_string
SESSION_SECRET=your_session_secret

### 4. Start the Server
npm start

Your app will run at:
http://localhost:3000


---

##  Deployment (Render)

###  How It Works
Render deploys the app directly from your GitHub repository.  
Every time you push to **main**, Render automatically:

1. Pulls your latest code  
2. Installs dependencies (`npm install`)  
3. Builds the service  
4. Starts your app with `npm start`  

This is **Continuous Deployment (CD)**.

###  Required Render Settings
**Build Command:**  

npm install

**Start Command:**  
npm start

**Environment Variables:**  
- `PORT`
- `MONGO_URI`
- `SESSION_SECRET`

### Live Deployment  
🔗 **Live Site:** *Add your Render link here*  
🔗 **GitHub Repo:** https://github.com/sonnykibob2003-lang/PlayForge  

---

##  Version Control & Commit Strategy
This project uses Git with meaningful, structured commits such as:

- `Added MongoDB connection using Mongoose`
- `Implemented environment variables with dotenv`
- `Configured Render deployment settings`
- `Updated README and project documentation`

Basic Git commands used:

git init
git add .
git commit -m "Message"
git branch -M main
git remote add origin <repo-url>
git push -u origin main


---

##  Troubleshooting & Debugging

### Issues Encountered
- MongoDB connection not loading → solved by configuring `.env` correctly
- Render deployment errors → fixed by setting correct PORT + env vars
- PCs not connecting → fixed by updating network access on MongoDB Atlas

### Testing Steps
- Verified server startup locally
- Used console logs for debugging connection strings
- Checked Render build logs for missing environment variables

---

##  Learning Outcomes
By completing this project, I learned:
- How to deploy a full-stack Node.js application to the cloud
- How to secure applications using environment variables
- How to manage Git version control and continuous deployment
- How to connect and configure MongoDB Atlas databases
- How to troubleshoot cloud deployment issues
- How to document a full application using professional standards

---

##  License
This project is created for educational purposes under the ICTCLD507 assessment.


