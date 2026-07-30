import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Trash2, Save, MapPin, Phone, Mail, Calendar } from 'lucide-react'
import { api } from '../../services/api'

const statusColor = { new: 'bg-blue-100 text-blue-700', read: 'bg-yellow-100 text-yellow-700', replied: 'bg-green-100 text-green-700' }

export default function AdminSubmissionDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [sub, setSub] = useState(null)
  const [status, setStatus] = useState('')
  const [note, setNote] = useState('')
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    api.getSubmission(id).then((s) => { setSub(s); setStatus(s.status); setNote(s.adminNote || '') })
  }, [id])

  const save = async () => {
    setSaving(true)
    try {
      const updated = await api.updateSubmission(id, { status, adminNote: note })
      setSub(updated)
      setMsg('Saved successfully!')
      setTimeout(() => setMsg(''), 3000)
    } catch { setMsg('Save failed') }
    finally { setSaving(false) }
  }

  const handleDelete = async () => {
    if (!confirm('Delete this submission?')) return
    await api.deleteSubmission(id)
    navigate('/admin/submissions')
  }

  if (!sub) return (
    <div className="flex items-center justify-center h-64">
      <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link to="/admin/submissions" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <h1 className="text-xl font-black text-gray-800 flex-1">Submission Detail</h1>
        <button onClick={handleDelete} className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700 px-3 py-2 rounded-xl hover:bg-red-50 transition-colors">
          <Trash2 className="w-4 h-4" /> Delete
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold text-gray-800">{sub.name}</h2>
                <p className="text-sm text-gray-500">{sub.subject}</p>
              </div>
              <span className={`text-xs px-3 py-1.5 rounded-full font-semibold ${statusColor[sub.status]}`}>{sub.status}</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mb-5">
              {[
                [Mail, sub.email],
                [Phone, sub.phone || 'Not provided'],
                [MapPin, sub.campus],
                [Calendar, new Date(sub.createdAt).toLocaleString()],
              ].map(([Icon, val], i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <Icon className="w-4 h-4 text-emerald-500 flex-shrink-0" /> {val}
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Message</p>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{sub.message}</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-800 mb-4">Update Status</h3>
            <select value={status} onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white mb-4">
              <option value="new">New</option>
              <option value="read">Read</option>
              <option value="replied">Replied</option>
            </select>
            <h3 className="font-bold text-gray-800 mb-2">Admin Note</h3>
            <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={4}
              placeholder="Add internal notes..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none mb-4" />
            {msg && <p className="text-sm text-emerald-600 mb-3">{msg}</p>}
            <button onClick={save} disabled={saving}
              className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm">
              {saving ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
