import styles from './AchievementCard.module.css';
import React from 'react';

function AchievementCard({ position, event, issuer, date, description, align, link }) {
  const content = (
    <>
      <h3>{position}</h3>
      <h4>{event}</h4>
      <p className={styles.issuer}>{issuer}</p>
      <p className={styles.date}>{date}</p>
      <p className={styles.description}>{description}</p>
    </>
  );

  return (
    <div className={`${styles.achievementCard} ${styles[align]}`}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

export default AchievementCard;
