import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
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
  const messagingAtomsCount = useRecoilValue(messagingAtom);




  return (
    <>
      <button>Home</button>
      <button>My Network ({networkAtomsCount>99?"99+":networkAtomsCount})</button>
      <button>Jobs {jobsAtomsCount}</button>
      <button>Messaging {notificationAtomsCount}</button>
      <button>Notification {messagingAtomsCount}</button>
    </>
  )
}

export default App
