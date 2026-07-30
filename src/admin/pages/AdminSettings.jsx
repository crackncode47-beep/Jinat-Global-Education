import { useState } from 'react'
import { Save, Eye, EyeOff } from 'lucide-react'
import { useAdminAuth } from '../../context/AdminAuthContext'
import { api } from '../../services/api'

export default function AdminSettings() {
  const { admin } = useAdminAuth()
  const [form, setForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [show, setShow] = useState({ cur: false, new: false, con: false })
  const [msg, setMsg] = useState({ text: '', type: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.newPassword !== form.confirmPassword)
      return setMsg({ text: 'New passwords do not match', type: 'error' })
    if (form.newPassword.length < 6)
      return setMsg({ text: 'Password must be at least 6 characters', type: 'error' })
    setLoading(true)
    try {
      await api.changePassword(form.currentPassword, form.newPassword)
      setMsg({ text: 'Password changed successfully!', type: 'success' })
      setForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
    } catch (err) {
      setMsg({ text: err.message, type: 'error' })
    } finally {
      setLoading(false)
      setTimeout(() => setMsg({ text: '', type: '' }), 4000)
    }
  }

  const Field = ({ label, field, showKey }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      <div className="relative">
        <input type={show[showKey] ? 'text' : 'password'} value={form[field]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })} required
          className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
        <button type="button" onClick={() => setShow({ ...show, [showKey]: !show[showKey] })}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
          {show[showKey] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-black text-gray-800">Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your admin account</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Profile Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-bold text-gray-800 mb-5">Account Info</h2>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black">
              {admin?.name?.[0] || 'A'}
            </div>
            <div>
              <p className="font-bold text-gray-800">{admin?.name}</p>
              <p className="text-sm text-gray-500">{admin?.email}</p>
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full font-medium mt-1 inline-block capitalize">{admin?.role}</span>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500">Organization</span>
              <span className="font-medium text-gray-700">Jinat Jubo Unnayon Sangstha</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500">Reg. No</span>
              <span className="font-medium text-gray-700">124</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Role</span>
              <span className="font-medium text-gray-700 capitalize">{admin?.role}</span>
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-bold text-gray-800 mb-5">Change Password</h2>
          {msg.text && (
            <div className={`mb-4 text-sm px-4 py-3 rounded-xl ${msg.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
              {msg.text}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field label="Current Password" field="currentPassword" showKey="cur" />
            <Field label="New Password" field="newPassword" showKey="new" />
            <Field label="Confirm New Password" field="confirmPassword" showKey="con" />
            <button type="submit" disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm mt-2">
              {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
