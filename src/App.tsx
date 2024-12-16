import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavigationMenu from './components/NavigationMenu'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Art from './pages/Art'
import Whisky from './pages/Whisky'
import Charity from './pages/Charity'
import About from './pages/About'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      
      <div className="bg-black pt-[100px] min-h-screen">
        <NavigationMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<Art />} />
          <Route path="/whisky" element={<Whisky />} />
          <Route path="/charity" element={<Charity />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
