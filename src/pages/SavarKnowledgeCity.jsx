import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowLeft, Target, Cpu, Heart, Globe, Award, ChevronRight, Star, Building2, Users, BookOpen, Leaf, Stethoscope } from 'lucide-react'

const stats = [
  { label: 'Location', value: 'Savar Hub, Dhaka', icon: MapPin },
  { label: 'Land Area', value: '1,000 Acres', icon: Building2 },
  { label: 'Investment', value: '৳1,000 Crore', icon: Award },
  { label: 'Timeline', value: '2026–2031', icon: Star },
  { label: 'Hospital Beds', value: '1,000 Beds', icon: Stethoscope },
  { label: 'Experience', value: '22+ Years', icon: Users },
]

const missions = [
  {
    icon: BookOpen,
    color: 'bg-emerald-600',
    title: 'Integrated Education Model',
    titleBn: 'সমন্বিত শিক্ষা মডেল',
    desc: 'General, Madrasah, Technical, Agriculture, and Health education combined under one world-class roof.',
  },
  {
    icon: Cpu,
    color: 'bg-blue-600',
    title: 'Technology & Innovation',
    titleBn: 'প্রযুক্তি ও উদ্ভাবন',
    desc: 'Frontier research in AI, Robotics, Cybersecurity, Blockchain, Quantum Computing, and Biotechnology.',
  },
  {
    icon: Target,
    color: 'bg-purple-600',
    title: 'Research-based Economy',
    titleBn: 'গবেষণা-ভিত্তিক অর্থনীতি',
    desc: 'Long-term income and employment through Patent, Intellectual Property (IP), and Technology Transfer.',
  },
  {
    icon: Heart,
    color: 'bg-red-500',
    title: 'Health & Services',
    titleBn: 'স্বাস্থ্য ও সেবা',
    desc: '1,000-bed international standard charity hospital serving the community with world-class healthcare.',
  },
  {
    icon: Globe,
    color: 'bg-amber-500',
    title: 'Global Partnerships',
    titleBn: 'বৈশ্বিক অংশীদারিত্ব',
    desc: 'Collaborating with World Bank, ADB, IsDB, UNESCO, UNICEF, and global investors for sustainable growth.',
  },
]

const jismStreams = [
  {
    icon: BookOpen,
    color: 'from-emerald-500 to-emerald-700',
    bn: 'আধুনিক সাধারণ শিক্ষা',
    en: 'Modern General Education',
    tech: ['AI Integration', 'Smart Curriculum', 'Digital Assessment', 'Global Standards'],
  },
  {
    icon: Cpu,
    color: 'from-blue-500 to-blue-700',
    bn: 'উন্নত কারিগরি ও আইটি শিক্ষা',
    en: 'Advanced Technical & IT Education',
    tech: ['Robotics', 'Cybersecurity', 'Blockchain', 'FinTech'],
  },
  {
    icon: Star,
    color: 'from-teal-500 to-teal-700',
    bn: 'আধুনিক মাদরাসা ও ডিজিটাল হিফজ শিক্ষা',
    en: 'Advanced Madrasah & Digital Hifz Education',
    tech: ['Digital Hifz System', 'AI Arabic Learning', 'Islamic Finance', 'Global Scholarship'],
  },
  {
    icon: Leaf,
    color: 'from-lime-500 to-lime-700',
    bn: 'স্মার্ট কৃষি শিক্ষা',
    en: 'Smart Agricultural Education',
    tech: ['Precision Farming', 'AgriTech', 'Drone Technology', 'Smart Irrigation'],
  },
  {
    icon: Stethoscope,
    color: 'from-red-500 to-red-700',
    bn: 'আধুনিক স্বাস্থ্য ও চিকিৎসাবিজ্ঞান শিক্ষা',
    en: 'Modern Health & Medical Science',
    tech: ['Telemedicine', 'Biotech Research', 'AI Diagnostics', 'Quantum Medicine'],
  },
]

const partners = ['World Bank', 'ADB', 'IsDB', 'UNESCO', 'UNICEF', 'Global Investors']
const funding = ['PPP', 'FDI', 'International Grants', 'Solidarity Bond', 'CSR', 'IP Royalty']

export default function SavarKnowledgeCity() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700 opacity-20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500 opacity-10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 text-sm text-amber-300 mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              Jinat Jubo Unnayon Sangstha · Reg. No: 124 · Bogura
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
              জিনাত ইন্টারন্যাশনাল{' '}
              <span className="text-amber-400">সলিডারিটি</span>
              <br />এডুকেশন অ্যান্ড আইটি
              <br />
              <span className="text-amber-400">নলেজ সিটি</span>
            </h1>
            <p className="text-lg text-white/70 font-medium mb-3">
              Jinat International Solidarity Education & IT Knowledge City
            </p>
            <p className="text-base text-emerald-200 leading-relaxed max-w-3xl mb-8">
              স্কুল থেকে বিশ্ববিদ্যালয় | নার্সারি থেকে পিএইচডি পর্যন্ত একটি সমন্বিত বৈশ্বিক জ্ঞাননগরী।
              এটি <strong className="text-amber-400">২২ বছরের</strong> সাংগঠনিক অভিজ্ঞতা এবং{' '}
              <strong className="text-amber-400">১০ বছরের</strong> নিবিড় গবেষণার ফল।
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg">
                যোগাযোগ করুন <ChevronRight className="w-5 h-5" />
              </Link>
              <a href="#jism" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-7 py-3.5 rounded-xl transition-all">
                JISM Model দেখুন <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" /></svg>
        </div>
      </section>

      {/* Dedication Banner */}
      <section className="py-10 bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="text-3xl mb-3">🩸</div>
          <h2 className="text-xl md:text-2xl font-black mb-3">আমাদের অঙ্গীকার</h2>
          <p className="text-base md:text-lg text-red-100 leading-relaxed max-w-3xl mx-auto">
            এই প্রকল্পটি গভীর শ্রদ্ধা ও কৃতজ্ঞতার সাথে উৎসর্গ করা হয়েছে — <strong>জুলাই ২০২৪ গণঅভ্যুত্থানের</strong> বীর শহীদদের,
            আহত আন্দোলনকারীদের এবং নতুন বাংলাদেশের স্বপ্নবাজ তরুণ প্রজন্মের প্রতি।
          </p>
          <p className="text-sm text-red-200 mt-3 italic">
            "This project is dedicated with deep respect and gratitude to the brave martyrs and injured activists of the July 2024 mass uprising, and the dream-weaver young generation of the new Bangladesh."
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">প্রকল্প সংক্ষিপ্ত চিত্র</h2>
            <p className="text-gray-500">Project at a Glance — Key Facts & Figures</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="text-center p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 hover:shadow-lg transition-shadow">
                <div className="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg font-black text-emerald-800 leading-tight">{value}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* Extra Details */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: 'Legal Guardian', value: 'Jinat Jubo Unnayon Sangstha (Reg. No: Bogura-124)' },
              { label: 'Promoter & Chief Researcher', value: 'Md. Jahangir Alam, Chairman' },
              { label: 'Head Office', value: 'Savar, Dhaka, Bangladesh' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 p-5 rounded-2xl border border-gray-100 bg-gray-50">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm font-bold text-gray-800 mt-1">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">প্রধান লক্ষ্যসমূহ</h2>
            <p className="text-gray-500">Our Core Mission & Objectives</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map(({ icon: Icon, color, title, titleBn, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className={`w-13 h-13 w-12 h-12 ${color} rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-black text-gray-800 text-base mb-1">{title}</h3>
                <p className="text-sm text-emerald-600 font-semibold mb-3">{titleBn}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JISM Model */}
      <section id="jism" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
              The JISM Model
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">
              জিনাত ইন্টিগ্রেটেড সিনার্জি মডেল
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              5 core educational streams integrated with AI, Robotics, FinTech & Global Entrepreneurship
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jismStreams.map((stream, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`bg-gradient-to-br ${stream.color} p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <stream.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs bg-white/20 rounded-full px-3 py-1 font-semibold">Stream {i + 1}</span>
                  </div>
                  <h3 className="font-black text-lg leading-tight mb-1">{stream.bn}</h3>
                  <p className="text-white/80 text-sm">{stream.en}</p>
                </div>
                <div className="bg-white p-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Integrated Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {stream.tech.map((t) => (
                      <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding & Partners */}
      <section className="py-16 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Funding */}
            <div>
              <h2 className="text-2xl font-black mb-2">Funding Sources</h2>
              <p className="text-emerald-300 text-sm mb-6">অর্থায়নের উৎস</p>
              <div className="grid grid-cols-2 gap-3">
                {funding.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 bg-white/10 border border-white/10 rounded-xl px-4 py-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0" />
                    <span className="text-sm font-medium text-white">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Partners */}
            <div>
              <h2 className="text-2xl font-black mb-2">Global Partners</h2>
              <p className="text-emerald-300 text-sm mb-6">আন্তর্জাতিক অংশীদার</p>
              <div className="grid grid-cols-2 gap-3">
                {partners.map((p) => (
                  <div key={p} className="flex items-center gap-2.5 bg-white/10 border border-white/10 rounded-xl px-4 py-3">
                    <Globe className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-white">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">নেতৃত্ব ও যোগাযোগ</h2>
            <p className="text-gray-500">Leadership & Contact Information</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border border-emerald-100 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xl">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <p className="font-black text-gray-800">Md. Jahangir Alam</p>
                <p className="text-sm text-emerald-600 font-semibold">Chairman & Chief Researcher</p>
                <p className="text-xs text-gray-500 mt-1">Jinat Jubo Unnayon Sangstha</p>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Organization</p>
                  <p className="font-bold text-gray-800">জিনাত যুব উন্নয়ন সংস্থা, বগুড়া (নিবন্ধন নং: ১২৪)</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400">Email</p>
                      <a href="mailto:jahangiralam809@gmail.com" className="text-sm font-semibold text-gray-800 hover:text-emerald-600 transition-colors break-all">
                        jahangiralam809@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400">Head Office</p>
                      <p className="text-sm font-semibold text-gray-800">Savar, Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="mailto:jahangiralam809@gmail.com"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                    <Mail className="w-4 h-4" /> Send Email
                  </a>
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                    <Phone className="w-4 h-4" /> Contact Form
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-emerald-700 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">এই স্বপ্নের অংশ হোন</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Join us in building Bangladesh's most ambitious integrated knowledge city — from Nursery to PhD, from tradition to innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-base">
              Invest & Partner With Us
            </Link>
            <Link to="/programs" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-base">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
