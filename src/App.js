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
      <Route exact path="/" element={<About/>} />
      <Route path="/experience" element={<Experience/>} />
      <Route  path="/education" element={<Education/>} />
      <Route  path="/skills" element={<Skill/>} />
      <Route  path="/projects" element={<Projects/>} />
      <Route  path="/certifications" element={<Certification/>} />
    </Routes>
    </div>
  );
}

export default App;
