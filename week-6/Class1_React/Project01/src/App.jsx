// import React, { useState } from 'react'
// import Assigement from './component/Assigement_1';
// import AssigementTwo from './component/Assigement_2';
// import AssigementThree from './component/Assigement_3';

// function App() {
//   const [todos, settodos] = useState( {title:"mango",description:"Apple" }  )
//   const [isHovered, setIsHovered] = useState(false);
//   const [count ,setCount] = useState(0);
//   return (
//      <div>
//      {/* <Header title="Hello" />
//      <Headers todos={todos} isHovered={isHovered} setIsHovered={setIsHovered} />
//      <ButtonCount  count={count} setCount={setCount}/>

//      <Assigement />
//      <AssigementTwo /> */}
//      <AssigementThree />
//     </div>
//   )
// }

// // function Header({title}){
// //    return <div>
// //     {title}
// //    </div>
// // }

// // function Headers({todos ,isHovered, setIsHovered}){
// //   return <>
// //     <div>{todos.title}</div>
// //     <div>{todos.description}</div>
// //     <button style={{
// //       padding:10,
// //       margin:10,
// //       background: isHovered ? "blue" :"red",
// //       border:"none",
// //       borderRadius:5
// //     }}
// //     onMouseEnter={()=>setIsHovered(true)}
// //     onMouseLeave={()=>setIsHovered(false)}
// //     >more</button>
   
// //   </>
// // }


// // function ButtonCount({count,setCount}){

// //   return <button style={{
// //     padding:5,
// //     margin:10,
// //     borderRadius:5,
// //     background:"black",
// //     color:"white"

// //   }} onClick={()=>{setCount(count+1)}}> counter {count}</button>
// // }


// export default App


import React, { useState } from 'react'

function App() {
  const [name,setName] = useState("Alex Mumru");
  function Handle(){
    setName("counter is "+Math.random());
  }
  return (
    <div>
     <button onClick={Handle}>changeName</button>
     <Header name={name} />
     <Header name={name} />
     <Header name="Pankaj" />
     <Header name="Pankaj" />
     <Header name="Pankaj" />
     <Header name="Pankaj" />
     <Header name="Pankaj" />
    </div>
  )
}
const Header =React.memo(function ({name}){
 return <>
  <div>{name}</div>
 </>
})

export default App