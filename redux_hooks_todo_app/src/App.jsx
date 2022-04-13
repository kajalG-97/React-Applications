import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUP'
import { TodoHomePage } from './components/TodoHomePage'

function App() {
  

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path ="/todoHome" element={<TodoHomePage />}/>
     </Routes>
    </div>
  )
}

export default App
