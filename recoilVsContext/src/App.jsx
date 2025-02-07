import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Counter/>
    </>
  )
}

function Counter(){
  const [count, setCount] = useState(0)

  return<>

    {count}
    <br />
    <br />
    <Increment setCount={setCount}/>
    <br />
    <br />
    <Decrement setCount={setCount}/>
    


  </>
}

function Increment({setCount}){
  return (
    <>
      <button onClick={()=>{
        setCount(c=>c+1);
      }}>Increase</button>
    </>
  )
}

function Decrement({setCount}){
  return (
    <>
      <button onClick={()=>{
        setCount(c=>c-1);
      }} >Decrement</button>
    </>
  )
}

export default App
