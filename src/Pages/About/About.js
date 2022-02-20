import React from "react";
import {Fade} from "react-reveal";
import Glitch from 'react-glitch-text';
import Typewriter from "typewriter-effect";
import LottieDisplay from "../../Components/LottieDisplay/LottieDisplay";
import landingPerson from "../../assets/lottie/landingPerson";
import "./About.scss";

const About = () => {
    const openResume = () => {
        let win = window.open("https://drive.google.com/file/d/1Pyy0toBFhYWbXbqgm_66QVyy0O1lt_sC/view?usp=sharing", "_blank");
        win.focus();
    }
    return (
        <div id="about" className="aboutContainer">
            <Fade left duration={1500} distance="50px">
            <div className="aboutDetails">
                <h1>
                <Glitch color='black'>
                    Hello World!, I'm Bonie Sachdev
                </Glitch>
                </h1>
                <h1 className="type-writer">
                <Typewriter
                        onInit={(typewriter)=> {
                        typewriter
                        .typeString("Software Programmer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Web Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("DevOps Engineer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcomes You in my portfolio")
                        .start();
                        }}
                        />
                </h1>
                <p className="subtitle">
                Experienced Associate Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in HTML5, CSS3, PHP, Java, Python, Computer Vision, AJAX, and Bootstrap. 
                Strong engineering professional with a Bachelor of Engineering - BE focused in Computer Engineering from Thadomal Shahani Engineering College.
                </p>
                    <button className="hover-button" onClick={openResume}>
                        <span>See My Resume</span>
                    </button>
            </div>
            </Fade>
            <Fade left duration={2000} distance="120px">
            <div className="lottieConatiner">
                <LottieDisplay lottieFile={landingPerson} />
            </div>
            </Fade>
        </div>
    )
}
export default About