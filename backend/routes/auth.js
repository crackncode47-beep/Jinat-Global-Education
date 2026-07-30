const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const db = require('../db')
const auth = require('../middleware/auth')

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password)
      return res.status(400).json({ message: 'Email and password required' })

    const admin = db.findAdmin({ email })
    if (!admin) return res.status(401).json({ message: 'Invalid credentials' })

    const match = await bcrypt.compare(password, admin.password)
    if (!match) return res.status(401).json({ message: 'Invalid credentials' })

    const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    })

    res.json({ token, admin: { id: admin.id, name: admin.name, email: admin.email, role: admin.role } })
  } catch {
    res.status(500).json({ message: 'Server error' })
  }
})

// Get current admin
router.get('/me', auth, (req, res) => {
  res.json(req.admin)
})

// Change password
router.put('/change-password', auth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body
    const admin = db.findAdminById(req.admin.id)
    const match = await bcrypt.compare(currentPassword, admin.password)
    if (!match) return res.status(400).json({ message: 'Current password is incorrect' })
    const hashed = await bcrypt.hash(newPassword, 12)
    db.updateAdmin(admin.id, { password: hashed })
    res.json({ message: 'Password updated successfully' })
  } catch {
    res.status(500).json({ message: 'Server error' })
  }
})

module.exports = router
