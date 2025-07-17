import styles from './NavBar.module.css';
import { useContext } from 'react';
import { LanguageContext } from '../common/LanguageContext';

const NavBar = () => {
  const { texts } = useContext(LanguageContext);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 60; // Height of navbar plus some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        <div className={styles.spacer}></div>
        <li>
          <button onClick={() => scrollToSection('carvalho')}>{texts.header.title}</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('projects')}>{texts.projects.title}</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('skills')}>{texts.skills.title}</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('achievements')}>{texts.achievements.title}</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('contact')}>{texts.contact.title}</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
