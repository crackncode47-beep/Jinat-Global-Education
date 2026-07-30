const mongoose = require('mongoose')

const submissionSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, trim: true },
  campus: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['new', 'read', 'replied'], default: 'new' },
  adminNote: { type: String, default: '' },
}, { timestamps: true })

module.exports = mongoose.model('Submission', submissionSchema)
