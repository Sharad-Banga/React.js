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
  const [bulbOn ,setBulbOn] = useState(true);

  return(
    <>
      <BulbState bulbOn={bulbOn}/>
      <ToggleBulbState setBulbOn={setBulbOn}/>
    </>
  )
}

function BulbState({bulbOn}){
  return(
    <>
      
      {bulbOn?"ON":"OFF"}
      <br />
      <br />
      <br />
    </>
  )
}

function ToggleBulbState({setBulbOn}){
  return(
    <>
      <button onClick={()=>{setBulbOn(bulbOn=>!bulbOn)}}>ToggleBulb</button>
    </>
  )
}

export default App
