import { Routes,  Route, Router } from 'react-router-dom';
import './App.css';
import Certification from './Certification';
import Education from './Education';
import Experience from './Experience';
import About from './About';
import Projects from './Projects';
import Sidebar from './Sidebar';
import Skill from './Skill';
import Mobilenav from './MobileNav';

function App() {
  return (


<div className='flex'>
<Router>
  <Sidebar/>
  <Mobilenav/>
  <Routes>
      <Route exact path="/" >
        <About/>
        </Route>
      <Route  path="/experience">
         <Experience/>
         </Route>
      <Route  path="/education"> 
      <Education/>
      </Route>
      <Route  path="/skills"> 
      <Skill/>
      </Route>
      <Route  path="/projects"> 
      <Projects/>
      </Route>
      <Route  path="/certifications"> 
      <Certification/>
      </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
