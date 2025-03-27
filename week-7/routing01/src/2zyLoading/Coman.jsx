import React from 'react'
import { useState ,useCallback} from 'react';
function Coman() {
    const [count, setCount] = useState(0);
    const [tasks, setTasks] = useState([
        {id:1,name:"alex Murmu",post:"Rajbandh"},
        {id:2,name:"Suraj Marandi",post:"Rajbandh"},
        {id:3,name:"Lalten Hembram",post:"Rajbandh"}
    ]);
const increment = useCallback(() => setCount(c => c + 1), []);




// Stable function, doesn’t recreate unless dependencies change.
  return (
    <div>
        <button onClick={increment}>Increase {count}</button>
    </div>
  )
}

export default Coman