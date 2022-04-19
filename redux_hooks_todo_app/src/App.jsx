import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUP'
import { TodoHomePage } from './components/TodoCompo/TodoHomePage'
import { HomeNav } from './components/HomeNav'
import { CreateTodos } from './components/TodoCompo/createTodo'
import { TodoSummery } from './components/TodoCompo/todoSummery'
import { EditTodos } from './components/TodoCompo/todoEdit'

function App() {

  return (
    <div className="App">
      <HomeNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/todoHome" element={<TodoHomePage />} />
        <Route path="/createTodo" element={<CreateTodos />} />
        <Route path="/summery" element={< TodoSummery />} />
        <Route path="/todos/:id" element={< EditTodos />} />
        
      </Routes>
    </div>
  )
}

export default App
