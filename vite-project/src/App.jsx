import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <BrowserRouter>          
        <Routes>
          <Route path="/" element={<Home />} />  
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App