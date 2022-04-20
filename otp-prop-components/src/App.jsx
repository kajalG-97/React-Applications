import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { OTPBoxes } from './components/Otp'


function App() {
  
  return (
    <div className="App">
      
      <OTPBoxes length={4} label="hello"/>
    </div>
  )
}

export default App
