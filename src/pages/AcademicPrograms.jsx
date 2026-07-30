import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { academicStreams, languages } from '../data/institutions'
import { useLang } from '../context/LanguageContext'

const t = {
  en: {
    heroTitle: 'Academic Programs',
    heroSub: 'Comprehensive education streams from Nursery to PhD — General, Madrasha, Technical, Agriculture, Health & IT',
    streamsTitle: 'Educational Streams',
    streamsSub: 'Six distinct academic pathways designed to meet every student\'s needs and aspirations.',
    langTitle: 'Language Programs',
    langSub: 'Master international languages and open doors to global opportunities.',
    levelTitle: 'Programs by Level',
    levelSub: 'From the very first step to the highest academic achievement.',
    levels: [
      { level: 'Pre-Primary', range: 'Nursery – KG', color: 'from-pink-400 to-rose-500', programs: ['Nursery', 'KG-1', 'KG-2', 'Pre-School Activities'] },
      { level: 'Primary', range: 'Class I – V', color: 'from-blue-400 to-blue-600', programs: ['Class I–V', 'PSC Preparation', 'Co-curricular Activities', 'Sports & Arts'] },
      { level: 'Secondary', range: 'Class VI – XII', color: 'from-emerald-500 to-emerald-700', programs: ['JSC / JDC', 'SSC / Dakhil', 'HSC / Alim', 'Vocational SSC/HSC'] },
      { level: 'Higher Education', range: 'Degree – PhD', color: 'from-purple-500 to-purple-700', programs: ['Bachelor\'s Degree', 'Master\'s Degree', 'MPhil Research', 'PhD Programs'] },
    ],
    admissionTitle: 'How to Apply',
    admissionSub: 'Simple 4-step admission process to join Jinat Global Education.',
    steps: [
      { step: '01', title: 'Choose Your Program', desc: 'Browse our academic streams and select the program that fits your goals.' },
      { step: '02', title: 'Select a Campus', desc: 'Pick the nearest or most suitable campus from our 5 locations.' },
      { step: '03', title: 'Submit Application', desc: 'Fill out the online or in-person admission form with required documents.' },
      { step: '04', title: 'Admission Confirmed', desc: 'Receive your admission confirmation and begin your educational journey.' },
    ],
    applyBtn: 'Apply for Admission',
  },
  bn: {
    heroTitle: 'একাডেমিক প্রোগ্রামসমূহ',
    heroSub: 'নার্সারি থেকে পিএইচডি পর্যন্ত ব্যাপক শিক্ষা ধারা — সাধারণ, মাদ্রাসা, কারিগরি, কৃষি, স্বাস্থ্য ও আইটি',
    streamsTitle: 'শিক্ষা ধারাসমূহ',
    streamsSub: 'প্রতিটি শিক্ষার্থীর চাহিদা ও আকাঙ্ক্ষা পূরণের জন্য ছয়টি স্বতন্ত্র একাডেমিক পথ।',
    langTitle: 'ভাষা প্রোগ্রামসমূহ',
    langSub: 'আন্তর্জাতিক ভাষায় দক্ষতা অর্জন করুন এবং বৈশ্বিক সুযোগের দরজা খুলুন।',
    levelTitle: 'স্তর অনুযায়ী প্রোগ্রামসমূহ',
    levelSub: 'প্রথম পদক্ষেপ থেকে সর্বোচ্চ একাডেমিক অর্জন পর্যন্ত।',
    levels: [
      { level: 'প্রাক-প্রাথমিক', range: 'নার্সারি – কেজি', color: 'from-pink-400 to-rose-500', programs: ['নার্সারি', 'কেজি-১', 'কেজি-২', 'প্রি-স্কুল কার্যক্রম'] },
      { level: 'প্রাথমিক', range: 'শ্রেণি ১ম – ৫ম', color: 'from-blue-400 to-blue-600', programs: ['শ্রেণি ১ম–৫ম', 'পিএসসি প্রস্তুতি', 'সহশিক্ষা কার্যক্রম', 'খেলাধুলা ও শিল্পকলা'] },
      { level: 'মাধ্যমিক', range: 'শ্রেণি ৬ষ্ঠ – দ্বাদশ', color: 'from-emerald-500 to-emerald-700', programs: ['জেএসসি / জেডিসি', 'এসএসসি / দাখিল', 'এইচএসসি / আলিম', 'ভোকেশনাল এসএসসি/এইচএসসি'] },
      { level: 'উচ্চশিক্ষা', range: 'ডিগ্রি – পিএইচডি', color: 'from-purple-500 to-purple-700', programs: ['স্নাতক ডিগ্রি', 'স্নাতকোত্তর ডিগ্রি', 'এমফিল গবেষণা', 'পিএইচডি প্রোগ্রাম'] },
    ],
    admissionTitle: 'কীভাবে আবেদন করবেন',
    admissionSub: 'জিনাত গ্লোবাল এডুকেশনে যোগ দিতে সহজ ৪-ধাপের ভর্তি প্রক্রিয়া।',
    steps: [
      { step: '০১', title: 'প্রোগ্রাম বেছে নিন', desc: 'আমাদের একাডেমিক ধারাগুলি দেখুন এবং আপনার লক্ষ্যের সাথে মানানসই প্রোগ্রামটি বেছে নিন।' },
      { step: '০২', title: 'ক্যাম্পাস নির্বাচন করুন', desc: 'আমাদের ৫টি অবস্থান থেকে নিকটতম বা সবচেয়ে উপযুক্ত ক্যাম্পাসটি বেছে নিন।' },
      { step: '০৩', title: 'আবেদন জমা দিন', desc: 'প্রয়োজনীয় কাগজপত্র সহ অনলাইন বা সরাসরি ভর্তি ফর্ম পূরণ করুন।' },
      { step: '০৪', title: 'ভর্তি নিশ্চিত', desc: 'ভর্তি নিশ্চিতকরণ পান এবং আপনার শিক্ষা যাত্রা শুরু করুন।' },
    ],
    applyBtn: 'ভর্তির আবেদন করুন',
  },
}

const streamsBn = [
  { title: 'সাধারণ শিক্ষা', desc: 'এসএসসি ও এইচএসসি প্রস্তুতি সহ জাতীয় পাঠ্যক্রম অনুসরণ করে নার্সারি থেকে দ্বাদশ শ্রেণি।', subjects: ['বাংলা ও ইংরেজি', 'গণিত ও বিজ্ঞান', 'সামাজিক বিজ্ঞান', 'আইসিটি ও কম্পিউটার'] },
  { title: 'মাদ্রাসা শিক্ষা', desc: 'আধুনিক বিষয় একীভূত করে দাখিল, আলিম, ফাজিল ও কামিল প্রোগ্রাম।', subjects: ['কুরআন ও হাদিস', 'আরবি ভাষা', 'ইসলামিক স্টাডিজ', 'সাধারণ বিষয়'] },
  { title: 'কারিগরি ও বৃত্তিমূলক', desc: 'হাতে-কলমে কারিগরি প্রশিক্ষণ সহ এসএসসি (ভোকেশনাল) ও এইচএসসি (ভোকেশনাল)।', subjects: ['বৈদ্যুতিক কাজ', 'সিভিল নির্মাণ', 'গার্মেন্ট প্রযুক্তি', 'খাদ্য প্রক্রিয়াকরণ'] },
  { title: 'কৃষি বিজ্ঞান', desc: 'গ্রামীণ উন্নয়নের জন্য কৃষি শিক্ষা ও গবেষণা প্রোগ্রাম।', subjects: ['ফসল বিজ্ঞান', 'পশুপালন', 'মৎস্য চাষ', 'কৃষি প্রযুক্তি'] },
  { title: 'স্বাস্থ্য ও চিকিৎসা', desc: 'প্যারামেডিকেল, নার্সিং ও স্বাস্থ্য বিজ্ঞান ডিপ্লোমা প্রোগ্রাম।', subjects: ['নার্সিং কেয়ার', 'মেডিকেল সহায়তা', 'জনস্বাস্থ্য', 'প্রাথমিক চিকিৎসা ও নিরাপত্তা'] },
  { title: 'আইটি ও ডিজিটাল দক্ষতা', desc: 'কম্পিউটার কোর্স, ওয়েব ডেভেলপমেন্ট, গ্রাফিক ডিজাইন ও ফ্রিল্যান্সিং।', subjects: ['ওয়েব ডেভেলপমেন্ট', 'গ্রাফিক ডিজাইন', 'ডিজিটাল মার্কেটিং', 'ফ্রিল্যান্সিং ও আউটসোর্সিং'] },
]

export default function AcademicPrograms() {
  const { lang } = useLang()
  const tx = t[lang]
  const streams = lang === 'bn'
    ? academicStreams.map((s, i) => ({ ...s, ...streamsBn[i] }))
    : academicStreams

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{tx.heroTitle}</h1>
          <p className="text-emerald-200 text-lg">{tx.heroSub}</p>
        </div>
      </section>

      {/* Academic Streams */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">{tx.streamsTitle}</h2>
            <p className="section-subtitle">{tx.streamsSub}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {streams.map((stream) => (
              <div key={stream.title} className="card p-7 hover:-translate-y-1 transition-transform duration-300">
                <div className={`w-14 h-14 ${stream.color} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-lg`}>
                  {stream.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{stream.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{stream.desc}</p>
                <div className="space-y-2">
                  {stream.subjects.map((sub) => (
                    <div key={sub} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">{tx.langTitle}</h2>
            <p className="section-subtitle">{tx.langSub}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {languages.map((lang) => (
              <div key={lang.name} className="card p-5 text-center hover:-translate-y-1 transition-transform">
                <span className="text-4xl block mb-3">{lang.icon}</span>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{lang.name}</h3>
                <p className="text-xs text-gray-500">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Level-wise Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">{tx.levelTitle}</h2>
            <p className="section-subtitle">{tx.levelSub}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tx.levels.map((lvl) => (
              <div key={lvl.level} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-br ${lvl.color} p-5 text-white`}>
                  <h3 className="text-lg font-black">{lvl.level}</h3>
                  <p className="text-sm text-white/80">{lvl.range}</p>
                </div>
                <div className="bg-white p-5">
                  {lvl.programs.map((p) => (
                    <div key={p} className="flex items-center gap-2 py-1.5 text-sm text-gray-600 border-b border-gray-50 last:border-0">
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-500" /> {p}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">{tx.admissionTitle}</h2>
            <p className="section-subtitle">{tx.admissionSub}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tx.steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-4 shadow-lg">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              {tx.applyBtn} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
