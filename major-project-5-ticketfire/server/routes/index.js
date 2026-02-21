// routes/index.js

const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const eventRoutes = require('./eventRoutes');
const departmentRoutes = require('./departmentRoutes');
const schoolRoutes = require('./schoolRoutes');
const venueRoutes = require('./venueRoutes');

router.use('/auth', authRoutes);
router.use('/', eventRoutes);
router.use('/', require('./departmentRoutes'));
router.use('/', require('./schoolRoutes'));
router.use('/', require('./venueRoutes'));

module.exports = router;
