import { useState, useEffect } from 'react'
import Header from './Components/Header'
import './App.css'
import Carousel from './Components/Carousel'
import Projects from './Components/Projects'
import projectService from './Components/BackendCommunication/ProjectsBackend'

function App() {
  const [user, setUser]=useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('BlogListUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      projectService.setToken(user.token)
    }
  }, [])

  return (
    <>
    <div>
      <Header user={user} setUser={setUser} className="Header"/>
      <Carousel/>
      <Projects/>
      
    </div>
    </>
  )
}

export default App
