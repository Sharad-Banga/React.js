import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Com} from "./Com"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Com name="sharad"/>
      <Com name="simi"/>
      <Com name="sabbi"/>


    </>
  )
}

export default App
