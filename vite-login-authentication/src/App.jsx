import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'

import './App.css'
import { Home } from './components/home/home'
import { TodoDetails } from './components/todoDetails/details'
import { Nav } from './components/nav'
import { Login } from './components/login'
import { useSelector } from 'react-redux'


function App() {
  
  const authentication = useSelector((store) => store.auth.auth);
  
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={authentication?<Home />:<Navigate replace to ="/login"/>} />
        <Route path="/todo/:id" element={<TodoDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
