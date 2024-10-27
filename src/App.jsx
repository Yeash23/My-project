import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import './App.css'
import Side1 from './Pages/Side1'
import Side2 from './Pages/Side2'
import Side3 from './Pages/Side3'
import Side4 from './Pages/Side4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route path="/" element={<Side1/>} /> 
        <Route path="/side1" element={<Side2/>} /> 
        <Route path="/side2" element={<Side3/>} /> 
        <Route path="/side3" element={<Side4/>} /> 
      </Routes>
    </>
  )
}

export default App
