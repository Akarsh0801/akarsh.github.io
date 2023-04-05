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
      <Route exact path="/akarsh.github.io" element={<About/>} />
      <Route  path="/akarsh.github.io/experience" element={<Experience/>} />
      <Route  path="/akarsh.github.io/education" element={<Education/>} />
      <Route  path="/akarsh.github.io/skills" element={<Skill/>} />
      <Route  path="/akarsh.github.io/projects" element={<Projects/>} />
      <Route  path="/akarsh.github.io/certifications" element={<Certification/>} />
    </Routes>
    </div>
  );
}

export default App;
