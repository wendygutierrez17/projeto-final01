import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "./components/pages/Inicio"
import Sobre from "./components/pages/Sobre"
import Cadastro from "./components/pages/Cadastro"
import Contato from "./components/pages/Contato"
import Navbar from "./components/layout/Navbar"
import Body from "./components/layout/Body"
import Footer from "./components/layout/Footer"



function App() {
  return (
    <Router>
      <Navbar />

        <Body setClass="min_height">
          <Routes>
            <Route exact path="/" element={<Inicio />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/contato" element={<Contato />}/>
          </Routes>
        </Body>

      <Footer />
    </Router>
  )
}

export default App

