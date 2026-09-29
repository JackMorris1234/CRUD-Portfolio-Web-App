import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Carousel from './Components/Carousel'
import Projects from './Components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header className="Header"/>
      <Carousel/>
      <Projects/>
      
    </div>
    </>
  )
}

export default App
