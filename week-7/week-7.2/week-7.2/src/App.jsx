import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";

import   {countAtom}   from "./store/atoms/Count";

function App() {
  return (
    <div>
      <RecoilRoot>
       <Count />       
      </RecoilRoot>

    </div>
  )
}

export default App

function Count(){ 
  return <div>
    <CountRender />
    <Buttons />
  </div>
}

function CountRender(){
 const count = useRecoilValue(countAtom)
  return <div>
    <b>
    {count}
    </b>
  </div>
}

function Buttons(){
  const [count,setCount]  = useRecoilState(countAtom);
  return <div>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <button onClick={()=>setCount(count-1)}>Decrease</button>
  </div>
}