import React from "react"
import { Route,Routes } from "react-router-dom"
import Home from './pages/Home'
import LoginPage from "./pages/LoginPage"
import SignUp from "./pages/SignUp"
import Electricity from "./pages/Electricity"
import Plumbing from "./pages/Plumbing"
import WasteManagement from "./pages/WasteManagement"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ResidentialDetails from "./pages/ResidentialDetails"
import CommercialElectricalDetails from "./pages/CommercialElectricalDetails"
import EmergencyElectricalDetails from "./pages/EmergencyElectricalDetails"
import AdminLoginForm from "./pages/AdminLoginForm"

function App() {
  return (
    <>

    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/electricity" element={<Electricity/>}/>
      <Route path="/plumbing" element={<Plumbing/>}/>
      <Route path="/wastemanagement" element={<WasteManagement/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/electricity/residential/:id" element={<ResidentialDetails/>}/>
      <Route path="/electricity/commercial/:id" element={<CommercialElectricalDetails/>}/>
      <Route path="/electricity/emergency/:id" element={<EmergencyElectricalDetails/>}/>
      <Route path="/admin" element={<AdminLoginForm/>}/>
    </Routes>
    
    
    </>
  )
}
export default App
