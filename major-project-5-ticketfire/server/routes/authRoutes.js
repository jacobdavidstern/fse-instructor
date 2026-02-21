// server/routes/authRoutes.js

const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');
const { authorizeClientAccess } = require('../middleware/authorizeClientAccess');
const { authorizeRole } = require('../middleware/authorizeRole');
const { registerClient, registerUser, login } = require('../controllers/authController');
const { loginLimiter } = require('../middleware/rateLimiters');

// DEBUG express 5 endpoints can only be captured at definition
const { register } = require('../routeRegistry');
const PREFIX = '/api/auth';

// Public onboarding
router.post(
  '/register-client',
  // DEBUG express 5 endpoints can only be captured at definition
  register('POST', '/register-client', PREFIX),
  registerClient
);

// Client owner creates users
router.post(
  '/:clientId/users',
  // DEBUG express 5 endpoints can only be captured at definition
  register('POST', '/:clientId/users', PREFIX),
  protect,
  authorizeClientAccess,
  authorizeRole('owner'),
  registerUser
);

// Login, express-rate-limit-ed
router.post(
  '/login',
  // DEBUG express 5 endpoints can only be captured at definition
  register('POST', '/login', PREFIX),
  // loginLimiter, // global rate limiting in server
  login
);

module.exports = router;
