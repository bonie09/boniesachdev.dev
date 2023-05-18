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
            Currently pursing Masters in Information Systems at Northeastern
            University. I have worked for 1.4 years in Accenture Solutions Pvt
            Ltd as an Associate Software Engineer. I have expertise in web
            technologies and object oriented programming languages. I'm seeking
            a chance to use my expertise and enthusiasm for web technologies to
            improve software design so that it solves issues, goes above and
            beyond expectations, and turns leads into devoted customers.
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
