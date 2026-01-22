// routes/index.js

const express = require('express');
const router = express.Router();

const adminRoutes = require('./adminRoutes.js');
// const authRoutes = require('./authRoutes');
const taskRoutes = require('./taskRoutes');

// router.use('/auth', authRoutes);
router.use('/tasks', taskRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
