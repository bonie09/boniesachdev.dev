import './App.scss';
import Navbar from './Components/Navbar'; 
import HomePage from './Pages/HomePage';
import {Route} from 'react-router-dom';
import SkillsPage from './Pages/SkillsPage';
import ProjectPage from './Pages/ProjectPage';
import ContactPage from './Pages/ContactPage';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <Navbar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
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
        </div>
      </div>
    </div>
  );
}

export default App;
