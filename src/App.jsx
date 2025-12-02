import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from './components/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Projects from  './pages/Projects/Projects.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import './App.css'

function AppRoutes() {
  const location = useLocation();
  const isProjects = location.pathname === '/Portfolio-Website-2025/projects' || location.pathname === '/Portfolio-Website-2025/projects/';
  return (
    <div className={isProjects ? 'aurora projects-bg' : 'aurora'}>
      <Routes>
        <Route path="/Portfolio-Website-2025/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="/Portfolio-Website-2025/projects" element={<Projects />} />
          <Route path="/Portfolio-Website-2025/about" element={<About />} />
          <Route path="/Portfolio-Website-2025/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
