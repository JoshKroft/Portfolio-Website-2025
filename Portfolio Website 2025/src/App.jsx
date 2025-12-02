import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from './components/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Projects from  './pages/Projects/Projects.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import './App.css'

function AppRoutes() {
  const location = useLocation();
  const isProjects = location.pathname === '/projects' || location.pathname === '/projects/';
  return (
    <div className={isProjects ? 'aurora projects-bg' : 'aurora'}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
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
