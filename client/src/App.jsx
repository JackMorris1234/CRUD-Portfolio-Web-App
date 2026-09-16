import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Carousel from './Components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header className="Header"/>
      <Carousel/>
      
    </div>
    </>
  )
}

export default App
