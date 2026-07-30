const BASE = 'http://localhost:5000/api'

const getToken = () => localStorage.getItem('jinat_admin_token')

const headers = () => ({
  'Content-Type': 'application/json',
  ...(getToken() ? { Authorization: `Bearer ${getToken()}` } : {}),
})

const req = async (method, path, body) => {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: headers(),
    ...(body ? { body: JSON.stringify(body) } : {}),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || 'Request failed')
  return data
}

export const api = {
  login: (email, password) => req('POST', '/auth/login', { email, password }),
  me: () => req('GET', '/auth/me'),
  changePassword: (cur, next) => req('PUT', '/auth/change-password', { currentPassword: cur, newPassword: next }),
  submitForm: (data) => req('POST', '/submissions', data),
  getSubmissions: (params = {}) => req('GET', `/submissions?${new URLSearchParams(params)}`),
  getStats: () => req('GET', '/submissions/stats'),
  getSubmission: (id) => req('GET', `/submissions/${id}`),
  updateSubmission: (id, data) => req('PATCH', `/submissions/${id}`, data),
  deleteSubmission: (id) => req('DELETE', `/submissions/${id}`),

  // Gallery
  getPhotos: (campusId) => req('GET', `/gallery${campusId ? `?campusId=${campusId}` : ''}`),
  uploadPhoto: (campusId, caption, file) => {
    const token = localStorage.getItem('jinat_admin_token')
    const form = new FormData()
    form.append('photo', file)
    form.append('campusId', campusId)
    form.append('caption', caption || '')
    return fetch(`http://localhost:5000/api/gallery`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    }).then(async (r) => {
      const d = await r.json()
      if (!r.ok) throw new Error(d.message)
      return d
    })
  },
  deletePhoto: (id) => req('DELETE', `/gallery/${id}`),
}
