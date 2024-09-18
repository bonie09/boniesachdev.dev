import React from "react";
import { Fade } from "react-reveal";
import Glitch from "react-glitch-text";
import Typewriter from "typewriter-effect";
import LottieDisplay from "../../Components/LottieDisplay/LottieDisplay";
import landingPerson from "../../assets/lottie/landingPerson";
import "./About.scss";

const About = () => {
  const openResume = () => {
    let win = window.open(
      "https://drive.google.com/file/d/1Z-AefuLssyYY28Riq_SOMCfyMhAOCM1X/view?usp=share_link",
      "_blank"
    );
    win.focus();
  };
  return (
    <div id="about" className="aboutContainer">
      <Fade left duration={1500} distance="50px">
        <div className="aboutDetails">
          <h1>
            <Glitch color="black">Hello World!, I'm Bonie Sachdev</Glitch>
          </h1>
          <h1 className="type-writer">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Software Engineer")
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
            Currently pursuing a Master's in Computer Software Engineering at
            Northeastern University, with graduation in December 2024. My
            expertise spans both frontend and backend development, focusing on
            building high-performance, scalable applications. At Quickbase, I
            contributed to optimizing grid component performance by 50%,
            implemented customizable features using React.js and C++, and
            streamlined CI/CD pipelines with AWS. During my time at Accenture, I
            developed centralized web applications using Java and React.js, and
            earned the 'Pinnacle Rising Star Award' for outstanding performance.
            My technical skills include Java, React.js, AWS, Docker, and CI/CD
            practices.
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
  );
};
export default About;
