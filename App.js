import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Header from "./components/Header"

export default function App() {
    return (
        <div className="container">
            <Header />
            <Info />
            <About />
            <Interests />
            <Projects />
            <Footer />
            
        </div>
    )
}