import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "./components/pages/Inicio"
import Sobre from "./components/pages/Sobre"
import Cadastro from "./components/pages/Cadastro"
import Contato from "./components/pages/Contato"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import Container from "./components/layout/Container"


function App() {
  return (
   <Router>
  <Navbar />

  <Container customClass= 'min-height'>
    <Routes>
      <Route exact path="/" element={<Inicio/>}/>
      <Route path="/sobre" element={<Sobre/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/contato" element={<Contato/>}/>

    </Routes>
    <Container />
    <Footer />
   </Router>
  )
}

export default App;
