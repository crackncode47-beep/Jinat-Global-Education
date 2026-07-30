import { useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import { institutions } from '../data/institutions'
import { useLang } from '../context/LanguageContext'
import { api } from '../services/api'

const t = {
  en: {
    heroTitle: 'Contact Us',
    heroSub: "Reach out to any of our 5 campuses — we're here to help you start your educational journey.",
    locTitle: 'Our Campus Locations',
    locSub: 'Find the campus nearest to you and get in touch directly.',
    hours: 'Sat–Thu: 8:00 AM – 5:00 PM',
    formTitle: 'Send Us a Message',
    formSub: "Select your preferred campus and we'll connect you with the right team.",
    successMsg: "Your message has been sent successfully! We'll get back to you within 24 hours.",
    fields: { name: 'Full Name *', namePh: 'Your full name', email: 'Email Address *', emailPh: 'your@email.com', phone: 'Phone Number', phonePh: '+880 1XXX-XXXXXX', campus: 'Select Campus *', campusPh: '-- Choose a Campus --', general: 'General Inquiry (Head Office)', subject: 'Subject *', subjectPh: 'e.g. Admission Inquiry, Course Information...', message: 'Message *', messagePh: 'Write your message here...' },
    sendBtn: 'Send Message',
    hotlineTitle: '📞 Admission Hotline',
    hotlineSub: 'Call us directly for immediate assistance with admissions and inquiries.',
  },
  bn: {
    heroTitle: 'যোগাযোগ করুন',
    heroSub: 'আমাদের ৫টি ক্যাম্পাসের যেকোনোটিতে যোগাযোগ করুন — আপনার শিক্ষা যাত্রা শুরু করতে আমরা সাহায্য করতে প্রস্তুত।',
    locTitle: 'আমাদের ক্যাম্পাসের অবস্থানসমূহ',
    locSub: 'আপনার নিকটতম ক্যাম্পাস খুঁজুন এবং সরাসরি যোগাযোগ করুন।',
    hours: 'শনি–বৃহস্পতি: সকাল ৮:০০ – বিকাল ৫:০০',
    formTitle: 'আমাদের বার্তা পাঠান',
    formSub: 'আপনার পছন্দের ক্যাম্পাস নির্বাচন করুন এবং আমরা আপনাকে সঠিক দলের সাথে সংযুক্ত করব।',
    successMsg: 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করব।',
    fields: { name: 'পূর্ণ নাম *', namePh: 'আপনার পূর্ণ নাম', email: 'ইমেইল ঠিকানা *', emailPh: 'your@email.com', phone: 'ফোন নম্বর', phonePh: '+৮৮০ ১XXX-XXXXXX', campus: 'ক্যাম্পাস নির্বাচন করুন *', campusPh: '-- ক্যাম্পাস বেছে নিন --', general: 'সাধারণ জিজ্ঞাসা (প্রধান কার্যালয়)', subject: 'বিষয় *', subjectPh: 'যেমন: ভর্তি জিজ্ঞাসা, কোর্স তথ্য...', message: 'বার্তা *', messagePh: 'এখানে আপনার বার্তা লিখুন...' },
    sendBtn: 'বার্তা পাঠান',
    hotlineTitle: '📞 ভর্তি হটলাইন',
    hotlineSub: 'ভর্তি ও জিজ্ঞাসার জন্য সরাসরি আমাদের কল করুন।',
  },
}

export default function Contact() {
  const { lang } = useLang()
  const tx = t[lang]
  const [form, setForm] = useState({ name: '', email: '', phone: '', campus: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await api.submitForm(form)
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', campus: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    } catch (err) {
      setError(err.message || 'Failed to send. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{tx.heroTitle}</h1>
          <p className="text-emerald-200 text-lg">{tx.heroSub}</p>
        </div>
      </section>

      {/* Campus Contact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">{tx.locTitle}</h2>
            <p className="section-subtitle">{tx.locSub}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutions.map((inst) => (
              <div key={inst.id} className={`card p-6 border-t-4 ${inst.borderColor}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{inst.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm leading-tight">
                      {lang === 'bn' ? inst.name : inst.nameEn}
                    </h3>
                    <span className={`text-xs font-medium ${inst.accentColor}`}>{inst.location}</span>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 text-sm text-gray-600">
                    <MapPin className={`w-4 h-4 ${inst.accentColor} flex-shrink-0 mt-0.5`} />
                    {inst.address}
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Phone className={`w-4 h-4 ${inst.accentColor} flex-shrink-0`} />
                    {inst.phone}
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Mail className={`w-4 h-4 ${inst.accentColor} flex-shrink-0`} />
                    <span className="break-all">{inst.email}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Clock className={`w-4 h-4 ${inst.accentColor} flex-shrink-0`} />
                    {tx.hours}
                  </div>
                </div>
                <div className="mt-4 bg-gray-100 rounded-xl h-28 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-400">{inst.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">{tx.formTitle}</h2>
            <p className="text-gray-500">{tx.formSub}</p>
          </div>

          {submitted && (
            <div className="mb-6 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 px-5 py-4 rounded-xl">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-medium">{tx.successMsg}</p>
            </div>
          )}
          {error && (
            <div className="mb-6 flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 px-5 py-4 rounded-xl">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">{tx.fields.name}</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder={tx.fields.namePh}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">{tx.fields.email}</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={tx.fields.emailPh}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">{tx.fields.phone}</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={tx.fields.phonePh}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">{tx.fields.campus}</label>
                <select name="campus" value={form.campus} onChange={handleChange} required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white">
                  <option value="">{tx.fields.campusPh}</option>
                  {institutions.map((inst) => (
                    <option key={inst.id} value={inst.id}>{lang === 'bn' ? inst.name : inst.nameEn} ({inst.location})</option>
                  ))}
                  <option value="general">{tx.fields.general}</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">{tx.fields.subject}</label>
              <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder={tx.fields.subjectPh}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">{tx.fields.message}</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder={tx.fields.messagePh}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none" />
            </div>
            <button type="submit" disabled={loading} className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-base disabled:opacity-60">
              {loading
                ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                : <Send className="w-5 h-5" />}
              {loading ? 'Sending...' : tx.sendBtn}
            </button>
          </form>
        </div>
      </section>

      {/* Hotline Banner */}
      <section className="py-12 bg-emerald-800 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black mb-2">{tx.hotlineTitle}</h2>
          <p className="text-emerald-200 mb-6">{tx.hotlineSub}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {institutions.map((inst) => (
              <div key={inst.id} className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center">
                <p className="text-xs text-emerald-300 mb-1">{inst.location}</p>
                <p className="font-bold text-sm">{inst.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
