const express = require('express');
const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/eventController');
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');
const router = express.Router();

router.post('/', auth, adminAuth, createEvent);
router.get('/', getEvents);
router.put('/:id', auth, adminAuth, updateEvent);
router.delete('/:id', auth, adminAuth, deleteEvent);

module.exports = router;
