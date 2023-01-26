import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h5>React CRUD operations using PHP API & MySQL </h5>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            {/* HOME PAGE */}
            <Link to="/">List Users</Link>
          </li>
          <li>
            <Link to="user/create">Create User</Link>
          </li>
         
        </ul>
        </nav>

        {/* REACT ROUTER */}
        <Routes>
          <Route index element={<ListUser></ListUser>} />
          <Route path='user/create' element={<CreateUser></CreateUser>} />
          <Route path='user/:id/edit' element={<EditUser></EditUser>} />

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
