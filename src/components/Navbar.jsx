import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, GraduationCap, Languages } from 'lucide-react'
import { institutions } from '../data/institutions'
import { useLang } from '../context/LanguageContext'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()
  const { lang, toggle } = useLang()

  const navLabels = lang === 'en'
    ? { home: 'Home', about: 'About Us', campuses: 'Campuses', programs: 'Academic Programs', vision: 'Vision & Mission', it: 'IT & Innovation', contact: 'Contact Us' }
    : { home: 'হোম', about: 'আমাদের সম্পর্কে', campuses: 'ক্যাম্পাস', programs: 'একাডেমিক প্রোগ্রাম', vision: 'ভিশন ও মিশন', it: 'আইটি ও উদ্ভাবন', contact: 'যোগাযোগ' }

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${isActive ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'}`

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      {/* Top bar */}
      <div className="bg-emerald-800 text-white text-xs py-1.5 px-4 text-center">
        জিনাত যুব উন্নয়ন সংস্থা, বগুড়া | নিবন্ধন নং: ১২৪ | School to University, Nursery to PhD & Digital Empowerment
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-emerald-800 leading-tight">Jinat Global Education City</p>
              <p className="text-xs text-gray-500 leading-tight">Jinat Jubo Unnayon Sangstha · Reg: 124</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <NavLink to="/" className={navLinkClass}>{navLabels.home}</NavLink>
            <NavLink to="/about" className={navLinkClass}>{navLabels.about}</NavLink>

            {/* Campuses Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
              >
                {navLabels.campuses} <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {institutions.map((inst) => (
                    <button
                      key={inst.id}
                      onClick={() => { navigate(`/campus/${inst.slug}`); setDropdownOpen(false) }}
                      className="w-full text-left px-4 py-3 hover:bg-emerald-50 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xl mt-0.5">{inst.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 group-hover:text-emerald-700 leading-tight">{inst.nameEn}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{inst.location}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <button onClick={() => { navigate('/savar-knowledge-city'); setDropdownOpen(false) }}
                      className="w-full text-left px-4 py-3 hover:bg-amber-50 transition-colors group">
                      <div className="flex items-start gap-3">
                        <span className="text-xl mt-0.5">🏙️</span>
                        <div>
                          <p className="text-sm font-semibold text-amber-700 group-hover:text-amber-800 leading-tight">Savar Knowledge City — JISM Model</p>
                          <p className="text-xs text-gray-500 mt-0.5">Full Project Details & Vision</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/programs" className={navLinkClass}>{navLabels.programs}</NavLink>
            <NavLink to="/vision-mission" className={navLinkClass}>{navLabels.vision}</NavLink>
            <NavLink to="/it-innovation" className={navLinkClass}>{navLabels.it}</NavLink>
            <NavLink to="/contact" className={navLinkClass}>{navLabels.contact}</NavLink>
          </div>

          {/* CTA + Lang Toggle + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200"
              title="Switch Language"
            >
              <Languages className="w-3.5 h-3.5" />
              {lang === 'en' ? 'বাংলা' : 'English'}
            </button>
            <Link to="/contact" className="hidden lg:block btn-primary text-sm py-2 px-4">
              {lang === 'en' ? 'Enroll Now' : 'ভর্তি হন'}
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-1">
            {[['/','home'],['/about','about'],['/programs','programs'],['/vision-mission','vision'],['/it-innovation','it'],['/contact','contact']].map(([path, key]) => (
              <NavLink key={path} to={path} onClick={() => setMenuOpen(false)}
                className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-sm font-medium ${isActive ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                {navLabels[key]}
              </NavLink>
            ))}
            <div className="px-3 pt-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Our Campuses</p>
              {institutions.map((inst) => (
                <Link key={inst.id} to={`/campus/${inst.slug}`} onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 py-2 text-sm text-gray-700 hover:text-emerald-600">
                  <span>{inst.icon}</span> {inst.nameEn}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
