import './App.css'
import Carvalho from './sections/Carvalho/Carvalho';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Achievements from './sections/Achievements/Achievements';

function App() {

  return (
    <>
      <Carvalho />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
  
}

export default App;