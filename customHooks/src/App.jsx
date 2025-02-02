
import './App.css'
import {usePost} from "./useFetch";
 
function App() {
  
  const post = usePost();
  return (
     <>
        {post};
    </>
  )
}

export default App
