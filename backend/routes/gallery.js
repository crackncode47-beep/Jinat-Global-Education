const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const db = require('../db')
const auth = require('../middleware/auth')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, '../uploads')
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    cb(null, dir)
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    cb(null, `${uuidv4()}${ext}`)
  },
})

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|webp|gif/
    const ok = allowed.test(path.extname(file.originalname).toLowerCase()) &&
               allowed.test(file.mimetype)
    ok ? cb(null, true) : cb(new Error('Only image files are allowed'))
  },
})

// Public — get photos by campus
router.get('/', (req, res) => {
  try {
    const { campusId } = req.query
    const photos = db.getPhotos(campusId || null)
    res.json(photos)
  } catch {
    res.status(500).json({ message: 'Server error' })
  }
})

// Admin — upload photo
router.post('/', auth, upload.single('photo'), (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' })
    const { campusId, caption } = req.body
    if (!campusId) return res.status(400).json({ message: 'campusId is required' })

    const photo = db.addPhoto({
      id: uuidv4(),
      campusId,
      caption: caption || '',
      filename: req.file.filename,
      url: `/uploads/${req.file.filename}`,
      size: req.file.size,
      createdAt: new Date().toISOString(),
    })
    res.status(201).json(photo)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Admin — delete photo
router.delete('/:id', auth, (req, res) => {
  try {
    const photo = db.deletePhoto(req.params.id)
    if (photo) {
      const filePath = path.join(__dirname, '../uploads', photo.filename)
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
    }
    res.json({ message: 'Deleted successfully' })
  } catch {
    res.status(500).json({ message: 'Server error' })
  }
})

module.exports = router
