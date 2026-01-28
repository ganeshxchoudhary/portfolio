import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

// Lazy load below-the-fold components and other pages
const About = React.lazy(() => import('./components/About'))
const Skills = React.lazy(() => import('./components/Skills'))
const Experience = React.lazy(() => import('./components/Experience'))
const Education = React.lazy(() => import('./components/Education'))
const Work = React.lazy(() => import('./components/Work'))
const Contact = React.lazy(() => import('./components/Contact'))
const Login = React.lazy(() => import('./pages/Login'))
const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const ComingSoon = React.lazy(() => import('./pages/ComingSoon'))

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
)

function Home() {
  const [activeSection, setActiveSection] = React.useState('Home');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            // capitalize first letter
            setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Work />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><LoadingSpinner /></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/twitter" element={<ComingSoon />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
