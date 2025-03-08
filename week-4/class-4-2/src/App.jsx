import { useState } from 'react'
import LoginForm from './Component/Header'

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
    <LoginForm></LoginForm>
    </>
  )
}


export default App
