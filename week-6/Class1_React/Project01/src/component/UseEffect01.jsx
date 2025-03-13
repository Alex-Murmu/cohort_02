import React, { useState, useEffect } from 'react';

function UseEffect01() {
    const [count, setCount] = useState(0);
    const [count2,setCount2] = useState(0);

    function onHandleClick() {
        setCount(count + 1);
    };

    function SecondOnhandleClick(){
      setCount2(count2+1)
    }

    useEffect(() => {
        fetch("http://localhost:2000/handle", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                count
            })
        })
        .then(res => res.json())
        .then(data =>console.log(data))
        .catch(error => console.error('Error:', error));
    }, [count]); // Add count as a dependency

    return (
        <>
            <button onClick={onHandleClick}>Increase Count</button>
            <h1>{count}</h1>
            <button onClick={SecondOnhandleClick}>Increase </button>
            <h2>{count2}</h2>
        </>
    );
}

export default UseEffect01;


/* When Ever the state Variable change the useEffect automatically call the because 
it contineously looking into the state variale as the varible change the useEffect will
activelly change the varible that passed to it 

*/