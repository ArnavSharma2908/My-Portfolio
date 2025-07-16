import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';

function Projects() {
  const { texts } = useContext(LanguageContext);

  const projectList = [
    {
      link: 'https://github.com/ArnavSharma2908/oscar-intelli.ai',
      h3: '🚧 Oscar Intelli.AI – Optical System for Chess Analysis and Reasoning',
      p: 'COMING SOON – AI-powered system using computer vision to analyze chess boards and generate intelligent reasoning.',
    },
    {
      link: 'https://github.com/ArnavSharma2908/Delhi-Metro-Transit-Corporation-and-Chatbot',
      h3: '🚀 Delhi Metro Transit & ChatBot',
      p: '✅ FEATURED!!! – Built in 2022 before the GPT era. Python-based metro planner with chatbot & map integration.',
    },
    {
      link: 'https://github.com/ArnavSharma2908/patient-palace-radiant-care',
      h3: '✅ Patient Palace Radiant Care',
      p: 'Full-stack web app for managing patients, with WhatsApp notification integration for seamless healthcare workflows.',
    },
    {
      link: 'https://github.com/ArnavSharma2908/SFH_Project_Chronic_Management',
      h3: '✅ SFH Chronic Management System',
      p: 'AI-based chronic care monitoring platform to support personalized treatment and patient data tracking.',
    }
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">{texts.projects.title}</h1>
      <div className={styles.projectsContainer}>
        {projectList.map((project, index) => (
          <ProjectCard
            key={project.link}
            link={project.link}
            h3={project.h3}
            p={project.p}
            align={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
