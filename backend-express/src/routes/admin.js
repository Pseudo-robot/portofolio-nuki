const express = require('express');
const router = express.Router();

const { requireAuth } = require('../middlewares/authMiddleware');
const { requireRole } = require('../middlewares/roleMiddleware');

router.get(
  '/dashboard',
  requireAuth,
  requireRole(['admin', 'superadmin']),
  (req, res) => {
    res.json({
      message: 'Admin dashboard access granted',
      user: req.user
    });
  }
);

module.exports = router;
