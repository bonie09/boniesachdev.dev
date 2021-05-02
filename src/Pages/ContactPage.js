import React from 'react'
import avatar from '../images/avatar.jpg';
import Tittle from '../Components/Tittle'
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import leetcodeIcon from '@iconify-icons/simple-icons/leetcode';
import hashnodeIcon from '@iconify-icons/simple-icons/hashnode';
import ServiceSection from '../Components/ServiceSection';

const ContactPage = () => {
    return (
        <div>
            <Tittle title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServiceSection image={avatar} title={'Web design'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
                <ServiceSection image={avatar} title={'Artificial Intelligence'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
            </div>
            <div className="contact-title">
                <Tittle title={"Contact"} span={"Contact"} />
            </div>
            <div className="contact-section">
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon li"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </Link>
                    <Link className="icon-holder">
                        <Icon icon={leetcodeIcon} className="icon lc"/>
                    </Link>
                    <Link className="icon-holder">
                        <Icon icon={hashnodeIcon} className="icon hn"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon ig"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
