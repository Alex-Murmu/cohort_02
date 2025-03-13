import React, { useState } from 'react'

function ReacMemo02() {
    const [count,setCount] = useState(0);
    
    function handleClick(){
        setCount(count+1);
    }
    return (
        <div>
        <button onClick={handleClick}>increase</button>
         <Header count={"the counter is "+ count} />
         <Header count={count} />
         <Header count="Number not" />
         <Header count="Number not" />
         <Header count="Number not" />
    </div>
  )
  
  
}
const  Header = React.memo(function Header({count}){
    return <div>
        {count}
    </div>
} 
)

export default ReacMemo02