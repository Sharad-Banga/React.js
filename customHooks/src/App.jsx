
import './App.css'
import {usePost} from "./useFetch";
 
function App() {
  
  const po = usePost();
  return (
     <>
        {po};
    </>
  )
}

export default App
