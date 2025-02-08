import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { networkAtom ,jobsAtom , notificationAtom , messagingAtom} from './assets/atoms'

function App() {
  // const [count, setCount] = useState(0)

 

  return<>
  <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
  </>
  
}


function MainApp(){

  const networkAtomsCount = useRecoilValue(networkAtom);
  const jobsAtomsCount = useRecoilValue(jobsAtom);
  const notificationAtomsCount = useRecoilValue(notificationAtom);
  const [messagingAtomsCount,setMessagingAtomsCount] = useRecoilState(messagingAtom);


  const tt = useMemo(()=>{
    return networkAtomsCount+jobsAtomsCount+notificationAtomsCount+messagingAtomsCount;
  },[networkAtomsCount,jobsAtomsCount,notificationAtomsCount,messagingAtomsCount])

  return (
    <>
      <button>Home</button>
      <button>My Network ({networkAtomsCount>99?"99+":networkAtomsCount})</button>
      <button>Jobs {jobsAtomsCount}</button>
      <button>Messaging {messagingAtomsCount}</button>
      <button>Notification {notificationAtomsCount}</button>
      <button onClick={()=>{
        setMessagingAtomsCount(c=>c+1);
      }}>me+</button>

      {tt}
    </>
  )
}

export default App
