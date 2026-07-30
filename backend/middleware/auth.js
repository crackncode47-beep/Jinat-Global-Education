const jwt = require('jsonwebtoken')
const db = require('../db')

module.exports = (req, res, next) => {
  const auth = req.headers.authorization
  if (!auth || !auth.startsWith('Bearer '))
    return res.status(401).json({ message: 'Unauthorized' })

  try {
    const decoded = jwt.verify(auth.split(' ')[1], process.env.JWT_SECRET)
    const admin = db.findAdminById(decoded.id)
    if (!admin) return res.status(401).json({ message: 'Unauthorized' })
    const { password, ...adminWithoutPass } = admin
    req.admin = adminWithoutPass
    next()
  } catch {
    res.status(401).json({ message: 'Invalid token' })
  }
}
