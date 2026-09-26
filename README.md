# ShopSphere E-Commerce App
Full-stack demo using HTML, CSS, vanilla JavaScript, Express, Node.js and MongoDB.

## Setup
1. Install Node.js 18+ and MongoDB locally, or create a MongoDB Atlas database.
2. Extract this folder and open it in VS Code.
3. Run `npm install`.
4. Copy `.env.example` to `.env`. Set `MONGODB_URI` and a long random `JWT_SECRET`.
5. Run `npm run seed` to create sample products and the demo admin.
6. Run `npm start` and visit http://localhost:5000.

Demo admin: admin@shopsphere.com / Admin123!
Change the demo password and JWT secret before any public deployment.

## Features
Product catalog/search/category filters, persistent cart, registration/login, JWT authentication, bcrypt password hashing, user checkout/order history, admin product CRUD, stock management, order status updates.

Checkout is a simulated order flow and does not charge real payments. For production, add a payment provider, stronger request validation, rate limiting, and transactional stock updates.
