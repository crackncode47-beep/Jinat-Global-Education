import { Link } from 'react-router-dom'
import { GraduationCap, Phone, Mail, MapPin, Share2, Play, MessageCircle } from 'lucide-react'
import { institutions } from '../data/institutions'
import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { lang } = useLang()
  const quickLinks = lang === 'en'
    ? [['/', 'Home'], ['/about', 'About Us'], ['/programs', 'Academic Programs'], ['/jism', 'JISM Model'], ['/it-innovation', 'IT & Innovation'], ['/contact', 'Contact Us']]
    : [['/', 'হোম'], ['/about', 'আমাদের সম্পর্কে'], ['/programs', 'একাডেমিক প্রোগ্রাম'], ['/jism', 'JISM মডেল'], ['/it-innovation', 'আইটি ও উদ্ভাবন'], ['/contact', 'যোগাযোগ']]
  const headings = lang === 'en'
    ? { links: 'Quick Links', campuses: 'Our Campuses', contact: 'Contact' }
    : { links: 'দ্রুত লিংক', campuses: 'আমাদের ক্যাম্পাস', contact: 'যোগাযোগ' }
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight">Jinat Global Education City</p>
                <p className="text-xs text-gray-400">& Knowledge Centers</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              জিনাত যুব উন্নয়ন সংস্থা, বগুড়া (নিবন্ধন নং: ১২৪) — Empowering Bangladesh through education from School to University, Nursery to PhD.
            </p>
            <div className="flex gap-3">
              {[Share2, Play, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{headings.links}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(([path, label]) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Campuses */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{headings.campuses}</h4>
            <ul className="space-y-2.5">
              {institutions.map((inst) => (
                <li key={inst.id}>
                  <Link to={`/campus/${inst.slug}`} className="text-sm text-gray-400 hover:text-emerald-400 transition-colors flex items-start gap-1.5">
                    <span className="mt-0.5">{inst.icon}</span>
                    <span>{inst.location}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{headings.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                Sherpur, Bogura, Rajshahi Division, Bangladesh
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                +880 1700-000003
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                info@jinatglobal.edu.bd
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Jinat Jubo Unnayon Sangstha (Reg. No. 124). All rights reserved.</p>
          <p>Jinat Global Education City & Knowledge Centers</p>
        </div>
      </div>
    </footer>
  )
}
