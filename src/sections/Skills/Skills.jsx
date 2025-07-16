import styles from './SkillsStyles.module.css';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';

const skills = [
  // Languages and Dev Tools
  { name: 'Python', badgeUrl: 'https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54' },
  { name: 'Java', badgeUrl: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white' },
  { name: 'HTML', badgeUrl: 'https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
  { name: 'CSS', badgeUrl: 'https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
  { name: 'JavaScript', badgeUrl: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
  { name: 'TypeScript', badgeUrl: 'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white' },

  // Frameworks and Libraries
  { name: 'React JS', badgeUrl: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react' },
  { name: 'Next.js', badgeUrl: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white' },
  { name: 'Node.js', badgeUrl: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs' },
  { name: 'Tailwind CSS', badgeUrl: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
  { name: 'Bootstrap', badgeUrl: 'https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white' },

  // Python Packages
  { name: 'Django', badgeUrl: 'https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white' },
  { name: 'Tkinter', badgeUrl: 'https://img.shields.io/badge/Tkinter-ffcc33?style=for-the-badge&logo=python&logoColor=black' },
  { name: 'BeautifulSoup', badgeUrl: 'https://img.shields.io/badge/BeautifulSoup-3B4169?style=for-the-badge&logo=python&logoColor=white' },
  { name: 'Langchain', badgeUrl: 'https://img.shields.io/badge/Langchain-000000?style=for-the-badge&logoColor=white' },

  // AI + Data
  { name: 'TensorFlow', badgeUrl: 'https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white' },
  { name: 'Pandas', badgeUrl: 'https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas' },
  { name: 'NumPy', badgeUrl: 'https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white' },
  { name: 'Matplotlib', badgeUrl: 'https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=python&logoColor=white' },
  { name: 'Jupyter', badgeUrl: 'https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white' },

  // DBMS
  { name: 'MySQL', badgeUrl: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white' },
  { name: 'PostgreSQL', badgeUrl: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white' },
  { name: 'MongoDB', badgeUrl: 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white' },

  // DevOps & Tools
  { name: 'Git', badgeUrl: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white' },
  { name: 'GitHub Actions', badgeUrl: 'https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white' },
  { name: 'Docker', badgeUrl: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white' },
  { name: 'AWS EC2', badgeUrl: 'https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white' },
  { name: 'REST APIs', badgeUrl: 'https://img.shields.io/badge/REST%20API-005571?style=for-the-badge&logo=rest&logoColor=white' },
];

function Skills() {
  const { texts } = useContext(LanguageContext);

  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>{texts.skills.title}</h1>
      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <img
            key={index}
            src={skill.badgeUrl}
            alt={skill.name}
            title={skill.name}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
