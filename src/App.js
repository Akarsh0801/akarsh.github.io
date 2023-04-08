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

  <Sidebar/>
  <Mobilenav/>

  <Routes>
      <Route exact path="/akarsh.github.io" >
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
    </div>
  );
}

export default App;
