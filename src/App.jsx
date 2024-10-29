import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import './App.css'

import AdminSide2 from './View/AdminSide2'

import MultiPageForm from './Pages/MultiPageForm'
import Last from './Pages/Last'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route path="/" element={ <MultiPageForm/>} /> 
   
        <Route path="/finish" element={<Last/>} /> 

        <Route path="/yeash" element={<AdminSide2/>} />  
      

      </Routes>

    </>
  )
}

export default App
