// routes/adminRoutes.js

const express = require('express');
const router = express.Router();
const db = require('../data');
const authenticateToken = require('../middleware/authenticateToken');
const requireAdmin = require('../middleware/requireAdmin');

router.get('/users', authenticateToken, requireAdmin, (req, res) => {
  return res.status(200).json(db.users);
});

router.get('/tasks', authenticateToken, requireAdmin, (req, res) => {
  return res.status(200).json(db.tasks);
});

module.exports = router;
