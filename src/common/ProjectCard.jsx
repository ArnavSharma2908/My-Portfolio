import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, link, h3, p, align = 'left' }) {
  return (
    <div className={`${styles.projectCard} ${styles[align]}`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {src && <img className={styles.hover} src={src} alt={`${h3} logo`} />}
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
    </div>
  );
}

export default ProjectCard;
