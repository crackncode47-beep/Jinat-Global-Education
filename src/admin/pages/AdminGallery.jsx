import { useEffect, useState, useRef } from 'react'
import { Upload, Trash2, Image, X, CheckCircle } from 'lucide-react'
import { api } from '../../services/api'
import { institutions } from '../../data/institutions'

export default function AdminGallery() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [selectedCampus, setSelectedCampus] = useState('')
  const [filterCampus, setFilterCampus] = useState('')
  const [caption, setCaption] = useState('')
  const [preview, setPreview] = useState(null)
  const [file, setFile] = useState(null)
  const [msg, setMsg] = useState({ text: '', type: '' })
  const fileRef = useRef()

  const load = async () => {
    setLoading(true)
    try {
      const data = await api.getPhotos(filterCampus || null)
      setPhotos(data)
    } catch (err) { console.error(err) }
    finally { setLoading(false) }
  }

  useEffect(() => { load() }, [filterCampus])

  const handleFile = (e) => {
    const f = e.target.files[0]
    if (!f) return
    setFile(f)
    setPreview(URL.createObjectURL(f))
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!file || !selectedCampus) return setMsg({ text: 'Please select a campus and image', type: 'error' })
    setUploading(true)
    try {
      await api.uploadPhoto(selectedCampus, caption, file)
      setMsg({ text: 'Photo uploaded successfully!', type: 'success' })
      setFile(null); setPreview(null); setCaption(''); setSelectedCampus('')
      fileRef.current.value = ''
      load()
    } catch (err) {
      setMsg({ text: err.message, type: 'error' })
    } finally {
      setUploading(false)
      setTimeout(() => setMsg({ text: '', type: '' }), 3000)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this photo?')) return
    await api.deletePhoto(id)
    load()
  }

  const getCampusName = (id) => institutions.find((i) => i.id === id)?.nameEn || id

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-black text-gray-800">Photo Gallery</h1>
        <p className="text-gray-500 text-sm mt-1">Upload and manage campus photos</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upload Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
            <h2 className="font-bold text-gray-800 mb-5 flex items-center gap-2">
              <Upload className="w-5 h-5 text-emerald-600" /> Upload Photo
            </h2>

            {msg.text && (
              <div className={`mb-4 flex items-center gap-2 text-sm px-4 py-3 rounded-xl ${msg.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                {msg.type === 'success' ? <CheckCircle className="w-4 h-4 flex-shrink-0" /> : <X className="w-4 h-4 flex-shrink-0" />}
                {msg.text}
              </div>
            )}

            <form onSubmit={handleUpload} className="space-y-4">
              {/* Campus Select */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Select Campus *</label>
                <select value={selectedCampus} onChange={(e) => setSelectedCampus(e.target.value)} required
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                  <option value="">-- Choose Campus --</option>
                  {institutions.map((inst) => (
                    <option key={inst.id} value={inst.id}>{inst.icon} {inst.nameEn}</option>
                  ))}
                </select>
              </div>

              {/* Caption */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Caption</label>
                <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)}
                  placeholder="e.g. Computer Lab, Main Building..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>

              {/* File Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Photo * (max 5MB)</label>
                <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} required
                  className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-emerald-50 file:text-emerald-700 file:font-semibold hover:file:bg-emerald-100 cursor-pointer" />
              </div>

              {/* Preview */}
              {preview && (
                <div className="relative rounded-xl overflow-hidden border border-gray-200">
                  <img src={preview} alt="preview" className="w-full h-40 object-cover" />
                  <button type="button" onClick={() => { setPreview(null); setFile(null); fileRef.current.value = '' }}
                    className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <button type="submit" disabled={uploading || !file}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm">
                {uploading
                  ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  : <Upload className="w-4 h-4" />}
                {uploading ? 'Uploading...' : 'Upload Photo'}
              </button>
            </form>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="lg:col-span-2">
          {/* Filter */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-5 flex items-center gap-3">
            <Image className="w-4 h-4 text-gray-400" />
            <select value={filterCampus} onChange={(e) => setFilterCampus(e.target.value)}
              className="flex-1 text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
              <option value="">All Campuses ({photos.length} photos)</option>
              {institutions.map((inst) => (
                <option key={inst.id} value={inst.id}>{inst.icon} {inst.nameEn}</option>
              ))}
            </select>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-48">
              <div className="w-7 h-7 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : photos.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 flex flex-col items-center justify-center h-48 text-gray-400">
              <Image className="w-10 h-10 mb-2 opacity-30" />
              <p className="text-sm">No photos uploaded yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((photo) => (
                <div key={photo.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <img
                    src={`http://localhost:5000${photo.url}`}
                    alt={photo.caption}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="p-3">
                    <p className="text-xs font-semibold text-gray-700 truncate">{photo.caption || 'No caption'}</p>
                    <p className="text-xs text-gray-400 mt-0.5 truncate">{getCampusName(photo.campusId)}</p>
                  </div>
                  <button onClick={() => handleDelete(photo.id)}
                    className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-md">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
