const express = require('express');
const { registerForEvent, getMyRegistrations, getAllRegistrations } = require('../controllers/registrationController');
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');
const router = express.Router();

router.post('/', auth, registerForEvent);
router.get('/my', auth, getMyRegistrations);
router.get('/', auth, adminAuth, getAllRegistrations);

module.exports = router;
