import React from "react"
import { Route,Routes } from "react-router-dom"
import Home from './pages/Home'
import LoginPage from "./pages/LoginPage"
import SignUp from "./pages/SignUp"
import Electricity from "./pages/Electricity"

function App() {
  return (
    <>

    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/electricity" element={<Electricity/>}/>
      
    </Routes>
    
    
    </>
  )
}
export default App
