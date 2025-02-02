
import './App.css'
import {useFetch} from "./useFetch";
 
function App() {
  
  const {finalData} = useFetch("https://jsonplaceholder.typicode.com/posts/2");
  return (
     <> 
        { JSON.stringify(finalData)};
    </>
  )
}

export default App
