import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, CheckCircle, Eye, Clock, ChevronRight } from 'lucide-react'
import { api } from '../../services/api'

const statusColor = { new: 'bg-blue-100 text-blue-700', read: 'bg-yellow-100 text-yellow-700', replied: 'bg-green-100 text-green-700' }

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.getStats()
      .then(setStats)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return (
    <div className="flex items-center justify-center h-64">
      <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )

  const cards = [
    { label: 'Total Submissions', value: stats?.total || 0, icon: MessageSquare, color: 'bg-blue-500' },
    { label: 'New', value: stats?.new || 0, icon: Clock, color: 'bg-amber-500' },
    { label: 'Read', value: stats?.read || 0, icon: Eye, color: 'bg-purple-500' },
    { label: 'Replied', value: stats?.replied || 0, icon: CheckCircle, color: 'bg-emerald-600' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-black text-gray-800">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back! Here's what's happening.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {cards.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center mb-3`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-3xl font-black text-gray-800">{value}</p>
            <p className="text-sm text-gray-500 mt-1">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Submissions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-gray-800">Recent Submissions</h2>
            <Link to="/admin/submissions" className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
              View all <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="space-y-3">
            {stats?.recent?.length === 0 && <p className="text-sm text-gray-400 text-center py-6">No submissions yet</p>}
            {stats?.recent?.map((s) => (
              <Link key={s._id} to={`/admin/submissions/${s._id}`}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">{s.name}</p>
                  <p className="text-xs text-gray-500 truncate">{s.subject} · {s.campus}</p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ml-3 ${statusColor[s.status]}`}>
                  {s.status}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* By Campus */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-bold text-gray-800 mb-5">Submissions by Campus</h2>
          <div className="space-y-3">
            {stats?.byCampus?.length === 0 && <p className="text-sm text-gray-400 text-center py-6">No data yet</p>}
            {stats?.byCampus?.map((c) => (
              <div key={c._id} className="flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-gray-700 truncate">{c._id}</p>
                    <p className="text-sm font-bold text-gray-800 ml-2">{c.count}</p>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${Math.min((c.count / (stats?.total || 1)) * 100, 100)}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
