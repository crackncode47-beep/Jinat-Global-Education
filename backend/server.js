require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())

// Debug log
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`)
  next()
})

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/submissions', require('./routes/submissions'))
app.use('/api/gallery', require('./routes/gallery'))
app.use('/uploads', require('express').static(require('path').join(__dirname, 'uploads')))
app.get('/api/health', (_, res) => res.json({ status: 'ok', time: new Date() }))

// Seed default admin if none exists
const seedAdmin = async () => {
  const existing = db.findAdmin({ email: process.env.ADMIN_EMAIL })
  if (!existing) {
    const hashed = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12)
    db.createAdmin({
      id: 'admin-001',
      name: 'Super Admin',
      email: process.env.ADMIN_EMAIL,
      password: hashed,
      role: 'admin',
      createdAt: new Date().toISOString(),
    })
    console.log(`✅ Admin created: ${process.env.ADMIN_EMAIL} / ${process.env.ADMIN_PASSWORD}`)
  }
}

const start = async () => {
  await seedAdmin()
  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`)
    console.log(`✅ Data stored in: backend/db.json`)
    console.log(`✅ Admin login: ${process.env.ADMIN_EMAIL}`)
  })
}

start()
