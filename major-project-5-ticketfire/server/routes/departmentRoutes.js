// server/routes/departmentRoutes.js

const express = require('express');
const router = express.Router();
const { register } = require('../routeRegistry');

const { createDepartments } = require('../controllers/departmentController');

router.post(
  '/:clientId/departments',
  // DEBUG express 5 endpoints can only be captured at definition
  register('POST', '/:clientId/departments', '/api'),
  createDepartments
);

module.exports = router;
