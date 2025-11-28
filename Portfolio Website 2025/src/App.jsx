import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Projects from  './pages/Projects/Projects.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import './App.css'

function App() {
  return (
    <div className="aurora">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> 
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
