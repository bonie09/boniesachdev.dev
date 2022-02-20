import React from "react";
import Headroom from "react-headroom";
import "./Navbar.scss";


const Navbar = () => {
    return (
        <Headroom>
            <header className="header">
                <a href="/" className="logo">
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
                    {/* <li>
                        <NavLink to="/skills" 
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        exact 
                        activeClassName="active"> 
                            Home
                        </NavLink>
                    </li> */}
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">My Projects</a>
                    </li>
                    {/* <li>
                        <a href="#education">Education</a>
                        <NavLink
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        className="nav-link"
                        activeClassName="active"
                        to="/"
                        exact
                        >
                        Home
                    </NavLink>
                    </li> */}
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