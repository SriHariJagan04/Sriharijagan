import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Pages/About/About'
import Experience from './Pages/Experience/Experience'
import Projects from './Pages/Projects/Projects'
import Techstack from './Pages/Techstack/Techstack'

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Experience />
      <Techstack />
      <Projects />
    </div>
  )
}

export default App