// server/routes/schoolRoutes.js

const express = require('express');
const router = express.Router();
const { register } = require('../routeRegistry');

const { protect } = require('../middleware/authMiddleware');
const { authorizeClientAccess } = require('../middleware/authorizeClientAccess');
const { authorizeRole } = require('../middleware/authorizeRole')
const { createSchools } = require('../controllers/schoolController');

router.post(
  '/:clientId/schools',
  protect,
  authorizeClientAccess,
  authorizeRole('owner'),
  // DEBUG express 5 endpoints can only be captured at definition
  register('POST', '/:clientId/schools', '/api'),
  createSchools
);

module.exports = router;
