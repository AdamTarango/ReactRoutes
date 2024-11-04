import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Red from './Red'
import Blue from './Blue'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <h1></h1>
        <div id="navbar">
          <Link to={'/blue'}>Blue</Link>
          <Link to={'/home'}>Home</Link>
          <Link to={'/red'}>Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path='/red' element={<Red />} />
            <Route path='/blue' element={<Blue />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
