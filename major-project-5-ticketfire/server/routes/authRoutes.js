// server/routes/authRoutes.js
// Authentication management: login, register, issue JWT, verify credentials

const express = require('express');
const router = express.Router();

const { registerClient, registerUser, login } = require('../controllers/authController'); // prettier-ignore
const { protect } = require('../middleware/authMiddleware');
const { authorizeRole } = require('../middleware/authorizeRole');

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
