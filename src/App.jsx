import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import AcademicPrograms from './pages/AcademicPrograms'
import ITInnovation from './pages/ITInnovation'
import Contact from './pages/Contact'
import InstitutionPage from './pages/InstitutionPage'
import SavarKnowledgeCity from './pages/SavarKnowledgeCity'
import VisionMission from './pages/VisionMission'
import JISM from './pages/JISM'
import { LanguageProvider } from './context/LanguageContext'
import { AdminAuthProvider, useAdminAuth } from './context/AdminAuthContext'
import AdminLogin from './admin/pages/AdminLogin'
import AdminLayout from './admin/components/AdminLayout'
import AdminDashboard from './admin/pages/AdminDashboard'
import AdminSubmissions from './admin/pages/AdminSubmissions'
import AdminSubmissionDetail from './admin/pages/AdminSubmissionDetail'
import AdminSettings from './admin/pages/AdminSettings'
import AdminGallery from './admin/pages/AdminGallery'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function ProtectedRoute({ children }) {
  const { admin, loading } = useAdminAuth()
  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )
  return admin ? children : <Navigate to="/admin" replace />
}

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<AcademicPrograms />} />
          <Route path="/jism" element={<JISM />} />
          <Route path="/it-innovation" element={<ITInnovation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/campus/:slug" element={<InstitutionPage />} />
          <Route path="/savar-knowledge-city" element={<SavarKnowledgeCity />} />
          <Route path="/vision-mission" element={<VisionMission />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AdminAuthProvider>
          <ScrollToTop />
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/*" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="submissions" element={<AdminSubmissions />} />
              <Route path="submissions/:id" element={<AdminSubmissionDetail />} />
              <Route path="gallery" element={<AdminGallery />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>

            {/* Public Routes */}
            <Route path="/*" element={<PublicLayout />} />
          </Routes>
        </AdminAuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}
