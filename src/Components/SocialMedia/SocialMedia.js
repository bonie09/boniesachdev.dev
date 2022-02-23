import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import leetcodeIcon from '@iconify-icons/simple-icons/leetcode';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import "./SocialMedia.scss";

export default function SocialMedia() {
  return (
    <div className="social-media-div">
        <a href={'https://www.linkedin.com/in/bonie-sachdev/'} className="icon-button linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#0077b5" }}/>
        </a>
        <a href={'https://github.com/bonie09'} className="icon-button">
            <FontAwesomeIcon icon={faGithub}style={{color: "#171515" }} />
        </a>
        <a href={'https://leetcode.com/bonie09/'} className="icon-button">
            <Icon icon={leetcodeIcon} style={{color: "#eb9e10" }}/>
        </a>
        <a href={"mailto:bonysachdev99@gmail.com"} className="icon-button">
            <FontAwesomeIcon icon={faGoogle} style={{color: "#BB001B" }}/>
        </a>
    </div>
    )
}