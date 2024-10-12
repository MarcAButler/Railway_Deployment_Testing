import React from 'react'
import { Routes, Route} from "react-router-dom"

// Import Components
import TestComponent from './Components/TestComponent'


const App = () => {


  return (
    <Routes>
      <Route path="/test" element={ <TestComponent/> }/>
    </Routes>
  )
}

export default App
