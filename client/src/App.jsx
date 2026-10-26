import { useState } from 'react'
import MainPage from './MainPage'
import EditProject from './Components/Forms/EditProject'
import NewProject from './Components/Forms/NewProject'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

function App() {
  const [user, setUser]=useState(null)


  return (
    <Router>
      <Routes>
        <Route path='/' element=

      </Routes>
    </Router>
  )
}

export default App
