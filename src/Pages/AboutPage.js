import React from 'react'
import symbol from '../images/symbol.svg';
import symbol1 from '../images/symbol1.svg';
import Tittle from '../Components/Tittle'
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import leetcodeIcon from '@iconify-icons/simple-icons/leetcode';
import hashnodeIcon from '@iconify-icons/simple-icons/hashnode';
import ServiceSection from '../Components/ServiceSection';

const AboutPage = () => {
    return (
        <div>
            <div className="service-title">
                <Tittle title={'Experience'} span={'Experience'} />
            </div>
            <div className="services-container">
                <ServiceSection image={symbol} title={'Associate Software Engineer at Accenture'}/>
                <ServiceSection image={symbol1} title={'Web Developer Intern at Sarvaswa Venture (OPC) Pvt. Ltd.'}/>
            </div>
            <div className="contact-title">
                <Tittle title={"Contact"} span={"Contact"} />
            </div>
            <div className="contact-section">
                <div className="icons">
                    <a href={'https://www.linkedin.com/in/bonie-sachdev/'} className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon li"/>
                    </a>
                    <a href={'https://github.com/bonie09'} className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </a>
                    <a href={'https://leetcode.com/bonie09/'} className="icon-holder">
                        <Icon icon={leetcodeIcon} className="icon lc"/>
                    </a>
                    <a href={'http://bonie09.hashnode.dev/'} className="icon-holder">
                        <Icon icon={hashnodeIcon} className="icon hn"/>
                    </a>
                    <a href={'https://www.instagram.com/bony.sachdev/'} className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon ig"/>
                    </a>
                    <a href={"mailto:bonysachdev99@gmail.com"} className="icon-holder">
                        <FontAwesomeIcon icon={faGoogle} className="icon mt"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
