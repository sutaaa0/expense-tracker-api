// src/routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const { getDashboardData } = require('../controllers/dashboardController');

// Route untuk mendapatkan data dashboard berdasarkan userId
router.get('/:userId', getDashboardData);

module.exports = router;
