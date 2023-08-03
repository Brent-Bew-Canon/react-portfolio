import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Project from './pages/Project'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<AboutMe />} />
          <Route
            path="/resume"
            element={<Resume />} />
          <Route
            path="/portfolio"
            element={< Portfolio />} />
          <Route
            path="/project"
            element={<Project />} />
          <Route
            path="/contact"
            element={<Contact />} />
          {/* {renderPage()} */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
