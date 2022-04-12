import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { RestaurantList } from './components/RestaurantList'
import { AddRestaurant } from './components/AddRestaurant'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { NotFound } from './components/NotFound'


function App() {


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<RestaurantList />} />
        <Route path="/addRestaurant" element={<AddRestaurant />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


    </div>
  )
}

export default App
