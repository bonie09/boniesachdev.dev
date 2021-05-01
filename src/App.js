import './App.scss';
import Navbar from './Components/Navbar'; 
import HomePage from './Pages/HomePage';
import {Route} from 'react-router-dom';
import SkillsPage from './Pages/SkillsPage';
import ProjectPage from './Pages/ProjectPage';
import ContactPage from './Pages/ContactPage';

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
        </div>
      </div>
    </div>
  );
}

export default App;
