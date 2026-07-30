import { CheckCircle, Target, Eye, Heart, Award, Users, BookOpen } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const t = {
  en: {
    heroTitle: 'About Us',
    heroSub: 'Jinat Jubo Unnayon Sangstha, Bogura — Building Bangladesh through Education',
    badge: 'Parent Organization',
    orgTitle: 'জিনাত যুব উন্নয়ন সংস্থা, বগুড়া',
    regNo: 'Reg. No: 124',
    p1: 'Jinat Jubo Unnayon Sangstha (Jinat Youth Development Organization) is a registered non-profit organization based in Bogura, Bangladesh. Founded with the noble vision of transforming education in Bangladesh, the organization has grown from a single initiative to a multi-campus educational network spanning the entire country.',
    p2: 'With Registration No. 124 from the Government of Bangladesh, the organization operates under full legal compliance and transparency, dedicated to providing quality education from nursery to PhD level while embracing digital empowerment as a core pillar of its mission.',
    stats: [['Reg. No.', '124'], ['Campuses', '5'], ['Students', '10K+']],
    visionTitle: 'Our Vision',
    visionDesc: 'To become the leading educational network in Bangladesh, providing world-class education from School to University, Nursery to PhD, and empowering every citizen through digital literacy.',
    missionTitle: 'Our Mission',
    missionDesc: 'To establish and operate quality educational institutions across Bangladesh, making education accessible, affordable, and relevant to the needs of modern Bangladesh.',
    valuesTitle: 'Our Values',
    valuesDesc: 'Integrity, Excellence, Inclusivity, Innovation, and Service to the Nation — these core values guide every decision and action of our organization.',
    founderTitle: "Founder's Message",
    founderSub: 'From the Managing Director & Chairman',
    founderRole: 'Managing Director',
    founderOrg: 'Jinat Jubo Unnayon Sangstha',
    quote: `"Education is the most powerful weapon which you can use to change the world. At Jinat Global Education City, we believe that every child in Bangladesh deserves access to quality education — regardless of their economic background, location, or social status.\n\nOur journey began with a simple dream: to create an educational ecosystem that takes a student from their very first day of nursery school all the way to their doctoral degree. Today, with five campuses across Bangladesh and thousands of students, that dream is becoming a reality.\n\nWe are committed to not just academic excellence, but to building complete human beings — equipped with knowledge, digital skills, moral values, and the confidence to contribute to Bangladesh and the world."`,
    founderSign: '— Managing Director & Chairman',
    founderSignSub: 'জিনাত যুব উন্নয়ন সংস্থা, বগুড়া (নিবন্ধন নং: ১২৪)',
    objTitle: 'Core Objectives',
    objSub: 'The guiding principles that drive our educational mission across Bangladesh.',
    objectives: [
      'Establish and operate educational institutions from nursery to university level across Bangladesh.',
      'Provide affordable, quality education to underprivileged and rural communities.',
      'Promote digital literacy and IT skills to empower the youth of Bangladesh.',
      'Integrate modern technology with traditional educational values.',
      "Support women's education and empowerment through dedicated programs.",
      'Develop skilled human resources for national and international job markets.',
      'Foster research, innovation, and entrepreneurship among students.',
      'Preserve and promote Bangladeshi culture, language, and heritage.',
    ],
    journeyTitle: 'Our Journey',
    journeySub: 'Key milestones in the growth of Jinat Global Education.',
    milestones: [
      { year: '2008', event: 'Foundation of Jinat Jubo Unnayon Sangstha in Bogura' },
      { year: '2010', event: 'Registration obtained (Reg. No. 124) from Government of Bangladesh' },
      { year: '2012', event: 'Established first Knowledge Center in Sherpur, Bogura' },
      { year: '2015', event: 'Expanded to Jessore with Begum Khaleda Zia International Campus' },
      { year: '2017', event: 'Launched 71 Liberation War Campus in Chittagong' },
      { year: '2019', event: 'Opened Solidarity Campus in Savar, Dhaka' },
      { year: '2021', event: 'Launched Jinat Computer & Language Academy across multiple locations' },
      { year: '2024', event: 'Serving 10,000+ students across 5 campuses nationwide' },
    ],
  },
  bn: {
    heroTitle: 'আমাদের সম্পর্কে',
    heroSub: 'জিনাত যুব উন্নয়ন সংস্থা, বগুড়া — শিক্ষার মাধ্যমে বাংলাদেশ গড়ি',
    badge: 'মূল সংস্থা',
    orgTitle: 'জিনাত যুব উন্নয়ন সংস্থা, বগুড়া',
    regNo: 'নিবন্ধন নং: ১২৪',
    p1: 'জিনাত যুব উন্নয়ন সংস্থা বগুড়া, বাংলাদেশ ভিত্তিক একটি নিবন্ধিত অলাভজনক সংগঠন। বাংলাদেশে শিক্ষার রূপান্তরের মহৎ লক্ষ্য নিয়ে প্রতিষ্ঠিত এই সংস্থা একটি একক উদ্যোগ থেকে সারা দেশে বিস্তৃত বহু-ক্যাম্পাস শিক্ষা নেটওয়ার্কে পরিণত হয়েছে।',
    p2: 'বাংলাদেশ সরকারের নিবন্ধন নং ১২৪ সহ, সংস্থাটি সম্পূর্ণ আইনি সম্মতি ও স্বচ্ছতার সাথে পরিচালিত হচ্ছে এবং নার্সারি থেকে পিএইচডি স্তর পর্যন্ত মানসম্পন্ন শিক্ষা প্রদানে নিবেদিত।',
    stats: [['নিবন্ধন নং', '১২৪'], ['ক্যাম্পাস', '৫'], ['শিক্ষার্থী', '১০হাজার+']],
    visionTitle: 'আমাদের দৃষ্টিভঙ্গি',
    visionDesc: 'বাংলাদেশের শীর্ষস্থানীয় শিক্ষা নেটওয়ার্ক হওয়া, স্কুল থেকে বিশ্ববিদ্যালয়, নার্সারি থেকে পিএইচডি পর্যন্ত বিশ্বমানের শিক্ষা প্রদান করা এবং ডিজিটাল সাক্ষরতার মাধ্যমে প্রতিটি নাগরিককে ক্ষমতায়িত করা।',
    missionTitle: 'আমাদের লক্ষ্য',
    missionDesc: 'বাংলাদেশ জুড়ে মানসম্পন্ন শিক্ষা প্রতিষ্ঠান স্থাপন ও পরিচালনা করা, শিক্ষাকে সহজলভ্য, সাশ্রয়ী এবং আধুনিক বাংলাদেশের চাহিদার সাথে প্রাসঙ্গিক করে তোলা।',
    valuesTitle: 'আমাদের মূল্যবোধ',
    valuesDesc: 'সততা, শ্রেষ্ঠত্ব, অন্তর্ভুক্তি, উদ্ভাবন এবং জাতির সেবা — এই মূল মূল্যবোধগুলি আমাদের সংস্থার প্রতিটি সিদ্ধান্ত ও কর্মকাণ্ড পরিচালিত করে।',
    founderTitle: 'প্রতিষ্ঠাতার বার্তা',
    founderSub: 'ব্যবস্থাপনা পরিচালক ও চেয়ারম্যানের পক্ষ থেকে',
    founderRole: 'ব্যবস্থাপনা পরিচালক',
    founderOrg: 'জিনাত যুব উন্নয়ন সংস্থা',
    quote: `"শিক্ষা হলো সবচেয়ে শক্তিশালী অস্ত্র যা দিয়ে আপনি পৃথিবী পরিবর্তন করতে পারেন। জিনাত গ্লোবাল এডুকেশন সিটিতে আমরা বিশ্বাস করি যে বাংলাদেশের প্রতিটি শিশু মানসম্পন্ন শিক্ষার সুযোগ পাওয়ার যোগ্য — তাদের আর্থিক অবস্থা, অবস্থান বা সামাজিক মর্যাদা নির্বিশেষে।\n\nআমাদের যাত্রা শুরু হয়েছিল একটি সহজ স্বপ্ন নিয়ে: এমন একটি শিক্ষা ইকোসিস্টেম তৈরি করা যা একজন শিক্ষার্থীকে নার্সারির প্রথম দিন থেকে ডক্টরাল ডিগ্রি পর্যন্ত নিয়ে যাবে। আজ, বাংলাদেশ জুড়ে পাঁচটি ক্যাম্পাস এবং হাজার হাজার শিক্ষার্থী নিয়ে সেই স্বপ্ন বাস্তবে রূপ নিচ্ছে।\n\nআমরা শুধু একাডেমিক শ্রেষ্ঠত্বের জন্য নয়, বরং সম্পূর্ণ মানুষ গড়ার জন্য প্রতিশ্রুতিবদ্ধ — জ্ঞান, ডিজিটাল দক্ষতা, নৈতিক মূল্যবোধ এবং বাংলাদেশ ও বিশ্বে অবদান রাখার আত্মবিশ্বাস দিয়ে সজ্জিত।"`,
    founderSign: '— ব্যবস্থাপনা পরিচালক ও চেয়ারম্যান',
    founderSignSub: 'জিনাত যুব উন্নয়ন সংস্থা, বগুড়া (নিবন্ধন নং: ১২৪)',
    objTitle: 'মূল উদ্দেশ্যসমূহ',
    objSub: 'যে নির্দেশিকা নীতিগুলি বাংলাদেশ জুড়ে আমাদের শিক্ষামূলক মিশন পরিচালিত করে।',
    objectives: [
      'বাংলাদেশ জুড়ে নার্সারি থেকে বিশ্ববিদ্যালয় স্তর পর্যন্ত শিক্ষা প্রতিষ্ঠান স্থাপন ও পরিচালনা করা।',
      'সুবিধাবঞ্চিত ও গ্রামীণ সম্প্রদায়কে সাশ্রয়ী মূল্যে মানসম্পন্ন শিক্ষা প্রদান করা।',
      'বাংলাদেশের যুবসমাজকে ক্ষমতায়িত করতে ডিজিটাল সাক্ষরতা ও আইটি দক্ষতা প্রচার করা।',
      'আধুনিক প্রযুক্তিকে ঐতিহ্যবাহী শিক্ষামূল্যবোধের সাথে একীভূত করা।',
      'নিবেদিত প্রোগ্রামের মাধ্যমে নারী শিক্ষা ও ক্ষমতায়নকে সমর্থন করা।',
      'জাতীয় ও আন্তর্জাতিক চাকরির বাজারের জন্য দক্ষ মানবসম্পদ তৈরি করা।',
      'শিক্ষার্থীদের মধ্যে গবেষণা, উদ্ভাবন ও উদ্যোক্তা মনোভাব গড়ে তোলা।',
      'বাংলাদেশি সংস্কৃতি, ভাষা ও ঐতিহ্য সংরক্ষণ ও প্রচার করা।',
    ],
    journeyTitle: 'আমাদের যাত্রা',
    journeySub: 'জিনাত গ্লোবাল এডুকেশনের বিকাশের মূল মাইলফলকসমূহ।',
    milestones: [
      { year: '২০০৮', event: 'বগুড়ায় জিনাত যুব উন্নয়ন সংস্থার প্রতিষ্ঠা' },
      { year: '২০১০', event: 'বাংলাদেশ সরকার থেকে নিবন্ধন প্রাপ্তি (নিবন্ধন নং: ১২৪)' },
      { year: '২০১২', event: 'শেরপুর, বগুড়ায় প্রথম নলেজ সেন্টার প্রতিষ্ঠা' },
      { year: '২০১৫', event: 'বেগম খালেদা জিয়া ইন্টারন্যাশনাল ক্যাম্পাস সহ যশোরে সম্প্রসারণ' },
      { year: '২০১৭', event: 'চট্টগ্রামে ৭১ লিবারেশন ওয়ার ক্যাম্পাস চালু' },
      { year: '২০১৯', event: 'সাভার, ঢাকায় সলিডারিটি ক্যাম্পাস উদ্বোধন' },
      { year: '২০২১', event: 'একাধিক স্থানে জিনাত কম্পিউটার ও ল্যাঙ্গুয়েজ একাডেমি চালু' },
      { year: '২০২৪', event: 'সারা দেশে ৫টি ক্যাম্পাসে ১০,০০০+ শিক্ষার্থীকে সেবা প্রদান' },
    ],
  },
}

export default function About() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{tx.heroTitle}</h1>
          <p className="text-emerald-200 text-lg">{tx.heroSub}</p>
        </div>
      </section>

      {/* Organization Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                {tx.badge}
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-6 leading-tight">
                {tx.orgTitle}
                <span className="block text-xl font-semibold text-emerald-600 mt-1">{tx.regNo}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">{tx.p1}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{tx.p2}</p>
              <div className="grid grid-cols-3 gap-4">
                {tx.stats.map(([label, val]) => (
                  <div key={label} className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <p className="text-2xl font-black text-emerald-700">{val}</p>
                    <p className="text-xs text-gray-500 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Eye, title: tx.visionTitle, color: 'bg-blue-500', desc: tx.visionDesc },
                { icon: Target, title: tx.missionTitle, color: 'bg-emerald-600', desc: tx.missionDesc },
                { icon: Heart, title: tx.valuesTitle, color: 'bg-amber-500', desc: tx.valuesDesc },
              ].map(({ icon: Icon, title, color, desc }) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className={`w-11 h-11 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">{tx.founderTitle}</h2>
            <p className="text-gray-500">{tx.founderSub}</p>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-500 to-blue-600 rounded-l-3xl" />
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <p className="font-bold text-gray-800 text-sm">{tx.founderRole}</p>
                <p className="text-xs text-emerald-600">{tx.founderOrg}</p>
                <div className="mt-2 flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-3.5 h-3.5 text-amber-400" />
                  ))}
                </div>
              </div>
              <div>
                <blockquote className="text-gray-700 leading-relaxed text-base italic mb-6 whitespace-pre-line">
                  {tx.quote}
                </blockquote>
                <p className="font-bold text-emerald-700">{tx.founderSign}</p>
                <p className="text-sm text-gray-500">{tx.founderSignSub}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">{tx.objTitle}</h2>
            <p className="section-subtitle">{tx.objSub}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {tx.objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl hover:bg-emerald-50 transition-colors">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">{tx.journeyTitle}</h2>
            <p className="section-subtitle">{tx.journeySub}</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-200 -translate-x-1/2" />
            <div className="space-y-8">
              {tx.milestones.map((m, i) => (
                <div key={i} className={`flex gap-6 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                    {i % 2 === 0 && (
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 inline-block">
                        <p className="text-sm text-gray-600">{m.event}</p>
                      </div>
                    )}
                  </div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                      {m.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <p className="text-xs font-bold text-emerald-600 mb-1">{m.year}</p>
                      <p className="text-sm text-gray-600">{m.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
