const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController');
const { protect, authorize } = require('./middleware/authMiddleware');

// Auth routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/verify-email', authController.verifyEmail);

// Forgot & Reset Password
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);

// Protected Dashboards (example)
router.get('/admin/dashboard', protect, authorize('admin'), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

router.get('/transporter/dashboard', protect, authorize('transporter'), (req, res) => {
  res.json({ message: 'Welcome Transporter!' });
});

router.get('/customer/dashboard', protect, authorize('customer'), (req, res) => {
  res.json({ message: 'Welcome Customer!' });
});

module.exports = router;
