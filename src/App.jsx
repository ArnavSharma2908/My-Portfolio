import './App.css'
import Carvalho from './sections/Carvalho/Carvalho';
import NavBar from './NavBar/NavBar';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Achievements from './sections/Achievements/Achievements';

function App() {

  return (
    <>
      <NavBar />
      <section id="carvalho">
        <Carvalho />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
  
}

export default App;