import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Nav from './Nav'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'


function App() {
  return (
    <>
      <Nav />
      {/* <AboutMe /> */}
      {/* <Portfolio /> */}
      {/* <Contact /> */}
      <Resume />
    </>
  )
}

export default App
