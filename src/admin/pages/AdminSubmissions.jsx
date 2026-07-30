import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Trash2, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import { api } from '../../services/api'

const statusColor = { new: 'bg-blue-100 text-blue-700', read: 'bg-yellow-100 text-yellow-700', replied: 'bg-green-100 text-green-700' }

export default function AdminSubmissions() {
  const [data, setData] = useState({ submissions: [], total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({ status: '', campus: '', page: 1 })
  const [search, setSearch] = useState('')

  const load = async () => {
    setLoading(true)
    try {
      const params = { page: filters.page, limit: 15 }
      if (filters.status) params.status = filters.status
      if (filters.campus) params.campus = filters.campus
      const res = await api.getSubmissions(params)
      setData(res)
    } catch (err) { console.error(err) }
    finally { setLoading(false) }
  }

  useEffect(() => { load() }, [filters])

  const handleDelete = async (id) => {
    if (!confirm('Delete this submission?')) return
    await api.deleteSubmission(id)
    load()
  }

  const filtered = search
    ? data.submissions.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.email.toLowerCase().includes(search.toLowerCase()) ||
        s.subject.toLowerCase().includes(search.toLowerCase()))
    : data.submissions

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-black text-gray-800">Submissions</h1>
        <p className="text-gray-500 text-sm mt-1">{data.total} total inquiries received</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-5 flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, email, subject..."
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500" />
        </div>
        <select value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value, page: 1 })}
          className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
          <option value="">All Status</option>
          <option value="new">New</option>
          <option value="read">Read</option>
          <option value="replied">Replied</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-48">
            <div className="w-7 h-7 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">No submissions found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  {['Name', 'Email', 'Campus', 'Subject', 'Status', 'Date', ''].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((s) => (
                  <tr key={s._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm font-semibold text-gray-800">{s.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{s.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-500 max-w-32 truncate">{s.campus}</td>
                    <td className="px-4 py-3 text-sm text-gray-500 max-w-40 truncate">{s.subject}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColor[s.status]}`}>{s.status}</span>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-400">{new Date(s.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Link to={`/admin/submissions/${s._id}`}
                          className="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button onClick={() => handleDelete(s._id)}
                          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {data.pages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
            <p className="text-sm text-gray-500">Page {filters.page} of {data.pages}</p>
            <div className="flex gap-2">
              <button disabled={filters.page === 1} onClick={() => setFilters({ ...filters, page: filters.page - 1 })}
                className="p-2 rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button disabled={filters.page === data.pages} onClick={() => setFilters({ ...filters, page: filters.page + 1 })}
                className="p-2 rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
