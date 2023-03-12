import React from "react";
import { useState,useMemo } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'
import Home from "../components/Home.jsx"
import Login from "../components/Login.jsx"
import SignUp from "../components/SignUp.jsx"
import Land from "../components/Land.jsx"
import Test from "../components/Test.jsx"
import HomePage from "../components/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import HistoryArticals from "../components/HistoryArticals.jsx";
import ScienceArticals from "../components/ScienceArticals.jsx";
import ArtArticals from "../components/ArtArticals.jsx";
import EnviorArticals from "../components/EnviorArticals.jsx";
import { UserContext } from "../UserContext.cjs";
import Admin from "../components/Admin.jsx";





function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)

  const providerValue = useMemo(()=>({user, setUser}),[user, setUser])


  return (
    <UserContext.Provider value={providerValue}>
    <div className="App">

      <Routes>
        <Route path='/' element={<Land />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/log' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/histarticals' element={<HistoryArticals />} />
        <Route path='/sciencearticals' element={<ScienceArticals />} />
        <Route path='/homepage/artarticals' element={<ArtArticals />} />
        <Route path='/homepage/envirarticals' element={<EnviorArticals />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>

    </div>
    </UserContext.Provider>
  )
}

export default App
