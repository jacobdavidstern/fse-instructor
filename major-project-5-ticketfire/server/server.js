// server/server.js

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const rateLimit = require('express-rate-limit');
const security = require('./middleware/security');
const corsConfig = require('./middleware/corsConfig');

const app = express();

// Trust proxy for correct IPs (Vercel, Render, etc.)
app.set('trust proxy', 1);

// Security middleware
app.use(security);
app.use(corsConfig);
app.use(express.json());

// Rate limiters
const { apiLimiter, authLimiter, loginLimiter } = require('./middleware/rateLimiters');

app.use('/api/auth/login', loginLimiter);
app.use('/api/auth', authLimiter);
app.use('/api', apiLimiter);

// Routes
const apiRoutes = require('./routes');
app.use('/api', apiRoutes);

// DEBUG Health Route
app.get('/api/test', (req, res) => {
    if (process.env.NODE_ENV === 'development') {
  res.json({ message: 'Backend is working!' });
}});

// Start server after DB connects
const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 3001;

    // DEBUG Temporarily log all routes at startup
    const { registry } = require('./routeRegistry');
    console.log(registry);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
};

startServer();
