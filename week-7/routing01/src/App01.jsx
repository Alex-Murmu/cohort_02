import React from 'react'
import {BrowserRouter, Router, Routes, Route } from 'react-router-dom';
const Dashboard = React.lazy(()=> import("./1Routing/Dashboard"))
import Home from './1Routing/Home';
import Header from './1Routing/Header'
function App() {

  return (
    <div>
      <BrowserRouter >
      <Header />
       <Routes>
             <Route path='/' element={<Home />}   ></Route>
             <Route path='/Dashboard' element={<Dashboard />}   ></Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App