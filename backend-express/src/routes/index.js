const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');
const authRoutes = require('./authRoutes');
const adminRoutes = require('./admin');

const { requireAuth } = require('../middlewares/authMiddleware');

const dbTestRoute = require('./db-test');

router.get('/health', requireAuth, healthController.check);

router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
router.use('/db-test', dbTestRoute);

module.exports = router;
