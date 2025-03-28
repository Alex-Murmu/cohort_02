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

/* the problem arise here when pass props in parent componet to that which will gonna
used by the children component but this is ok but when in large project where there is lots of 
pages props drilling became problem because you have to pass the porps to all 
the parent componet that not needt that props actually but at the end it will only be used by the 
childcomponent thats why it became worse to write the code and also unreadable for coder 
*/
