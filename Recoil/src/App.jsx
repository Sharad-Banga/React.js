import { useState } from 'react'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil';
import './App.css'
import { counter } from './atoms/CounterAtom';

function App() {

  return (
    <>
    <RecoilRoot>
      <Counter />

    </RecoilRoot>
    </>
  )
}

function Counter(){

  const count = useRecoilValue(counter);

  return<>
    count: {count}
    <br />
    <br />
    <Increment />
    <br />
    <br />
    <Decrement />
  </>
}


function Increment(){
  const setCount = useSetRecoilState(counter);
  return<>

    <button onClick={()=>{
      setCount(c=>c+1);
    }}>
      Increment
    </button>
  
  </>
}

function Decrement(){
  const setCount = useSetRecoilState(counter);

  return<>

    <button onClick={()=>{
      setCount(c=>c-1);
    }}>
      Decrement
    </button>
  
  </>
}

export default App
