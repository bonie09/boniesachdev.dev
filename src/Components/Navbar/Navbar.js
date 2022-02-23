import React from "react";
import Headroom from "react-headroom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <Headroom>
            <header className="header">
                <a href="/boniesachdev.dev" className="logo">
                    <span className="greyColor"> &lt;</span>
                    <span className="logoName">{"Bonie Sachdev"}</span>
                    <span className="greyColor">/&gt;</span>
                </a>
                <input className="menuBtn" type="checkbox" id="menu-btn" />
                <label
                    className="menuIcon"
                    htmlFor="menu-btn"
                    style={{color: "white"}}
                >
                <span className="navicon"></span>
                </label>
                <ul className="menu">
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">My Projects</a>
                    </li>
                    <li>
                        <a href="#experience">Work Experiences</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
            </header>
        </Headroom>
    )
}

export default Navbar