import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import { RegistrationOne } from './components/RegistrationOne'
import { RegistrationTwo } from './components/RegistrationTwo'
import { Users } from './components/Users';
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="registration/one" element={<RegistrationOne />} />
        <Route path="registration/two" element={<RegistrationTwo />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element = {<Home />}/>
      </Routes>
    </div>
  )
}

export default App
