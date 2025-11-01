🌐 URL Shortener

This is a simple yet powerful URL Shortener Web App built using Node.js, Express, and MongoDB, with a lightweight HTML and CSS frontend.
It allows users to transform long, messy URLs into short, neat, and shareable links instantly.

🪄 Overview

Long URLs can be hard to share — especially on social media or emails.
MiniURL’s solves that problem by generating unique, short links that redirect to the original URLs with just one click.

The app consists of:

A clean, minimal user interface.

A Node.js + Express backend.

MongoDB database for storing URL mappings.

URL validation and error handling for better reliability.

✨ Key Features

✅ Shorten any valid URL in seconds.
✅ Instant redirection to the original URL.
✅ Unique, auto-generated short IDs using NanoID.
✅ Simple and clean user interface.
✅ Backend connected to MongoDB Atlas for data persistence.

🧠 How It Works

The user enters a long URL in the input box.

The backend validates the URL.

A unique 7-character short ID is generated using NanoID.

The pair (originalUrl, shortId) is stored in MongoDB.

The app returns a short link such as:

http://localhost:8000/abc1234


When that short link is visited, the app instantly redirects to the original URL.

🧩 Tech Stack

Frontend: HTML5, CSS3
Backend: Node.js, Express.js
Database: MongoDB with Mongoose
Utilities: NanoID, dotenv

📁 Folder Structure
project/
│
├── config/
│   └── db.js              → Database connection logic
│
├── controllers/
│   └── url.js             → Core logic for creating & redirecting URLs
│
├── models/
│   └── url.js             → Mongoose schema for URLs
│
├── routes/
│   └── url.js             → API routes
│
├── service/
│   └── urlValidation.js   → URL validation function
│
├── public/
│   ├── index.html         → Frontend user interface
│   ├── style.css          → UI styling
│   └── logo.png           → App logo (optional)
│
├── index.js               → Main Express app entry point
└── .env                   → Environment variables

⚙️ Setup Guide
Step 1: Clone the repository
git clone https://github.com/Mohammed-habeeb78/miniurl-shortener.git

Step 2: Navigate into the folder

Step 3: Install dependencies
npm install

Step 4: Add environment variables

Create a .env file in the root directory with:

MONGO_URI=your_mongodb_connection_string
PORT=8000

Step 5: Run the server
npm start


Server will start at:
👉 http://localhost:8000

🔗 API Endpoints

POST /api/url/shorten
Creates a new short URL.

GET /:shortId
Redirects to the original long URL.

🖥️ Frontend Overview

The frontend (index.html) offers a minimal design:

Input box for entering the URL.

A “Shortener” button.

Informative text explaining the feature.

Everything is styled neatly in style.css for a smooth look and feel.

🧠 Example Flow

Input:
https://www.youtube.com/watch?v=dQw4w9WgXcQ

Generated Short Link:
http://localhost:8000/XyZ123A

Clicking the short link:
Redirects you to the original YouTube video instantly 🎯

🔮 Future Enhancements

User login and personalized dashboards

Analytics (count clicks per link)

Custom short links

Copy-to-clipboard button

QR code generation for each short URL

🧑‍💻 Author

Mohammed Habeeb Rehman