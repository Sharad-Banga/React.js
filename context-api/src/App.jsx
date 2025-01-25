import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LightBulb/>
    </>
  )
}

function LightBulb(){
  return(
    <>
      <BulbState/>
      <ToggleBulbState/>
    </>
  )
}

function BulbState(){
  return(
    <>
      
    </>
  )
}

function ToggleBulbState(){
  return(
    <>
      <button>ToggleBulb</button>
    </>
  )
}

export default App
