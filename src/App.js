import './App.scss';
import Navbar from './Components/Navbar'; 
import HomePage from './Pages/HomePage';
import {Route} from 'react-router-dom';
import SkillsPage from './Pages/SkillsPage';
import ProjectPage from './Pages/ProjectPage';
import ContactPage from './Pages/ContactPage';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import leetcodeIcon from '@iconify-icons/simple-icons/leetcode';
import hashnodeIcon from '@iconify-icons/simple-icons/hashnode';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="content">
          <switch>
            <Route path="/" exact>
              <div className="bg-image"></div>
              <div className="bg-text">
                  <HomePage />
              </div>
            </Route>
            <Route path="/skills" exact>
                <SkillsPage />
            </Route>
            <Route path="/projects" exact>
                <ProjectPage />
            </Route>
            <Route path="/contact" exact>
                <ContactPage />
            </Route>
          </switch>
        <footer>
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
            </footer>
            </div>
      </div>
    </div>
  );
}

export default App;
