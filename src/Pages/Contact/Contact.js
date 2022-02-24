import React from "react";
import {Fade} from "react-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapPin, faMobile} from '@fortawesome/free-solid-svg-icons';
import SocialMedia from "../../Components/SocialMedia/SocialMedia";
import contactSection from "../../Components/contactSection/contactSection";
import LottieDisplay from "../../Components/LottieDisplay/LottieDisplay";
import contactPerson from "../../assets/lottie/contactPerson";
import "./Contact.scss";

const Contact = () => {
    return (
        <div id="contact" className="contact-section">
            <h2 className="title">{contactSection.title}</h2>
            <Fade left duration={2000} distance="20px">
                <div className="row">
                    <div className="main-content-profile">
                        <p className="description-title">{contactSection.descriptionTitle}</p>
                        <p className="description-main-content">{contactSection.descriptionContent}</p>
                        <p className="phone-number"><FontAwesomeIcon icon={faMobile}/>{contactSection.number}</p>
                        <p className="location"><FontAwesomeIcon icon={faMapPin}/>{contactSection.location}</p>
                        <SocialMedia />
                    </div>
                    <div className="lottieContainer-contact">
                        <LottieDisplay lottieFile={contactPerson} />
                    </div>
                </div>
            </Fade>
        </div>
    )
}
export default Contact