const fs = require('fs')
const path = require('path')

const DB_PATH = path.join(__dirname, 'db.json')

const defaultDB = { admins: [], submissions: [], gallery: [] }

const readDB = () => {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify(defaultDB, null, 2))
    return defaultDB
  }
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'))
}

const writeDB = (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2))

const db = {
  // Admins
  findAdmin: (query) => {
    const data = readDB()
    return data.admins.find((a) => Object.keys(query).every((k) => a[k] === query[k])) || null
  },
  findAdminById: (id) => {
    const data = readDB()
    return data.admins.find((a) => a.id === id) || null
  },
  createAdmin: (admin) => {
    const data = readDB()
    data.admins.push(admin)
    writeDB(data)
    return admin
  },
  updateAdmin: (id, updates) => {
    const data = readDB()
    const idx = data.admins.findIndex((a) => a.id === id)
    if (idx === -1) return null
    data.admins[idx] = { ...data.admins[idx], ...updates }
    writeDB(data)
    return data.admins[idx]
  },

  // Submissions
  createSubmission: (sub) => {
    const data = readDB()
    data.submissions.push(sub)
    writeDB(data)
    return sub
  },
  getSubmissions: (filter = {}, page = 1, limit = 15) => {
    const data = readDB()
    let list = data.submissions.filter((s) =>
      Object.keys(filter).every((k) => !filter[k] || s[k] === filter[k])
    )
    list = list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    const total = list.length
    const pages = Math.ceil(total / limit)
    const submissions = list.slice((page - 1) * limit, page * limit)
    return { submissions, total, pages }
  },
  findSubmissionById: (id) => {
    const data = readDB()
    return data.submissions.find((s) => s.id === id) || null
  },
  updateSubmission: (id, updates) => {
    const data = readDB()
    const idx = data.submissions.findIndex((s) => s.id === id)
    if (idx === -1) return null
    data.submissions[idx] = { ...data.submissions[idx], ...updates }
    writeDB(data)
    return data.submissions[idx]
  },
  deleteSubmission: (id) => {
    const data = readDB()
    data.submissions = data.submissions.filter((s) => s.id !== id)
    writeDB(data)
  },
  getStats: () => {
    const data = readDB()
    const subs = data.submissions
    const total = subs.length
    const newCount = subs.filter((s) => s.status === 'new').length
    const read = subs.filter((s) => s.status === 'read').length
    const replied = subs.filter((s) => s.status === 'replied').length
    const campusMap = {}
    subs.forEach((s) => { campusMap[s.campus] = (campusMap[s.campus] || 0) + 1 })
    const byCampus = Object.entries(campusMap)
      .map(([_id, count]) => ({ _id, count }))
      .sort((a, b) => b.count - a.count)
    const recent = [...subs]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 5)
    return { total, new: newCount, read, replied, byCampus, recent }
  },

  // Gallery
  addPhoto: (photo) => {
    const data = readDB()
    if (!data.gallery) data.gallery = []
    data.gallery.push(photo)
    writeDB(data)
    return photo
  },
  getPhotos: (campusId) => {
    const data = readDB()
    const gallery = data.gallery || []
    if (campusId) return gallery.filter((p) => p.campusId === campusId)
    return gallery.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  },
  deletePhoto: (id) => {
    const data = readDB()
    const photo = (data.gallery || []).find((p) => p.id === id)
    data.gallery = (data.gallery || []).filter((p) => p.id !== id)
    writeDB(data)
    return photo
  },
}

module.exports = db
