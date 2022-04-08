import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { RestaurantList } from './components/RestaurantList'
import { AddRestaurant } from './components/AddRestaurant'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'


function App() {


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<RestaurantList />} />
        <Route path="/addRestaurant" element={<AddRestaurant />} />
      </Routes>


    </div>
  )
}

export default App
