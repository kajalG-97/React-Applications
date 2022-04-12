import './App.css'
import { Route, Routes } from 'react-router-dom'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'
import { RestaurantList } from './components/RestaurantList'
import { Navbar } from './components/Navbar'
import { NotFound } from './components/NotFound';
import { useSelector } from 'react-redux'
import { PrivateRoute } from "./components/PrivateRoute";


function App() {
  const { isAuthenticated } = useSelector((store) => store.auth);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-restaurants" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <RestaurantList />
          </PrivateRoute>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
