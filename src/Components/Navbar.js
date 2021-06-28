import React from 'react'
import avatar from '../images/avatar.svg';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/skills" exact activeClassName="active">
                            Skills
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" exact activeClassName="active">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About Me
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>2021 Bonie Sachdev</p>
                </footer>
            </nav>
        </div>

    )
}

export default Navbar