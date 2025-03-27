import React from "react"
import { lazy, Suspense } from "react"
import {BrowserRouter , Router ,Routes, Route ,useNavigate} from "react-router-dom"
import Coman from "./2zyLoading/Coman"
const Dashboard =lazy(()=>import("./2zyLoading/Dashboard"))
const Home = lazy(()=>import("./2zyLoading/Home"))
export default function App(){
  return <div>
  <BrowserRouter >
  <AppBar />
  <Coman />
   <Routes>
    <Route path="/" element={<Suspense fallback={"Loading...."}><Home /></Suspense>}  />
    <Route path="/dashboard" element={<Suspense fallback={"Loading....."}><Dashboard /></Suspense>}  />
   </Routes>
  </BrowserRouter>
  </div>
}
const AppBar =()=>{
  const navigate = useNavigate()

  return <div>
    <div>
      <button onClick={()=>navigate("/")}>Home</button>
      <button onClick={()=>navigate("/Dashboard")}>Dasboard</button>
    </div>
  </div>
}