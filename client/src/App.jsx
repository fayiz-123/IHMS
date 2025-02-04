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
import BookingForm from "./components/BookingForm"

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/electricity" element={<Electricity/>}/>
      <Route path="/plumbing" element={<Plumbing/>}/>
      <Route path="/book-now" element={<BookingForm/>}/>
      <Route path="/wastemanagement" element={<WasteManagement/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
     
    </Routes>
    
    
    </>
  )
}
export default App
