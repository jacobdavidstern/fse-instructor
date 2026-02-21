// server/routes/venueRoutes.js

const express = require('express');
const router = express.Router();
const { register } = require('../routeRegistry');

const { protect } = require('../middleware/authMiddleware'); // adjust if needed
const { authorizeClientAccess } = require('../middleware/authorizeClientAccess');
const { authorizeRole } = require('../middleware/authorizeRole');

const { createVenues } = require('../controllers/venueController');

router.post(
  '/:clientId/venues',
  protect,
  authorizeClientAccess,
  authorizeRole('owner'),
  register('POST', '/:clientId/venues', '/api'),
  createVenues
);

module.exports = router;
