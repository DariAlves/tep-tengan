const express = require('express');
const { home, api } = require('../controllers/appController');
const router = express.Router();

// Rota Home
router.get('/', home);

// Rota API
router.get('/api', api);

module.exports = router;
