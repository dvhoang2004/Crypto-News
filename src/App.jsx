import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import Blog from './pages/Blog/Blog'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* Navigate to home page when the path is '/' (endpoint) */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
