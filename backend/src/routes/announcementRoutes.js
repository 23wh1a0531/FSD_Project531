const express = require('express');
const { createAnnouncement, getAnnouncements, deleteAnnouncement } = require('../controllers/announcementController');
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');
const router = express.Router();

router.post('/', auth, adminAuth, createAnnouncement);
router.get('/', getAnnouncements);
router.delete('/:id', auth, adminAuth, deleteAnnouncement);

module.exports = router;
