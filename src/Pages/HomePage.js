import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span>  Bonie Sachdev</span>
                </h1>
                <p className="hero-sub-text">
                    Experienced Associate Software Engineer with a demonstrated history of working
                    in the information technology and services industry. Skilled in HTML5, CSS3, PHP, 
                    Java, Python, Computer Vision, AJAX, and Bootstrap. Strong engineering professional 
                    with a Bachelor of Engineering - BE focused in Computer Engineering from Thadomal Shahani
                    Engineering College.
                </p>
                <div className="work-section">
                    <Link to="/skills" className="btn" style={{float: 'left'}}>Click here for Skills</Link>
                    <Link to="/projects" className="btn" style={{float: 'right'}}>Latest work</Link>
                </div>
            </header>
        </div> 
    )
}

export default HomePage
