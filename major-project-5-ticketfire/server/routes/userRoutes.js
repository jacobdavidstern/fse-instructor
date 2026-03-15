// server/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');
const { protect, authorizeRole } = require('../middleware/authMiddleware');
const { register } = require('../routeRegistry');

const PREFIX = '/api';
// DEBUG express 5 endpoints can only be captured at definition
register('POST', '/:clientId/users', PREFIX);

router.post('/:clientId/users', protect, authorizeRole('owner'), createUser);

module.exports = router;
