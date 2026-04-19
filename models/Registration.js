const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  registrationDate: {
    type: Date,
    default: Date.now
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Completed'],
    default: 'Pending'
  }
}, { timestamps: true });

registrationSchema.index({ studentId: 1 });
registrationSchema.index({ eventId: 1 });

module.exports = mongoose.model('Registration', registrationSchema);
