import { Link } from 'react-router-dom'
import { Cpu, Code2, Globe, Smartphone, Shield, TrendingUp, ChevronRight, Wifi, Database, Monitor } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const t = {
  en: {
    badge: 'Digital Empowerment Hub',
    heroTitle: 'IT & Innovation Center',
    heroSub: "Empowering Bangladesh's youth with cutting-edge digital skills, programming, and technology education for the 21st century.",
    coursesTitle: 'Computer & IT Courses',
    coursesSub: 'Professional IT training programs designed for all skill levels — from beginners to advanced learners.',
    innovTitle: 'Innovation Initiatives',
    innovSub: "How we're building a digitally empowered Bangladesh, one student at a time.",
    statsData: [['500+', 'IT Graduates/Year'], ['8', 'IT Courses'], ['5', 'Computer Labs'], ['100%', 'Job Placement Support']],
    ctaTitle: 'Ready to Start Your IT Journey?',
    ctaSub: 'Join our IT programs and become part of Digital Bangladesh. Flexible schedules, expert instructors, and job placement support.',
    enroll: 'Enroll in IT Course',
    visitAcademy: 'Visit Language Academy',
    courses: [
      { title: 'Basic Computer Course', duration: '3 Months', level: 'Beginner', desc: 'MS Office, Internet, Email, and basic computer operations.' },
      { title: 'Web Design & Development', duration: '6 Months', level: 'Intermediate', desc: 'HTML, CSS, JavaScript, React.js, and responsive design.' },
      { title: 'Graphic Design', duration: '4 Months', level: 'Beginner', desc: 'Adobe Photoshop, Illustrator, Canva, and brand design.' },
      { title: 'Digital Marketing', duration: '3 Months', level: 'Beginner', desc: 'SEO, Social Media Marketing, Google Ads, and content strategy.' },
      { title: 'Freelancing & Outsourcing', duration: '2 Months', level: 'All Levels', desc: 'Fiverr, Upwork, client management, and earning online.' },
      { title: 'Database & Programming', duration: '6 Months', level: 'Advanced', desc: 'Python, SQL, MySQL, and data management fundamentals.' },
      { title: 'Cybersecurity Basics', duration: '3 Months', level: 'Intermediate', desc: 'Network security, ethical hacking basics, and data protection.' },
      { title: 'Networking & Hardware', duration: '4 Months', level: 'Intermediate', desc: 'Computer hardware, networking, and IT support skills.' },
    ],
    innovations: [
      { title: 'Digital Bangladesh Initiative', desc: "Aligned with the Government's Digital Bangladesh vision, our IT programs prepare students for the digital economy.", icon: '🇧🇩' },
      { title: 'Smart Classroom Technology', desc: 'Interactive whiteboards, projectors, and digital learning tools in every classroom across all campuses.', icon: '🖥️' },
      { title: 'Online Learning Portal', desc: 'Students can access course materials, assignments, and live classes through our dedicated e-learning platform.', icon: '📱' },
      { title: 'Innovation Lab', desc: 'Dedicated spaces for robotics, IoT projects, and creative technology experiments for advanced students.', icon: '🔬' },
    ],
  },
  bn: {
    badge: 'ডিজিটাল ক্ষমতায়ন হাব',
    heroTitle: 'আইটি ও উদ্ভাবন কেন্দ্র',
    heroSub: '২১শ শতাব্দীর জন্য অত্যাধুনিক ডিজিটাল দক্ষতা, প্রোগ্রামিং ও প্রযুক্তি শিক্ষায় বাংলাদেশের যুবসমাজকে ক্ষমতায়িত করছি।',
    coursesTitle: 'কম্পিউটার ও আইটি কোর্সসমূহ',
    coursesSub: 'সকল দক্ষতা স্তরের জন্য পেশাদার আইটি প্রশিক্ষণ প্রোগ্রাম — শিক্ষানবিশ থেকে উন্নত শিক্ষার্থী পর্যন্ত।',
    innovTitle: 'উদ্ভাবনী উদ্যোগসমূহ',
    innovSub: 'কীভাবে আমরা একজন একজন শিক্ষার্থীকে নিয়ে ডিজিটালভাবে ক্ষমতায়িত বাংলাদেশ গড়ছি।',
    statsData: [['৫০০+', 'আইটি গ্র্যাজুয়েট/বছর'], ['৮', 'আইটি কোর্স'], ['৫', 'কম্পিউটার ল্যাব'], ['১০০%', 'চাকরি সহায়তা']],
    ctaTitle: 'আপনার আইটি যাত্রা শুরু করতে প্রস্তুত?',
    ctaSub: 'আমাদের আইটি প্রোগ্রামে যোগ দিন এবং ডিজিটাল বাংলাদেশের অংশ হন। নমনীয় সময়সূচি, বিশেষজ্ঞ প্রশিক্ষক এবং চাকরি সহায়তা।',
    enroll: 'আইটি কোর্সে ভর্তি হন',
    visitAcademy: 'ল্যাঙ্গুয়েজ একাডেমি দেখুন',
    courses: [
      { title: 'বেসিক কম্পিউটার কোর্স', duration: '৩ মাস', level: 'শিক্ষানবিশ', desc: 'এমএস অফিস, ইন্টারনেট, ইমেইল এবং মৌলিক কম্পিউটার অপারেশন।' },
      { title: 'ওয়েব ডিজাইন ও ডেভেলপমেন্ট', duration: '৬ মাস', level: 'মধ্যবর্তী', desc: 'HTML, CSS, JavaScript, React.js এবং রেসপন্সিভ ডিজাইন।' },
      { title: 'গ্রাফিক ডিজাইন', duration: '৪ মাস', level: 'শিক্ষানবিশ', desc: 'অ্যাডোবি ফটোশপ, ইলাস্ট্রেটর, ক্যানভা এবং ব্র্যান্ড ডিজাইন।' },
      { title: 'ডিজিটাল মার্কেটিং', duration: '৩ মাস', level: 'শিক্ষানবিশ', desc: 'এসইও, সোশ্যাল মিডিয়া মার্কেটিং, গুগল অ্যাডস এবং কন্টেন্ট কৌশল।' },
      { title: 'ফ্রিল্যান্সিং ও আউটসোর্সিং', duration: '২ মাস', level: 'সকল স্তর', desc: 'ফাইভার, আপওয়ার্ক, ক্লায়েন্ট ম্যানেজমেন্ট এবং অনলাইনে আয়।' },
      { title: 'ডেটাবেস ও প্রোগ্রামিং', duration: '৬ মাস', level: 'উন্নত', desc: 'পাইথন, SQL, MySQL এবং ডেটা ম্যানেজমেন্টের মূল বিষয়।' },
      { title: 'সাইবার নিরাপত্তার মূল বিষয়', duration: '৩ মাস', level: 'মধ্যবর্তী', desc: 'নেটওয়ার্ক নিরাপত্তা, এথিক্যাল হ্যাকিং এবং ডেটা সুরক্ষা।' },
      { title: 'নেটওয়ার্কিং ও হার্ডওয়্যার', duration: '৪ মাস', level: 'মধ্যবর্তী', desc: 'কম্পিউটার হার্ডওয়্যার, নেটওয়ার্কিং এবং আইটি সাপোর্ট দক্ষতা।' },
    ],
    innovations: [
      { title: 'ডিজিটাল বাংলাদেশ উদ্যোগ', desc: 'সরকারের ডিজিটাল বাংলাদেশ ভিশনের সাথে সামঞ্জস্য রেখে আমাদের আইটি প্রোগ্রাম শিক্ষার্থীদের ডিজিটাল অর্থনীতির জন্য প্রস্তুত করে।', icon: '🇧🇩' },
      { title: 'স্মার্ট ক্লাসরুম প্রযুক্তি', desc: 'সকল ক্যাম্পাসের প্রতিটি শ্রেণিকক্ষে ইন্টারেক্টিভ হোয়াইটবোর্ড, প্রজেক্টর এবং ডিজিটাল শিক্ষা সরঞ্জাম।', icon: '🖥️' },
      { title: 'অনলাইন লার্নিং পোর্টাল', desc: 'শিক্ষার্থীরা আমাদের ই-লার্নিং প্ল্যাটফর্মের মাধ্যমে কোর্স উপকরণ, অ্যাসাইনমেন্ট এবং লাইভ ক্লাসে প্রবেশ করতে পারে।', icon: '📱' },
      { title: 'উদ্ভাবন ল্যাব', desc: 'উন্নত শিক্ষার্থীদের জন্য রোবোটিক্স, আইওটি প্রজেক্ট এবং সৃজনশীল প্রযুক্তি পরীক্ষার জন্য নিবেদিত স্থান।', icon: '🔬' },
    ],
  },
}

const courseIcons = [Monitor, Code2, Smartphone, Globe, TrendingUp, Database, Shield, Wifi]
const courseColors = ['bg-blue-500', 'bg-purple-600', 'bg-pink-500', 'bg-orange-500', 'bg-emerald-600', 'bg-indigo-600', 'bg-red-600', 'bg-teal-600']

export default function ITInnovation() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-emerald-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <Cpu className="w-4 h-4 text-amber-400" /> {tx.badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{tx.heroTitle}</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">{tx.heroSub}</p>
        </div>
      </section>

      {/* IT Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">{tx.coursesTitle}</h2>
            <p className="section-subtitle">{tx.coursesSub}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tx.courses.map((course, i) => {
              const Icon = courseIcons[i]
              return (
                <div key={course.title} className="card p-6 hover:-translate-y-1 transition-transform duration-300 group">
                  <div className={`w-12 h-12 ${courseColors[i]} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1 text-sm">{course.title}</h3>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">{course.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{course.duration}</span>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">{course.level}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Innovation Initiatives */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">{tx.innovTitle}</h2>
            <p className="section-subtitle">{tx.innovSub}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-7">
            {tx.innovations.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-shadow flex gap-5">
                <span className="text-4xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {tx.statsData.map(([val, label]) => (
              <div key={label}>
                <p className="text-4xl font-black text-amber-400">{val}</p>
                <p className="text-sm text-blue-200 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-800 mb-4">{tx.ctaTitle}</h2>
          <p className="text-gray-500 mb-8">{tx.ctaSub}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary flex items-center gap-2">
              {tx.enroll} <ChevronRight className="w-4 h-4" />
            </Link>
            <Link to="/campus/jinat-computer-language-academy" className="btn-gold flex items-center gap-2">
              {tx.visitAcademy} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
