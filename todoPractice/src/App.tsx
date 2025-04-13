
import {  useRef, useState } from 'react'
import './App.css'
//@ts-ignore

function App() {
//@ts-ignore
const inputRef = useRef<HTMLInputElement>();

  const [arr , setArr]  = useState<string[]>([]);

  function handleAdd(){



    if(inputRef.current.value==""){
      console.log("sssss");
      
    }
    
    else if (inputRef.current) {
      setArr([...arr, inputRef.current.value]);
    }
    console.log(arr);
    inputRef.current.value = "";
    
  }

  function deletehandle(x:number){

    const newArr = [...arr];
    newArr.splice(x,1);
    setArr(newArr);
    
  }

  return (
    <>
      
      <div className='h-[100px] flex items-center justify-center font-extrabold text-4xl font-mono bg-red-500 text-black'>

        Todo List 

      </div>

      <div className='h-[100px] bg-black text-red-500 flex items-center justify-evenly'>

        <div className='w-[10%] text-black'>
          <input ref={inputRef} className='bg-red-50  h-[50px] w-[250px] font-semibold p-3'  type="text" />
        </div>

        <div className='flex justify-between w-[10%]'>
          <button onClick={handleAdd} className='bg-amber-400 pl-3 pr-3 pt-2 pb-2 rounded-sm cursor-pointer text-black font-semibold'>Add</button>
          <button className='bg-amber-400 pl-3 pr-3 pt-2 pb-2 rounded-sm cursor-pointer text-black font-semibold'>Delete All</button>
        </div>

      </div>




      <div className='bg-green-400 text-black h-screen'>

          {arr.map((a:string,index:number)=>(

              <div>
                <li key={index}> {a}  <button onClick={()=>deletehandle(index)} className='bg-red-700 p-1 rounded-sm'>delete</button></li>
                <br />
              </div>
          ))}

      </div>

    </>
  )
}

export default App
