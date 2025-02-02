import { useState } from 'react'
import './App.css'

function useCounter(){
  const [count, setCount] = useState(0);

  function incCount(){
    setCount(c => c+1);
  }

  return {
    count : count,
    incCount : incCount
  }
}
 
function App() {
  
  const {count , incCount} = useCounter(0);
  return (
    <>
        hi there {count}
        <br />
        <button onClick={incCount}>inc</button>
    </>
  )
}

export default App
