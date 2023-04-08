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
<Routes>
  <Sidebar/>
  <Mobilenav/>
      <Route exact path="/" Component={About} />
      <Route  path="/experience" Component={Experience} />
      <Route  path="/education" Component={Education} />
      <Route  path="/skills" Component={Skill} />
      <Route  path="/projects" Component={Projects} />
      <Route  path="/certifications" Component={Certification} />
    </Routes>
    </div>
  );
}

export default App;
