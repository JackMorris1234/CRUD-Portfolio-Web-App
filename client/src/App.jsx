import { useState, useEffect } from 'react'
import Header from './Components/Header'
import './App.css'
import Carousel from './Components/Carousel'
import Projects from './Components/Projects'
import projectService from './Components/BackendCommunication/ProjectsBackend'
import SignIn from './Components/SignIn'

function App() {
  const [user, setUser]=useState(null)
  const [visibleSignIn, setVisibleSignIn]=useState(false)
  
  const toggleSignIn=()=>{
    setVisibleSignIn(!visibleSignIn)
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('ProjectUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      projectService.setToken(user.token)
    }
  }, [])

  return (
    <>
    <div>
      <Header user={user} setUser={setUser} toggleSignIn={toggleSignIn} className="Header"/>
      {visibleSignIn && <SignIn toggleSignIn={toggleSignIn} setUser={setUser}/>}
      <Carousel/>
      <Projects user={user}/>
      
    </div>
    </>
  )
}

export default App
