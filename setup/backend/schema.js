const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  complaint: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('UserComplaint', complaintSchema);
