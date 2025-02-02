import { useEffect ,useState} from "react";

// we can only use hooks in custom hooks

export function useFetch(url){

  const [finalData,setFinalData] = useState(null);

  async function getDetails(){
    const res = await fetch(url);
    
    const json = await res.json();

      setFinalData(json);
  }
  useEffect(()=>{
    getDetails();
  },[url])

  return{
    finalData
  }

}