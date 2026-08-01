import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Eye, Target, ChevronDown, ChevronRight, BookOpen, Cpu, Users, Leaf,
  Globe, Shield, Heart, Lightbulb, Award, ArrowLeft, CheckCircle, Zap
} from 'lucide-react'

const visionPillars = [
  {
    icon: BookOpen, color: 'bg-emerald-600', num: '০১',
    bn: 'সমন্বিত শিক্ষা ইকোসিস্টেম',
    en: 'Integrated Education Ecosystem',
    desc: 'School to University, Nursery to PhD — uninterrupted, seamless educational journey under one integrated platform.',
    tags: ['Nursery to PhD', 'No Interruptions', 'One Platform'],
  },
  {
    icon: Globe, color: 'bg-blue-600', num: '০২',
    bn: 'বৈশ্বিক জ্ঞাননগরী',
    en: 'Global Knowledge City',
    desc: '1,000 Acres Integrated Knowledge City with international academic and industry collaboration at its core.',
    tags: ['1,000 Acres', 'International Collaboration', 'Mega Campus'],
  },
  {
    icon: Cpu, color: 'bg-purple-600', num: '০৩',
    bn: 'প্রযুক্তি ও উদ্ভাবনভিত্তিক অর্থনীতি',
    en: 'Technology & Innovation Economy',
    desc: '4IR technologies: AI, Robotics, Cybersecurity, Blockchain, Quantum Computing, Biotechnology, Patent & IP Economy.',
    tags: ['AI & Robotics', 'Blockchain', 'Quantum Computing', 'Patent Economy'],
  },
  {
    icon: Users, color: 'bg-amber-500', num: '০৪',
    bn: 'মানবসম্পদ উন্নয়ন',
    en: 'Human Resource Development',
    desc: 'Zero Unemployment Initiative, women empowerment, and inclusion of marginalized communities in the knowledge economy.',
    tags: ['Zero Unemployment', 'Women Empowerment', 'Inclusive Growth'],
  },
  {
    icon: Leaf, color: 'bg-lime-600', num: '০৫',
    bn: 'টেকসই উন্নয়ন',
    en: 'Sustainable Development',
    desc: 'Green Knowledge City, ESG Protocol, Carbon-Neutral campus aligned with SDG-4, SDG-8, and SDG-9.',
    tags: ['Green Campus', 'Carbon-Neutral', 'SDG-4', 'SDG-8', 'SDG-9'],
  },
  {
    icon: Heart, color: 'bg-red-500', num: '০৬',
    bn: 'জাতীয় ও বৈশ্বিক অঙ্গীকার',
    en: 'National & Global Commitment',
    desc: 'Dedicated to the brave martyrs of the July 2024 mass uprising and the dream-weaver young generation of new Bangladesh.',
    tags: ['July 2024 Martyrs', 'New Bangladesh', 'Youth Empowerment'],
  },
]

const missionDimensions = [
  {
    icon: BookOpen, color: 'from-emerald-500 to-emerald-700',
    title: 'JISM Model Implementation',
    titleBn: 'JISM মডেল বাস্তবায়ন',
    points: ['Modern General Education', 'Advanced Technical & IT Education', 'Advanced Madrasah & Digital Hifz', 'Smart Agricultural Education', 'Modern Health & Medical Science'],
  },
  {
    icon: Lightbulb, color: 'from-blue-500 to-blue-700',
    title: 'Research & Innovation Hub',
    titleBn: 'গবেষণা ও উদ্ভাবন কেন্দ্র',
    points: ['Post-Doctoral Research Wing', 'Synergy Innovation Lab', 'Patent Commercialization', 'Global Faculty Recruitment', 'International Research Grants'],
  },
  {
    icon: Cpu, color: 'from-purple-500 to-purple-700',
    title: 'Technology & Digital Infrastructure',
    titleBn: 'প্রযুক্তি ও ডিজিটাল অবকাঠামো',
    points: ['Mega Data Center', 'Global IT Village', 'Blockchain Digital Audit', 'Digital Twin & Metaverse Campus', 'AI-Powered Learning Systems'],
  },
  {
    icon: Heart, color: 'from-red-500 to-red-700',
    title: 'Healthcare & Community Service',
    titleBn: 'স্বাস্থ্যসেবা ও সামাজিক উন্নয়ন',
    points: ['July Memorial International Charity Hospital', '1,000-Bed International Standard', 'Clinical Trials Center', 'Community Health Programs', 'Medical Research Institute'],
  },
  {
    icon: Award, color: 'from-amber-500 to-amber-700',
    title: 'Financial Sustainability',
    titleBn: 'আর্থিক টেকসইতা',
    points: ['BDT 10 Billion Budget', 'PPP & FDI Funding', 'World Bank, ADB, IsDB, UNESCO', 'Solidarity Bond & CSR', 'IP Royalty Revenue Streams'],
  },
  {
    icon: Shield, color: 'from-teal-500 to-teal-700',
    title: 'Governance, Policy & Risk',
    titleBn: 'শাসন, নীতি ও ঝুঁকি ব্যবস্থাপনা',
    points: ['Legal Guardian: Jinat Jubo Unnayon Sangstha (Reg. 124)', '4-Tier Biometric Security', 'Drone Surveillance System', 'Blockchain Audit Trail', 'International Compliance Framework'],
  },
]

const roadmap = [
  {
    phase: 'Phase I', year: '2026', color: 'bg-emerald-600', light: 'bg-emerald-50', border: 'border-emerald-500', text: 'text-emerald-700',
    title: 'Foundation & Planning',
    titleBn: 'ভিত্তি ও পরিকল্পনা',
    tasks: ['Land Assessment & Survey', 'Feasibility Study', 'Government Approval', 'PPP Framework Setup', 'Master Planning & Design'],
  },
  {
    phase: 'Phase II', year: '2027', color: 'bg-blue-600', light: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-700',
    title: 'Infrastructure Development',
    titleBn: 'অবকাঠামো উন্নয়ন',
    tasks: ['Land Development', 'Core Infrastructure', 'Knowledge Tower Construction', 'Academic Buildings', 'ICT & Utilities Setup'],
  },
  {
    phase: 'Phase III', year: '2028', color: 'bg-purple-600', light: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-700',
    title: 'Academic Launch',
    titleBn: 'একাডেমিক কার্যক্রম শুরু',
    tasks: ['School & College Launch', 'AI & Robotics Hub', 'Mega Data Center', 'Medical College Opening', 'July Memorial Charity Hospital'],
  },
  {
    phase: 'Phase IV', year: '2029', color: 'bg-amber-500', light: 'bg-amber-50', border: 'border-amber-500', text: 'text-amber-700',
    title: 'Global Expansion',
    titleBn: 'বৈশ্বিক সম্প্রসারণ',
    tasks: ['International Student Exchange', 'Patent Commercialization', 'Commercial PhD Wing', 'JISM Global Export', 'Research Revenue Generation'],
  },
  {
    phase: 'Phase V', year: '2030–31', color: 'bg-teal-600', light: 'bg-teal-50', border: 'border-teal-500', text: 'text-teal-700',
    title: 'Full Operations',
    titleBn: 'পূর্ণ কার্যক্রম',
    tasks: ['Full 1,000-Acre Operations', 'Global Accreditation', 'Revenue Expansion', 'International Rankings', 'Knowledge City Self-Sufficiency'],
  },
]

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState('vision')
  const [openAccordion, setOpenAccordion] = useState(null)
  const [activePhase, setActivePhase] = useState(0)

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
              <Zap className="w-3.5 h-3.5" /> Strategic Framework 2026–2031
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Vision, Mission &{' '}
              <span className="text-amber-400">Strategic</span>
              <br />Framework
            </h1>
            <p className="text-lg text-emerald-200 leading-relaxed max-w-3xl mb-8">
              জিনাত গ্লোবাল এডুকেশন সিটির সমন্বিত দৃষ্টিভঙ্গি, মিশন এবং ২০২৬–২০৩১ বাস্তবায়ন রোডম্যাপ।
            </p>
            {/* Tab Switcher */}
            <div className="flex flex-wrap gap-3">
              {[['vision', Eye, 'ভিশন'], ['mission', Target, 'মিশন'], ['roadmap', Award, 'রোডম্যাপ']].map(([key, Icon, label]) => (
                <button key={key} onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${activeTab === key ? 'bg-amber-500 text-white shadow-lg' : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/20'}`}>
                  <Icon className="w-4 h-4" /> {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" /></svg>
        </div>
      </section>

      {/* VISION TAB */}
      {activeTab === 'vision' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Vision Statement */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Vision Statement</p>
                  <h2 className="text-2xl font-black text-gray-800">ভিশন</h2>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-l-4 border-emerald-600 rounded-2xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  "একটি সমন্বিত, টেকসই ও আন্তর্জাতিক মানসম্পন্ন জ্ঞানভিত্তিক বাংলাদেশ গঠন, যেখানে নার্সারি থেকে পিএইচডি পর্যন্ত প্রতিটি শিক্ষার্থী হবে প্রযুক্তিনির্ভর, উদ্ভাবনী মানসিকতাসম্পন্ন এবং বৈশ্বিক চ্যালেঞ্জ মোকাবিলায় সক্ষম।"
                </p>
                <p className="text-sm text-gray-500 mt-4 italic">
                  "To build an integrated, sustainable, and internationally standard knowledge-based Bangladesh where every student from Nursery to PhD becomes technology-driven, innovation-minded, and capable of facing global challenges."
                </p>
              </div>
            </div>

            {/* Vision Pillars — Accordion */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-black text-gray-800 mb-6 text-center">Core Vision Pillars</h3>
              <div className="space-y-3">
                {visionPillars.map((pillar, i) => (
                  <div key={i} className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${openAccordion === i ? 'border-emerald-400 shadow-lg' : 'border-gray-100'}`}>
                    <button onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                      className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 transition-colors">
                      <div className={`w-10 h-10 ${pillar.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <pillar.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-gray-400">{pillar.num}</span>
                          <h4 className="font-black text-gray-800 text-sm md:text-base">{pillar.bn}</h4>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{pillar.en}</p>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openAccordion === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openAccordion === i && (
                      <div className="px-5 pb-5 pt-0">
                        <div className="pl-14">
                          <p className="text-sm text-gray-600 leading-relaxed mb-4">{pillar.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {pillar.tags.map((tag) => (
                              <span key={tag} className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MISSION TAB */}
      {activeTab === 'mission' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mission Statement */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Mission Statement</p>
                  <h2 className="text-2xl font-black text-gray-800">মিশন</h2>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-l-4 border-blue-600 rounded-2xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  "Jinat Integrated Synergy Model (JISM)-এর মাধ্যমে একটি স্বয়ংসম্পূর্ণ Knowledge Economy Platform গড়ে তোলা, যেখানে শিক্ষা, গবেষণা, প্রযুক্তি, স্বাস্থ্য, কৃষি ও উদ্যোক্তা উন্নয়নের সমন্বয়ে একটি টেকসই ও অন্তর্ভুক্তিমূলক উন্নয়ন মডেল বাস্তবায়িত হবে।"
                </p>
                <p className="text-sm text-gray-500 mt-4 italic">
                  "To build a self-sufficient Knowledge Economy Platform through the JISM Model, where education, research, technology, health, agriculture, and entrepreneurship converge into a sustainable and inclusive development model."
                </p>
              </div>
            </div>

            {/* Strategic Dimensions */}
            <h3 className="text-2xl font-black text-gray-800 mb-8 text-center">Strategic Dimensions</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {missionDimensions.map((dim, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`bg-gradient-to-br ${dim.color} p-5 text-white`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                        <dim.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs bg-white/20 rounded-full px-2.5 py-1 font-semibold">Dimension {i + 1}</span>
                    </div>
                    <h4 className="font-black text-base leading-tight">{dim.title}</h4>
                    <p className="text-white/80 text-xs mt-1">{dim.titleBn}</p>
                  </div>
                  <div className="bg-white p-5">
                    <ul className="space-y-2">
                      {dim.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ROADMAP TAB */}
      {activeTab === 'roadmap' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">Implementation Roadmap</h2>
              <p className="text-gray-500">বাস্তবায়ন রোডম্যাপ ২০২৬–২০৩১</p>
            </div>

            {/* Phase Selector */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {roadmap.map((phase, i) => (
                <button key={i} onClick={() => setActivePhase(i)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${activePhase === i ? `${phase.color} text-white shadow-lg scale-105` : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  {phase.phase}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${activePhase === i ? 'bg-white/20' : 'bg-gray-200'}`}>{phase.year}</span>
                </button>
              ))}
            </div>

            {/* Active Phase Detail */}
            <div className="max-w-3xl mx-auto">
              {roadmap.map((phase, i) => (
                activePhase === i && (
                  <div key={i} className={`rounded-3xl border-2 ${phase.border} overflow-hidden shadow-xl`}>
                    <div className={`${phase.color} p-8 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-bold bg-white/20 px-4 py-1.5 rounded-full">{phase.phase} · {phase.year}</span>
                        <span className="text-4xl font-black text-white/20">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black mb-1">{phase.title}</h3>
                      <p className="text-white/80">{phase.titleBn}</p>
                    </div>
                    <div className={`${phase.light} p-8`}>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {phase.tasks.map((task, j) => (
                          <div key={j} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                            <div className={`w-7 h-7 ${phase.color} rounded-lg flex items-center justify-center flex-shrink-0 text-white text-xs font-black`}>
                              {j + 1}
                            </div>
                            <p className="text-sm font-semibold text-gray-700">{task}</p>
                          </div>
                        ))}
                      </div>
                      {/* Navigation */}
                      <div className="flex justify-between mt-6">
                        <button onClick={() => setActivePhase(Math.max(0, i - 1))} disabled={i === 0}
                          className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-700 disabled:opacity-30 transition-colors">
                          <ArrowLeft className="w-4 h-4" /> Previous Phase
                        </button>
                        <button onClick={() => setActivePhase(Math.min(roadmap.length - 1, i + 1))} disabled={i === roadmap.length - 1}
                          className={`flex items-center gap-2 text-sm font-semibold ${phase.text} disabled:opacity-30 transition-colors`}>
                          Next Phase <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>

            {/* Timeline Strip */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200" />
                <div className="relative flex justify-between">
                  {roadmap.map((phase, i) => (
                    <button key={i} onClick={() => setActivePhase(i)} className="flex flex-col items-center gap-2 group">
                      <div className={`w-10 h-10 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-black transition-all ${activePhase === i ? `${phase.color} scale-125` : 'bg-gray-300'}`}>
                        {i + 1}
                      </div>
                      <span className={`text-xs font-bold hidden sm:block ${activePhase === i ? phase.text : 'text-gray-400'}`}>{phase.year}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Manifesto */}
      <section className="py-16 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">💡</div>
          <blockquote className="text-2xl md:text-3xl font-black leading-relaxed mb-6 text-amber-400">
            "যেখানে প্রচলিত শিক্ষাব্যবস্থার সীমাবদ্ধতা শেষ,
            <br />সেখান থেকেই জিনাতের সমন্বিত মেধা-বিপ্লবের যাত্রা শুরু।"
          </blockquote>
          <p className="text-emerald-200 text-lg italic mb-10">
            "Where the limitations of conventional education end, Jinat's integrated intellectual revolution begins."
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/savar-knowledge-city" className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg">
              Explore Savar Knowledge City
            </Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
