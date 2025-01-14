import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count , setCount] = useState(0);

  return (
    <>
      <h1>Sharad Counter</h1>
      
      <Counter count={count} setCount={setCount}/>

    </>
  )
}


function Counter({count ,setCount}){

  useEffect(() => {
    const clock =setInterval(()=>{
      setCount(count=>count+1)
    } , 1000);

    return function(){
      
        clearInterval(clock);
      
    }


  }, []);
  


  return (
    <>
    <h2>{count}</h2>
    </>
  )
}

export default App