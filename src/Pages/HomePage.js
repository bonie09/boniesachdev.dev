import React from 'react'

const HomePage = () => {
    const openResume = () => {
        window.location.href = "https://drive.google.com/file/d/1HVHg7fMo7XoUFXjqjK-zdi-9uCJXLa8b/view?usp=sharing"
    }
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
                <button onClick={openResume} className="btn">Download Resume</button>
                </div>
            </header>
        </div> 
    )
}

export default HomePage
