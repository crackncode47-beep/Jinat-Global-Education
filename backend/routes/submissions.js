const router = require('express').Router()
const { v4: uuidv4 } = require('uuid')
const db = require('../db')
const auth = require('../middleware/auth')
const { sendAdminNotification, sendUserConfirmation } = require('../middleware/email')

// Public — submit form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, campus, subject, message } = req.body
    if (!name || !email || !campus || !subject || !message)
      return res.status(400).json({ message: 'All required fields must be filled' })

    const submission = db.createSubmission({
      id: uuidv4(),
      name, email, phone: phone || '', campus, subject, message,
      status: 'new',
      adminNote: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })

    try {
      await Promise.all([
        sendAdminNotification({ name, email, phone, campus, subject, message }),
        sendUserConfirmation({ name, email, campus, subject }),
      ])
    } catch (emailErr) {
      console.warn('Email sending failed:', emailErr.message)
    }

    res.status(201).json({ message: 'Submission received successfully', id: submission.id })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

// Admin — get all
router.get('/', auth, (req, res) => {
  try {
    const { status, campus, page = 1, limit = 15 } = req.query
    const filter = {}
    if (status) filter.status = status
    if (campus) filter.campus = campus
    const result = db.getSubmissions(filter, Number(page), Number(limit))
    res.json({ ...result, page: Number(page) })
  } catch {
    res.status(500).json({ message: 'Server error' })
  }
})

// Admin — stats
router.get('/stats', auth, (req, res) => {
  try {
    res.json(db.getStats())
  } catch {
    res.status(500).json({ message: 'Server error' })
  }
})

// Admin — single
router.get('/:id', auth, (req, res) => {
  try {
    const submission = db.findSubmissionById(req.params.id)
    if (!submission) return res.status(404).json({ message: 'Not found' })
    if (submission.status === 'new') {
      db.updateSubmission(submission.id, { status: 'read', updatedAt: new Date().toISOString() })
      submission.status = 'read'
    }
    res.json(submission)
  } catch {
    res.status(500).json({ message: 'Server error' })
  }
})

// Admin — update
router.patch('/:id', auth, (req, res) => {
  try {
    const { status, adminNote } = req.body
    const updated = db.updateSubmission(req.params.id, {
      ...(status && { status }),
      ...(adminNote !== undefined && { adminNote }),
      updatedAt: new Date().toISOString(),
    })
    if (!updated) return res.status(404).json({ message: 'Not found' })
    res.json(updated)
  } catch {
    res.status(500).json({ message: 'Server error' })
  }
})

// Admin — delete
router.delete('/:id', auth, (req, res) => {
  try {
    db.deleteSubmission(req.params.id)
    res.json({ message: 'Deleted successfully' })
  } catch {
    res.status(500).json({ message: 'Server error' })
  }
})

module.exports = router
