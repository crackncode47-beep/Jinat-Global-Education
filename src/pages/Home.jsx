import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Award, Globe, Cpu, ChevronRight, Star, Layers, Building2 } from 'lucide-react'
import { institutions, jismStreams, academyDivisions } from '../data/institutions'
import { useLang } from '../context/LanguageContext'

const t = {
  en: {
    badge: 'Jinat Jubo Unnayon Sangstha, Bogura · Reg. No: 124',
    h1a: 'Jinat Global', h1b: 'Education City', h1c: '& Knowledge Centers',
    sub1: 'School to University · Nursery to PhD · Digital Empowerment',
    sub2: 'Four world-class knowledge centers across Bangladesh — delivering excellence through the JISM model in General, Madrasha, Technical, Agriculture, Health, and IT education.',
    explore: 'Explore Programs', enroll: 'Enroll Now',
    stats: ['Students Enrolled', 'Knowledge Centers', 'Programs Offered', 'Years of Excellence'],
    statsVals: ['10,000+', '4', '50+', '15+'],
    orgTitle: 'About Jinat Jubo Unnayon Sangstha',
    orgBadge: 'Parent Organization · Reg. No: 124',
    orgDesc1: 'Jinat Jubo Unnayon Sangstha is a registered non-profit organization based in Bogura, Bangladesh, dedicated to developing human resources, spreading modern education, and advancing the IT sector across the nation.',
    orgDesc2: 'Our core mission is to build skilled human resources, spread technology-driven quality education, and develop talents globally — through our flagship JISM (Jinat Integrated Synergy Model) framework.',
    orgStats: [['Reg. No.', '124'], ['Campuses', '4'], ['Streams', '5'], ['Students', '10K+']],
    campusTitle: 'Our 4 Knowledge Centers',
    campusSub: 'Four strategically located campuses across Bangladesh, each delivering world-class education and digital empowerment.',
    campus: 'Campus', viewCampus: 'View Campus',
    jismTitle: 'JISM — Jinat Integrated Synergy Model',
    jismSub: 'A revolutionary 5-stream integrated education model — from Nursery to PhD under one organization.',
    jismBtn: 'Explore JISM Model',
    academyTitle: 'Jinat Computer & Language Academy',
    academySub: 'Specialized training in IT & international languages for global career readiness.',
    academyBtn: 'View IT & Innovation',
    whyTitle: 'Why Choose Jinat Global Education?',
    whySub: 'A complete ecosystem of learning, innovation, and empowerment.',
    features: [
      { title: 'Nursery to PhD', desc: 'Complete educational journey under one organization — from early childhood to doctoral research.' },
      { title: 'Digital Empowerment', desc: 'State-of-the-art IT labs, AI, Data Science, and digital literacy programs for all ages.' },
      { title: 'International Standards', desc: 'Curriculum aligned with international benchmarks while rooted in Bangladeshi values.' },
      { title: 'JISM Multi-Stream', desc: 'General, Madrasha, Technical, Agriculture, and Health streams under one integrated model.' },
    ],
    ctaTitle: 'Start Your Educational Journey Today',
    ctaSub: 'Join thousands of students building their future with Jinat Global Education City.',
    apply: 'Apply for Admission', learnMore: 'Learn More About Us',
  },
  bn: {
    badge: 'জিনাত যুব উন্নয়ন সংস্থা, বগুড়া · নিবন্ধন নং: ১২৪',
    h1a: 'জিনাত গ্লোবাল', h1b: 'এডুকেশন সিটি', h1c: '& নলেজ সেন্টার',
    sub1: 'স্কুল থেকে বিশ্ববিদ্যালয় · নার্সারি থেকে পিএইচডি · ডিজিটাল ক্ষমতায়ন',
    sub2: 'বাংলাদেশ জুড়ে চারটি বিশ্বমানের নলেজ সেন্টার — JISM মডেলের মাধ্যমে সাধারণ, মাদ্রাসা, কারিগরি, কৃষি, স্বাস্থ্য ও আইটি শিক্ষায় শ্রেষ্ঠত্ব প্রদান করছে।',
    explore: 'প্রোগ্রাম দেখুন', enroll: 'ভর্তি হন',
    stats: ['ভর্তিকৃত শিক্ষার্থী', 'নলেজ সেন্টার', 'প্রোগ্রাম সংখ্যা', 'শ্রেষ্ঠত্বের বছর'],
    statsVals: ['১০,০০০+', '৪', '৫০+', '১৫+'],
    orgTitle: 'জিনাত যুব উন্নয়ন সংস্থা সম্পর্কে',
    orgBadge: 'মূল সংস্থা · নিবন্ধন নং: ১২৪',
    orgDesc1: 'জিনাত যুব উন্নয়ন সংস্থা বগুড়া, বাংলাদেশ ভিত্তিক একটি নিবন্ধিত অলাভজনক সংগঠন, যা সারা দেশে মানবসম্পদ উন্নয়ন, আধুনিক শিক্ষা প্রসার এবং আইটি খাতের অগ্রগতিতে নিবেদিত।',
    orgDesc2: 'আমাদের মূল লক্ষ্য হলো দক্ষ মানবসম্পদ গড়ে তোলা, প্রযুক্তি-চালিত মানসম্পন্ন শিক্ষা প্রসার করা এবং বৈশ্বিকভাবে প্রতিভা বিকাশ করা — আমাদের ফ্ল্যাগশিপ JISM (জিনাত ইন্টিগ্রেটেড সিনার্জি মডেল) কাঠামোর মাধ্যমে।',
    orgStats: [['নিবন্ধন নং', '১২৪'], ['ক্যাম্পাস', '৪'], ['ধারা', '৫'], ['শিক্ষার্থী', '১০হাজার+']],
    campusTitle: 'আমাদের ৪টি নলেজ সেন্টার',
    campusSub: 'বাংলাদেশ জুড়ে কৌশলগতভাবে অবস্থিত চারটি ক্যাম্পাস, প্রতিটি বিশ্বমানের শিক্ষা ও ডিজিটাল ক্ষমতায়ন প্রদান করছে।',
    campus: 'ক্যাম্পাস', viewCampus: 'ক্যাম্পাস দেখুন',
    jismTitle: 'JISM — জিনাত ইন্টিগ্রেটেড সিনার্জি মডেল',
    jismSub: 'একটি বিপ্লবী ৫-ধারা সমন্বিত শিক্ষা মডেল — একটি সংস্থার অধীনে নার্সারি থেকে পিএইচডি পর্যন্ত।',
    jismBtn: 'JISM মডেল দেখুন',
    academyTitle: 'জিনাত কম্পিউটার ও ল্যাঙ্গুয়েজ একাডেমি',
    academySub: 'বৈশ্বিক ক্যারিয়ার প্রস্তুতির জন্য আইটি ও আন্তর্জাতিক ভাষায় বিশেষায়িত প্রশিক্ষণ।',
    academyBtn: 'আইটি ও উদ্ভাবন দেখুন',
    whyTitle: 'কেন জিনাত গ্লোবাল এডুকেশন বেছে নেবেন?',
    whySub: 'শিক্ষা, উদ্ভাবন ও ক্ষমতায়নের একটি সম্পূর্ণ ইকোসিস্টেম।',
    features: [
      { title: 'নার্সারি থেকে পিএইচডি', desc: 'একটি প্রতিষ্ঠানের অধীনে সম্পূর্ণ শিক্ষা যাত্রা — শৈশব থেকে ডক্টরাল গবেষণা পর্যন্ত।' },
      { title: 'ডিজিটাল ক্ষমতায়ন', desc: 'অত্যাধুনিক আইটি ল্যাব, AI, ডেটা সায়েন্স এবং সকল বয়সের জন্য ডিজিটাল সাক্ষরতা প্রোগ্রাম।' },
      { title: 'আন্তর্জাতিক মান', desc: 'বাংলাদেশি মূল্যবোধে প্রোথিত থেকে আন্তর্জাতিক মানদণ্ডের সাথে সামঞ্জস্যপূর্ণ পাঠ্যক্রম।' },
      { title: 'JISM বহু-ধারা', desc: 'একটি সমন্বিত মডেলের অধীনে সাধারণ, মাদ্রাসা, কারিগরি, কৃষি ও স্বাস্থ্য ধারা।' },
    ],
    ctaTitle: 'আজই আপনার শিক্ষা যাত্রা শুরু করুন',
    ctaSub: 'জিনাত গ্লোবাল এডুকেশন সিটির সাথে হাজার হাজার শিক্ষার্থীর সাথে যোগ দিন।',
    apply: 'ভর্তির আবেদন করুন', learnMore: 'আমাদের সম্পর্কে জানুন',
  },
}

const statsIcons = [Users, Building2, Award, Star]
const featureIcons = [BookOpen, Cpu, Globe, Layers]

export default function Home() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              {tx.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              {tx.h1a}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">{tx.h1b}</span>
              <br />{tx.h1c}
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-4 leading-relaxed">{tx.sub1}</p>
            <p className="text-base text-emerald-200 mb-10 max-w-2xl leading-relaxed">{tx.sub2}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/programs" className="btn-gold flex items-center gap-2">
                {tx.explore} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200">
                {tx.enroll} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" /></svg>
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
                  <p className="text-3xl font-black text-emerald-800">{tx.statsVals[i]}</p>
                  <p className="text-sm text-gray-500 mt-1">{label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Parent Organization Overview */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                {tx.orgBadge}
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-6 leading-tight">{tx.orgTitle}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{tx.orgDesc1}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{tx.orgDesc2}</p>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                {tx.learnMore} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {tx.orgStats.map(([label, val]) => (
                <div key={label} className="bg-white rounded-2xl p-6 text-center shadow-md border border-emerald-100 hover:shadow-lg transition-shadow">
                  <p className="text-3xl font-black text-emerald-700 mb-1">{val}</p>
                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 Campuses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">{tx.campusTitle}</h2>
            <p className="section-subtitle">{tx.campusSub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {institutions.map((inst, idx) => (
              <Link key={inst.id} to={`/campus/${inst.slug}`}
                className={`card group cursor-pointer border-t-4 ${inst.borderColor} hover:-translate-y-1`}>
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

      {/* JISM Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" /> JISM
            </div>
            <h2 className="section-title">{tx.jismTitle}</h2>
            <p className="section-subtitle">{tx.jismSub}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
            {jismStreams.map((stream, idx) => (
              <div key={stream.id} className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-b-4 ${stream.borderColor}`}>
                <div className={`bg-gradient-to-br ${stream.gradientColor} p-5 text-white text-center`}>
                  <div className="text-4xl mb-2">{stream.icon}</div>
                  <div className="text-xs bg-white/20 rounded-full px-2 py-0.5 inline-block mb-2">
                    {lang === 'bn' ? `ধারা ${idx + 1}` : `Stream ${idx + 1}`}
                  </div>
                </div>
                <div className="bg-white p-4 text-center">
                  <h3 className="text-xs font-bold text-gray-800 leading-tight">
                    {lang === 'bn' ? stream.titleBn : stream.titleEn}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/jism" className="btn-primary inline-flex items-center gap-2">
              {tx.jismBtn} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Academy Highlight */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-4">
              💻 {lang === 'bn' ? 'বিশেষ একাডেমি' : 'Special Academy'}
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">{tx.academyTitle}</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">{tx.academySub}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {Object.values(academyDivisions).map((div) => (
              <div key={div.titleEn} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{div.icon}</span>
                  <h3 className="font-bold text-lg">{lang === 'bn' ? div.titleBn : div.titleEn}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {div.courses.map((c) => (
                    <div key={c.nameEn} className="flex items-center gap-2 text-sm text-white/80">
                      <span>{c.icon}</span>
                      <span>{lang === 'bn' ? c.nameBn : c.nameEn}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/it-innovation" className="btn-gold inline-flex items-center gap-2">
              {tx.academyBtn} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">{tx.whyTitle}</h2>
            <p className="section-subtitle">{tx.whySub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {tx.features.map(({ title, desc }, i) => {
              const Icon = featureIcons[i]
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

      {/* CTA */}
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
