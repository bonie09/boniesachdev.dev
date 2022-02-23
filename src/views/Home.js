import * as React from "react";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects";
import Experience from "../Pages/Experience/Experience";
import Contact from "../Pages/Contact/Contact";

const Home = () => {
    return (
        <>
            <Navbar />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </>
    )
}

export default Home
