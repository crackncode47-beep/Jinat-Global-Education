import { useParams, Link, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, BookOpen, Building2, ArrowLeft, CheckCircle, ChevronRight, Image } from 'lucide-react'
import { institutions } from '../data/institutions'
import { api } from '../services/api'
import { useLang } from '../context/LanguageContext'

const t = {
  en: {
    back: 'Back to Home',
    badge: 'Knowledge Center',
    aboutTitle: 'About This Campus',
    aboutExtra: 'As part of the Jinat Global Education City network under Jinat Jubo Unnayon Sangstha (Reg. No. 124), this campus upholds the highest standards of academic excellence while remaining deeply committed to the local community it serves.',
    programsTitle: 'Academic Programs',
    facilitiesTitle: 'Campus Facilities',
    galleryTitle: 'Photo Gallery',
    photoLabel: 'Campus Photo',
    contactTitle: 'Contact This Campus',
    mapLabel: 'Google Maps Integration',
    otherTitle: 'Other Campuses',
    inquiryBtn: 'Send Inquiry',
    applyBtn: 'Apply Now',
  },
  bn: {
    back: 'হোমে ফিরুন',
    badge: 'নলেজ সেন্টার',
    aboutTitle: 'এই ক্যাম্পাস সম্পর্কে',
    aboutExtra: 'জিনাত যুব উন্নয়ন সংস্থার (নিবন্ধন নং: ১২৪) অধীনে জিনাত গ্লোবাল এডুকেশন সিটি নেটওয়ার্কের অংশ হিসেবে, এই ক্যাম্পাস একাডেমিক শ্রেষ্ঠত্বের সর্বোচ্চ মান বজায় রাখে এবং স্থানীয় সম্প্রদায়ের প্রতি গভীরভাবে প্রতিশ্রুতিবদ্ধ।',
    programsTitle: 'একাডেমিক প্রোগ্রামসমূহ',
    facilitiesTitle: 'ক্যাম্পাস সুবিধাসমূহ',
    galleryTitle: 'ফটো গ্যালারি',
    photoLabel: 'ক্যাম্পাস ছবি',
    contactTitle: 'এই ক্যাম্পাসে যোগাযোগ করুন',
    mapLabel: 'গুগল ম্যাপস ইন্টিগ্রেশন',
    otherTitle: 'অন্যান্য ক্যাম্পাস',
    inquiryBtn: 'জিজ্ঞাসা পাঠান',
    applyBtn: 'এখনই আবেদন করুন',
  },
}

export default function InstitutionPage() {
  const { slug } = useParams()
  const { lang } = useLang()
  const tx = t[lang]
  const inst = institutions.find((i) => i.slug === slug)

  if (!inst) return <Navigate to="/" replace />

  const [photos, setPhotos] = useState([])
  useEffect(() => {
    api.getPhotos(inst.id).then(setPhotos).catch(() => {})
  }, [inst.id])

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className={`bg-gradient-to-br ${inst.color} text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {tx.back}
          </Link>
          <div className="flex items-start gap-6">
            <span className="text-6xl">{inst.icon}</span>
            <div>
              <div className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                {tx.badge}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-2">
                {lang === 'bn' ? inst.name : inst.nameEn}
              </h1>
              <p className="text-xl text-white/80 font-medium mb-3">{inst.nameEn}</p>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{inst.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <div className="bg-gray-900 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-6 items-center justify-between text-sm">
          <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-emerald-400" />{inst.phone}</div>
          <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-emerald-400" />{inst.email}</div>
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-400" />{inst.address}</div>
          <Link to="/contact" className="btn-primary text-xs py-2 px-4">{tx.applyBtn}</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-black text-gray-800 mb-4">{tx.aboutTitle}</h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {lang === 'bn' ? inst.detailsBn : inst.details}
              </p>
              <p className="text-gray-600 leading-relaxed text-base mt-4">{tx.aboutExtra}</p>
            </div>

            {/* Programs */}
            <div>
              <h2 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-2">
                <BookOpen className={`w-6 h-6 ${inst.accentColor}`} /> {tx.programsTitle}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {inst.programs.map((prog) => (
                  <div key={prog} className={`flex items-center gap-3 p-4 rounded-xl ${inst.lightColor} border border-opacity-50`}>
                    <CheckCircle className={`w-5 h-5 ${inst.accentColor} flex-shrink-0`} />
                    <span className="text-sm font-medium text-gray-700">{prog}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div>
              <h2 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-2">
                <Building2 className={`w-6 h-6 ${inst.accentColor}`} /> {tx.facilitiesTitle}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {inst.facilities.map((fac) => (
                  <div key={fac} className="text-center p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className={`w-10 h-10 rounded-xl ${inst.lightColor} flex items-center justify-center mx-auto mb-3`}>
                      <Building2 className={`w-5 h-5 ${inst.accentColor}`} />
                    </div>
                    <p className="text-sm font-semibold text-gray-700">{fac}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-2xl font-black text-gray-800 mb-6">{tx.galleryTitle}</h2>
              {photos.length === 0 ? (
                <div className={`rounded-2xl ${inst.lightColor} border border-gray-100 flex flex-col items-center justify-center h-48 text-gray-400`}>
                  <Image className="w-10 h-10 mb-2 opacity-30" />
                  <p className="text-sm">No photos uploaded yet</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {photos.map((photo) => (
                    <div key={photo.id} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <img src={`http://localhost:5000${photo.url}`} alt={photo.caption} className="w-full aspect-video object-cover" />
                      {photo.caption && <p className="text-xs text-gray-500 px-3 py-2 truncate">{photo.caption}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">{tx.contactTitle}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className={`w-5 h-5 ${inst.accentColor} flex-shrink-0 mt-0.5`} />
                  <p className="text-sm text-gray-600">{inst.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className={`w-5 h-5 ${inst.accentColor} flex-shrink-0`} />
                  <p className="text-sm text-gray-600">{inst.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className={`w-5 h-5 ${inst.accentColor} flex-shrink-0`} />
                  <p className="text-sm text-gray-600 break-all">{inst.email}</p>
                </div>
              </div>
              <Link to="/contact" className={`mt-5 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r ${inst.color} hover:opacity-90 transition-opacity`}>
                {tx.inquiryBtn} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="card overflow-hidden">
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Map — {inst.location}</p>
                  <p className="text-xs text-gray-400 mt-1">{tx.mapLabel}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 text-center">{inst.address}</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-gray-800 mb-4">{tx.otherTitle}</h3>
              <div className="space-y-3">
                {institutions.filter((i) => i.id !== inst.id).map((other) => (
                  <Link key={other.id} to={`/campus/${other.slug}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                    <span className="text-xl">{other.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-700 truncate group-hover:text-emerald-600">
                        {lang === 'bn' ? other.name : other.nameEn}
                      </p>
                      <p className="text-xs text-gray-400">{other.location}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-500" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
