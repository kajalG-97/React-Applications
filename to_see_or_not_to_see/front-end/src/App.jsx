import './App.css'
import { Route, Routes } from 'react-router-dom'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'
import { RestaurantList } from './components/RestaurantList'
import { Navbar } from './components/Navbar'
import { NotFound } from './components/NotFound'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-restaurants" element={<RestaurantList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
