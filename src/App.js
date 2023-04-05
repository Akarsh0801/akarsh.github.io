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
      <Route exact path="/experience" element={<Experience/>} />
      <Route exact path="/education" element={<Education/>} />
      <Route exact path="/skills" element={<Skill/>} />
      <Route exact path="/projects" element={<Projects/>} />
      <Route exact path="/certifications" element={<Certification/>} />
    </Routes>
    </div>
  );
}

export default App;
