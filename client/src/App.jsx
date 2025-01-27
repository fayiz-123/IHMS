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
      <Route path="/electricity/residentidetails" element={<ResidentialDetails/>}/>
      <Route path="/electricity/commercialdetails" element={<CommercialElectricalDetails/>}/>
      <Route path="/electricity/emergencydetails" element={<EmergencyElectricalDetails/>}/>
    </Routes>
    
    
    </>
  )
}
export default App
