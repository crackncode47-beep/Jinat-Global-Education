import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Award, Globe, Cpu, ChevronRight, Star } from 'lucide-react'
import { institutions } from '../data/institutions'
import { useLang } from '../context/LanguageContext'

const t = {
  en: {
    badge: 'Jinat Jubo Unnayon Sangstha, Bogura · Reg. No: 124',
    sub1: 'School to University · Nursery to PhD · Digital Empowerment',
    sub2: 'Five world-class knowledge centers across Bangladesh — delivering excellence in General, Madrasha, Technical, Agriculture, Health, and IT education.',
    explore: 'Explore Programs',
    enroll: 'Enroll Now',
    stats: ['Students Enrolled', 'Knowledge Centers', 'Programs Offered', 'Years of Excellence'],
    secTitle: 'Our 5 Knowledge Centers & Institutions',
    secSub: 'Five strategically located campuses across Bangladesh, each delivering world-class education and digital empowerment.',
    campus: 'Campus',
    viewCampus: 'View Campus',
    whyTitle: 'Why Choose Jinat Global Education?',
    whySub: 'A complete ecosystem of learning, innovation, and empowerment.',
    features: [
      { title: 'Nursery to PhD', desc: 'Complete educational journey under one organization — from early childhood to doctoral research.' },
      { title: 'Digital Empowerment', desc: 'State-of-the-art IT labs, computer courses, and digital literacy programs for all ages.' },
      { title: 'International Standards', desc: 'Curriculum aligned with international benchmarks while rooted in Bangladeshi values.' },
      { title: 'Multi-Stream Education', desc: 'General, Madrasha, Technical, Agriculture, and Health streams under one roof.' },
    ],
    ctaTitle: 'Start Your Educational Journey Today',
    ctaSub: 'Join thousands of students building their future with Jinat Global Education City.',
    apply: 'Apply for Admission',
    learnMore: 'Learn More About Us',
  },
  bn: {
    badge: 'জিনাত যুব উন্নয়ন সংস্থা, বগুড়া · নিবন্ধন নং: ১২৪',
    sub1: 'স্কুল থেকে বিশ্ববিদ্যালয় · নার্সারি থেকে পিএইচডি · ডিজিটাল ক্ষমতায়ন',
    sub2: 'বাংলাদেশ জুড়ে পাঁচটি বিশ্বমানের নলেজ সেন্টার — সাধারণ, মাদ্রাসা, কারিগরি, কৃষি, স্বাস্থ্য ও আইটি শিক্ষায় শ্রেষ্ঠত্ব প্রদান করছে।',
    explore: 'প্রোগ্রাম দেখুন',
    enroll: 'ভর্তি হন',
    stats: ['ভর্তিকৃত শিক্ষার্থী', 'নলেজ সেন্টার', 'প্রোগ্রাম সংখ্যা', 'শ্রেষ্ঠত্বের বছর'],
    secTitle: 'আমাদের ৫টি নলেজ সেন্টার ও প্রতিষ্ঠান',
    secSub: 'বাংলাদেশ জুড়ে কৌশলগতভাবে অবস্থিত পাঁচটি ক্যাম্পাস, প্রতিটি বিশ্বমানের শিক্ষা ও ডিজিটাল ক্ষমতায়ন প্রদান করছে।',
    campus: 'ক্যাম্পাস',
    viewCampus: 'ক্যাম্পাস দেখুন',
    whyTitle: 'কেন জিনাত গ্লোবাল এডুকেশন বেছে নেবেন?',
    whySub: 'শিক্ষা, উদ্ভাবন ও ক্ষমতায়নের একটি সম্পূর্ণ ইকোসিস্টেম।',
    features: [
      { title: 'নার্সারি থেকে পিএইচডি', desc: 'একটি প্রতিষ্ঠানের অধীনে সম্পূর্ণ শিক্ষা যাত্রা — শৈশব থেকে ডক্টরাল গবেষণা পর্যন্ত।' },
      { title: 'ডিজিটাল ক্ষমতায়ন', desc: 'অত্যাধুনিক আইটি ল্যাব, কম্পিউটার কোর্স এবং সকল বয়সের জন্য ডিজিটাল সাক্ষরতা প্রোগ্রাম।' },
      { title: 'আন্তর্জাতিক মান', desc: 'বাংলাদেশি মূল্যবোধে প্রোথিত থেকে আন্তর্জাতিক মানদণ্ডের সাথে সামঞ্জস্যপূর্ণ পাঠ্যক্রম।' },
      { title: 'বহু-ধারা শিক্ষা', desc: 'একই ছাদের নিচে সাধারণ, মাদ্রাসা, কারিগরি, কৃষি ও স্বাস্থ্য ধারা।' },
    ],
    ctaTitle: 'আজই আপনার শিক্ষা যাত্রা শুরু করুন',
    ctaSub: 'জিনাত গ্লোবাল এডুকেশন সিটির সাথে হাজার হাজার শিক্ষার্থীর সাথে যোগ দিন।',
    apply: 'ভর্তির আবেদন করুন',
    learnMore: 'আমাদের সম্পর্কে জানুন',
  },
}

const statsIcons = [Users, BookOpen, Award, Star]
const statsValues = ['10,000+', '5', '50+', '15+']

export default function Home() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-700 opacity-20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-teal-600 opacity-15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-amber-500 opacity-10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-4xl">

            {/* Badge / Pill */}
            <div className="inline-flex items-center gap-2.5 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 text-sm text-white/80 mb-8 shadow-lg">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse flex-shrink-0" />
              <span className="font-medium tracking-wide">{tx.badge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-black leading-[1.1] tracking-tight mb-6">
              <span className="block text-4xl md:text-6xl lg:text-7xl text-white whitespace-nowrap">
                {lang === 'bn' ? 'জিনাত গ্লোবাল এডুকেশন সিটি' : <>Jinat Global <span className="text-amber-400">Education</span> City</>}
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl text-amber-400">&</span>
              <span className="block text-4xl md:text-6xl lg:text-7xl text-white">
                {lang === 'bn' ? 'নলেজ সেন্টার' : 'Knowledge Centers'}
              </span>
            </h1>

            {/* Sub tagline */}
            <p className="text-lg md:text-xl font-semibold text-emerald-300 mb-4 tracking-wide">
              {tx.sub1}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-white/70 mb-10 max-w-2xl leading-relaxed">
              {tx.sub2}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-amber-500/30 text-base"
              >
                {tx.explore} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 border-2 border-white/40 hover:border-white/70 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 text-base"
              >
                {tx.enroll} <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {tx.stats.map((label, i) => {
              const Icon = statsIcons[i]
              return (
                <div key={label} className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-100">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-black text-emerald-800">{statsValues[i]}</p>
                  <p className="text-sm text-gray-500 mt-1">{label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Institutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">{tx.secTitle}</h2>
            <p className="section-subtitle">{tx.secSub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {institutions.map((inst, idx) => (
              <Link
                key={inst.id}
                to={`/campus/${inst.slug}`}
                className={`card group cursor-pointer border-t-4 ${inst.borderColor} hover:-translate-y-1`}
              >
                <div className={`bg-gradient-to-br ${inst.color} p-6 text-white`}>
                  <div className="flex items-start justify-between">
                    <span className="text-4xl">{inst.icon}</span>
                    <span className="text-xs bg-white/20 rounded-full px-3 py-1">{tx.campus} {idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold mt-4 leading-snug">
                    {lang === 'bn' ? inst.name : inst.nameEn}
                  </h3>
                  <p className="text-sm text-white/80 mt-1">{inst.location}</p>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {lang === 'bn' ? inst.shortDescBn : inst.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {inst.programs.slice(0, 2).map((p) => (
                      <span key={p} className={`text-xs px-2.5 py-1 rounded-full font-medium ${inst.badgeColor}`}>{p}</span>
                    ))}
                    {inst.programs.length > 2 && (
                      <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-gray-100 text-gray-600">+{inst.programs.length - 2} more</span>
                    )}
                  </div>
                  <div className={`flex items-center gap-1.5 text-sm font-semibold ${inst.accentColor} group-hover:gap-2.5 transition-all`}>
                    {tx.viewCampus} <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">{tx.whyTitle}</h2>
            <p className="section-subtitle">{tx.whySub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {tx.features.map(({ title, desc }, i) => {
              const icons = [BookOpen, Cpu, Globe, Award]
              const Icon = icons[i]
              return (
                <div key={title} className="text-center p-7 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">{tx.ctaTitle}</h2>
          <p className="text-emerald-100 text-lg mb-8">{tx.ctaSub}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold">{tx.apply}</Link>
            <Link to="/about" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-all">
              {tx.learnMore}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
