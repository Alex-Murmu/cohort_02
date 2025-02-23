import { useState } from 'react'
import Input from './component/inputMethod/Method1';
import Input2 from './component/inputMethod/Method2';
import Sum from './component/inputMethod/sumInput'
function App() {
  const [count, setCount] = useState(0);


  function IncreaseNumberByone(){
    setCount(count+1);
  }

  return (
    <>
     <div>
      <button onClick={IncreaseNumberByone}>count {count}</button>  
      <Input />
      <Input2 />
      <Sum />
    </div>
    </>
  )
}


export default App
