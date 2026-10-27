import { useState } from 'react'
import MainPage from './MainPage'
import EditProject from './Components/Forms/EditProject'
import NewProject from './Components/Forms/NewProject'
import ViewProject from './Components/ProjectDisplay/ViewProject'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'

function App() {
  const [user, setUser]=useState(null)
   const [projects, setProjects]=useState([])


  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage user={user} setUser={setUser} projects={projects} setProjects={setProjects}/>}/>
        <Route path='/NewProject' element={<NewProject/>}/>
        <Route path='/EditProject/:id' element={<EditProject projects={projects} setProjects={setProjects}/>}/>
        <Route path='/ViewProject/:id' element={<ViewProject projects={projects}/>}/>
      </Routes>
    </Router>
  )
}

export default App
