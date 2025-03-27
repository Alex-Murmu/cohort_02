import { useState } from "react";

export default function PropDrilling02(){
    const [count,setCount] = useState(0);
   

    return <div>
        <Count count={count}  setCount={setCount}/>
    
    </div>
}

const Count =({count,setCount})=>{
    return <div>
        {count}
        <Button count={count} setCount={setCount} />
    </div>
}

const Button =({count ,setCount})=>{
    return <div>
        <button onClick={()=>setCount(count+1)}>increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
}