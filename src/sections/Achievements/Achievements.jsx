import styles from './AchievementsStyles.module.css';
import AchievementCard from '../../common/AchievementCard';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';

function Achievements() {
  const { texts } = useContext(LanguageContext);

  const achievementList = [
    {
      position: texts.achievements.cp.position,
      event: texts.achievements.cp.event,
      issuer: texts.achievements.cp.issuer,
      date: texts.achievements.cp.date,
      description: texts.achievements.cp.description,
      link: 'https://www.linkedin.com/posts/arnav-sharma-93a9bb269_competitiveprogramming-shaastra2025-iitmadras-activity-7281984629857796097-9lMM/'
    }
  ];

  return (
    <section id="achievements" className={styles.container}>
      <h1 className="sectionTitle">{texts.achievements.title}</h1>
      <div className={styles.achievementsContainer}>
        {achievementList.map((achievement, index) => (
          <AchievementCard
            key={index}
            position={achievement.position}
            event={achievement.event}
            issuer={achievement.issuer}
            date={achievement.date}
            description={achievement.description}
            link={achievement.link}
            align={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  );
}

export default Achievements;
