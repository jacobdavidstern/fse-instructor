// server/routes/eventRoutes.js

const express = require('express');
const router = express.Router();
const { register } = require('../routeRegistry');

const { protect } = require('../middleware/authMiddleware');
const { authorizeClientAccess } = require('../middleware/authorizeClientAccess');
const { authorizeRole } = require('../middleware/authorizeRole');

const {
  createEvent,
  getEvent,
  getEvents
} = require('../controllers/eventController');

// Get all events for a client
router.get('/:clientId/events',
  protect,
  authorizeClientAccess,
  authorizeRole('staff', 'official', 'owner'),
  // DEBUG express 5 endpoints can only be captured at definition
  register('GET', '/:clientId/events', '/api'),
  getEvents
);

// Get a single event
router.get('/:clientId/events/:eventId',
  protect,
  authorizeClientAccess,
  authorizeRole('staff', 'official', 'owner'),
  // DEBUG express 5 endpoints can only be captured at definition
  register('GET', '/:clientId/events/:eventId', '/api'),
  getEvent
);

// Create new event
router.post('/:clientId/events',
  protect,
  authorizeClientAccess,
  authorizeRole('official', 'owner'),
  // DEBUG express 5 endpoints can only be captured at definition
  register('POST', '/:clientId/events', '/api'),
  createEvent
);

module.exports = router;
