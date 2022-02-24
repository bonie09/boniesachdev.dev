import React from "react";
import {Fade} from "react-reveal";
import skillsSection from "../../Components/skillsSection/skillsSection";
import LottieDisplay from "../../Components/LottieDisplay/LottieDisplay";
import skillsPerson from "../../assets/lottie/skillsPerson";
import "./Skills.scss";

const Skills = () => {
    return (
        <div id="skills" className="skills-main-div">
            <h1 className="title">
                {skillsSection.title}{" "}
            </h1>
            <p className="subtitle">{skillsSection.subtitle}{" "}</p>
            <Fade bottom duration={1500} distance="40px">
            <div className="skillContainer">
                <div className="lottieContainer">
                    <LottieDisplay lottieFile={skillsPerson} />
                </div>
                <div className="skillsDetails">
                    <ul className="dev-icons">
                        {skillsSection.softwareSkills.map((skills, i) => {
                            return (
                            <li
                                key={i}
                                className="software-skill-inline"
                                name={skills.skillName}
                            >
                                <i><img src={skills.src} name={skills.skillName} width="80px" alt={skills.skillName} style={{margin: "0.5rem"}} /></i>
                            </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            </Fade>
        </div>
    )
}
export default Skills