import { Link } from 'react-router-dom'
import { ChevronRight, Layers, CheckCircle } from 'lucide-react'
import { jismStreams, academyDivisions } from '../data/institutions'
import { useLang } from '../context/LanguageContext'

const t = {
  en: {
    heroBadge: 'Jinat Integrated Synergy Model',
    heroTitle: 'JISM — 5 Educational Streams',
    heroSub: 'A revolutionary integrated education model combining 5 distinct academic streams under one roof — from Nursery to PhD.',
    whatTitle: 'What is JISM?',
    whatDesc1: 'The Jinat Integrated Synergy Model (JISM) is the core educational framework of Jinat Global Education City. It represents a holistic, multi-stream approach to education that ensures every student — regardless of their background, interest, or career goal — finds the right academic pathway.',
    whatDesc2: 'Under JISM, five distinct educational streams operate in synergy, sharing resources, infrastructure, and values while maintaining their unique academic identities. This model enables students to transition between streams, pursue interdisciplinary studies, and emerge as well-rounded, skilled professionals.',
    streamsTitle: '5 Core Educational Streams',
    streamsSub: 'Each stream is designed to meet specific educational needs while maintaining the highest academic standards.',
    levelsLabel: 'Academic Levels',
    subjectsLabel: 'Core Subjects',
    academyTitle: 'Jinat Computer & Language Academy',
    academySub: 'A specialized supporting academy with two major divisions — empowering students with digital skills and international language proficiency.',
    academyDesc: 'Jinat Computer & Language Academy operates as the digital and linguistic arm of Jinat Global Education City. It bridges the gap between traditional education and the demands of the modern global economy by offering cutting-edge IT training and international language programs.',
    durationLabel: 'Duration',
    ctaTitle: 'Join the JISM Revolution',
    ctaSub: 'Be part of Bangladesh\'s most comprehensive integrated education model. Choose your stream and start your journey today.',
    applyBtn: 'Apply for Admission',
    contactBtn: 'Contact Us',
  },
  bn: {
    heroBadge: 'জিনাত ইন্টিগ্রেটেড সিনার্জি মডেল',
    heroTitle: 'JISM — ৫টি শিক্ষা ধারা',
    heroSub: 'একটি বিপ্লবী সমন্বিত শিক্ষা মডেল যা একই ছাদের নিচে ৫টি স্বতন্ত্র একাডেমিক ধারাকে একত্রিত করে — নার্সারি থেকে পিএইচডি পর্যন্ত।',
    whatTitle: 'JISM কী?',
    whatDesc1: 'জিনাত ইন্টিগ্রেটেড সিনার্জি মডেল (JISM) হলো জিনাত গ্লোবাল এডুকেশন সিটির মূল শিক্ষামূলক কাঠামো। এটি শিক্ষার একটি সামগ্রিক, বহু-ধারা পদ্ধতির প্রতিনিধিত্ব করে যা নিশ্চিত করে যে প্রতিটি শিক্ষার্থী — তাদের পটভূমি, আগ্রহ বা ক্যারিয়ার লক্ষ্য নির্বিশেষে — সঠিক একাডেমিক পথ খুঁজে পায়।',
    whatDesc2: 'JISM-এর অধীনে, পাঁচটি স্বতন্ত্র শিক্ষা ধারা সমন্বয়ে কাজ করে, সম্পদ, অবকাঠামো এবং মূল্যবোধ ভাগ করে নেয় এবং তাদের অনন্য একাডেমিক পরিচয় বজায় রাখে। এই মডেল শিক্ষার্থীদের ধারার মধ্যে স্থানান্তর করতে, আন্তঃবিভাগীয় অধ্যয়ন করতে এবং সুষম, দক্ষ পেশাদার হিসেবে বের হতে সক্ষম করে।',
    streamsTitle: '৫টি মূল শিক্ষা ধারা',
    streamsSub: 'প্রতিটি ধারা সর্বোচ্চ একাডেমিক মান বজায় রেখে নির্দিষ্ট শিক্ষামূলক চাহিদা পূরণের জন্য ডিজাইন করা হয়েছে।',
    levelsLabel: 'একাডেমিক স্তর',
    subjectsLabel: 'মূল বিষয়',
    academyTitle: 'জিনাত কম্পিউটার ও ল্যাঙ্গুয়েজ একাডেমি',
    academySub: 'দুটি প্রধান বিভাগ সহ একটি বিশেষায়িত সহায়ক একাডেমি — শিক্ষার্থীদের ডিজিটাল দক্ষতা ও আন্তর্জাতিক ভাষা দক্ষতায় ক্ষমতায়িত করছে।',
    academyDesc: 'জিনাত কম্পিউটার ও ল্যাঙ্গুয়েজ একাডেমি জিনাত গ্লোবাল এডুকেশন সিটির ডিজিটাল ও ভাষাগত শাখা হিসেবে কাজ করে। এটি অত্যাধুনিক আইটি প্রশিক্ষণ ও আন্তর্জাতিক ভাষা প্রোগ্রাম অফার করে ঐতিহ্যবাহী শিক্ষা ও আধুনিক বৈশ্বিক অর্থনীতির চাহিদার মধ্যে সেতুবন্ধন তৈরি করে।',
    durationLabel: 'মেয়াদ',
    ctaTitle: 'JISM বিপ্লবে যোগ দিন',
    ctaSub: 'বাংলাদেশের সবচেয়ে ব্যাপক সমন্বিত শিক্ষা মডেলের অংশ হন। আপনার ধারা বেছে নিন এবং আজই আপনার যাত্রা শুরু করুন।',
    applyBtn: 'ভর্তির আবেদন করুন',
    contactBtn: 'যোগাযোগ করুন',
  },
}

export default function JISM() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-blue-900 to-purple-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-sm mb-6">
            <Layers className="w-4 h-4 text-amber-400" />
            {tx.heroBadge}
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            {tx.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            {tx.heroSub}
          </p>
          {/* 5 stream icons preview */}
          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            {jismStreams.map((s) => (
              <div key={s.id} className="flex flex-col items-center gap-1">
                <div className={`w-14 h-14 bg-gradient-to-br ${s.gradientColor} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                  {s.icon}
                </div>
                <span className="text-xs text-white/70 max-w-[70px] text-center leading-tight">
                  {lang === 'bn' ? s.titleBn.split(' ')[0] : s.titleEn.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is JISM */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                JISM
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-6">{tx.whatTitle}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{tx.whatDesc1}</p>
              <p className="text-gray-600 leading-relaxed">{tx.whatDesc2}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '5', label: lang === 'bn' ? 'শিক্ষা ধারা' : 'Education Streams' },
                { val: '4', label: lang === 'bn' ? 'ক্যাম্পাস' : 'Campuses' },
                { val: 'Nursery', label: lang === 'bn' ? 'থেকে শুরু' : 'Starting From' },
                { val: 'PhD', label: lang === 'bn' ? 'পর্যন্ত' : 'Up To' },
              ].map(({ val, label }) => (
                <div key={label} className="bg-white rounded-2xl p-6 text-center shadow-md border border-emerald-100">
                  <p className="text-3xl font-black text-emerald-700 mb-1">{val}</p>
                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 Streams */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">{tx.streamsTitle}</h2>
            <p className="section-subtitle">{tx.streamsSub}</p>
          </div>
          <div className="space-y-8">
            {jismStreams.map((stream, idx) => (
              <div key={stream.id} className={`rounded-3xl overflow-hidden shadow-lg border-l-8 ${stream.borderColor} hover:shadow-xl transition-shadow`}>
                <div className="grid lg:grid-cols-3">
                  {/* Left — Title */}
                  <div className={`bg-gradient-to-br ${stream.gradientColor} p-8 text-white flex flex-col justify-center`}>
                    <div className="text-5xl mb-4">{stream.icon}</div>
                    <div className="text-xs font-bold bg-white/20 rounded-full px-3 py-1 inline-block mb-3 w-fit">
                      {lang === 'bn' ? `ধারা ${idx + 1}` : `Stream ${idx + 1}`}
                    </div>
                    <h3 className="text-xl font-black leading-tight mb-2">
                      {lang === 'bn' ? stream.titleBn : stream.titleEn}
                    </h3>
                    {lang === 'bn' && (
                      <p className="text-sm text-white/70">{stream.titleEn}</p>
                    )}
                  </div>
                  {/* Middle — Description + Levels */}
                  <div className={`${stream.lightColor} p-8`}>
                    <p className="text-gray-700 leading-relaxed mb-5 text-sm">
                      {lang === 'bn' ? stream.descBn : stream.descEn}
                    </p>
                    <p className={`text-xs font-bold ${stream.accentColor} uppercase tracking-wider mb-3`}>
                      {tx.levelsLabel}
                    </p>
                    <div className="space-y-1.5">
                      {stream.levels.map((lvl) => (
                        <div key={lvl} className="flex items-center gap-2 text-sm text-gray-600">
                          <ChevronRight className={`w-3.5 h-3.5 ${stream.accentColor} flex-shrink-0`} />
                          {lvl}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Right — Subjects */}
                  <div className="bg-white p-8">
                    <p className={`text-xs font-bold ${stream.accentColor} uppercase tracking-wider mb-3`}>
                      {tx.subjectsLabel}
                    </p>
                    <div className="space-y-2">
                      {stream.subjects.map((sub) => (
                        <div key={sub} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <CheckCircle className={`w-4 h-4 ${stream.accentColor} flex-shrink-0`} />
                          {sub}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jinat Computer & Language Academy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
              💻 {lang === 'bn' ? 'বিশেষ সংযোজন' : 'Special Addition'}
            </div>
            <h2 className="section-title">{tx.academyTitle}</h2>
            <p className="section-subtitle">{tx.academySub}</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8 p-8">
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">{tx.academyDesc}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {Object.values(academyDivisions).map((div) => (
              <div key={div.titleEn} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${div.color} p-6 text-white`}>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{div.icon}</span>
                    <div>
                      <h3 className="text-xl font-black">
                        {lang === 'bn' ? div.titleBn : div.titleEn}
                      </h3>
                      {lang === 'bn' && <p className="text-sm text-white/70">{div.titleEn}</p>}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {div.courses.map((course) => (
                      <div key={course.nameEn} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 transition-colors">
                        <span className="text-2xl flex-shrink-0">{course.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 leading-tight">
                            {lang === 'bn' ? course.nameBn : course.nameEn}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {lang === 'bn' ? tx.durationLabel : 'Duration'}: {course.duration}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">{tx.ctaTitle}</h2>
          <p className="text-emerald-100 text-lg mb-8">{tx.ctaSub}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold flex items-center gap-2">
              {tx.applyBtn} <ChevronRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-all flex items-center gap-2">
              {tx.contactBtn} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
