const Registration = require('../models/Registration');

exports.registerForEvent = async (req, res) => {
  try {
    const { eventId } = req.body;

    const existing = await Registration.findOne({ studentId: req.user.id, eventId });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Already registered' });
    }

    const registration = await Registration.create({ studentId: req.user.id, eventId });
    res.status(201).json({ success: true, message: 'Registered successfully', registration });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getMyRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({ studentId: req.user.id }).populate('eventId');
    res.json({ success: true, registrations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find().populate('studentId eventId');
    res.json({ success: true, registrations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
