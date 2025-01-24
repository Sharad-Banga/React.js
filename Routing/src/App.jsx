import { useState } from 'react'
import {BrowserRouter , Route ,Routes, Link} from "react-router-dom";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      Allen
      <br />
      <Link to="/sam">
          <button>SAM</button>
        </Link>
        &nbsp;
        <Link to="/sharad">
          <button>SHARAD</button>
        </Link> 
      <Routes>
        <Route path='/sam' element={<Sam/>} />
        <Route path='/sharad' element={<Sharad/>} />
        <Route path='/' element={<Landing/>} />

      </Routes>
    </BrowserRouter>
      
    </>
  )
}

function Sam(){
  return(
    <>
        SAMM
    </>
  )
}
function Sharad(){
  return(
    <>
        SHARAD
    </>
  )
}
function Landing(){
  return(
    <>
        Landing
        <br />
        
    </>
  )
}

export default App