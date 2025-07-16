import styles from './CarvalhoStyles.module.css';
import spideygab from '../../assets/spideygab.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';
import flagPT from '../../assets/brasil.png';
import flagEN from '../../assets/england.png';
import flagFR from '../../assets/france.png';

function Carvalho() {
  const { theme, toggleTheme } = useTheme();
  const { texts, toggleLanguage, nextFlag } = useContext(LanguageContext);
  const themeIcon = theme === 'light' ? sun : moon;
  const flagIcons = { en: flagEN, hi: flagPT, kn: flagFR };
  const nextFlagIcon = flagIcons[nextFlag];

  const connectBadges = [
    { href: 'mailto:arnavsharma2908@gmail.com', src: 'https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white', alt: 'Gmail', width: 85 },
    { href: 'https://www.linkedin.com/in/arnav-sharma-93a9bb269/', src: 'https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white', alt: 'LinkedIn', width: 90 },
    { href: 'https://github.com/ArnavSharma2908/', src: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white', alt: 'GitHub', width: 93 },
    { href: 'https://ratings.fide.com/profile/88125041', src: 'https://img.shields.io/badge/FIDE-88125041-black?style=for-the-badge&logo=chess-dot-com', alt: 'FIDE', width: 136 },
    { href: 'https://www.instagram.com/arnav__yahoo/', src: 'https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white', alt: 'Instagram', width: 120 },
  ];

  const challengeBadges = [
    { href: 'https://www.chess.com/play/online/new?opponent=arnavsharma2908', src: 'https://img.shields.io/badge/Chess.com-Play-green?style=for-the-badge&logo=chessdotcom&logoColor=white', alt: 'Chess.com', width: 130 },
    { href: 'https://lichess.org/?user=ArnavSharma#friend', src: 'https://img.shields.io/badge/Lichess-Challenge-black?style=for-the-badge&logo=lichess&logoColor=white', alt: 'Lichess', width: 150 },
  ];

  return (
    <section id="carvalho" className={styles.container} style={{ paddingTop: '2rem' }}>
      {/* Profile & Controls */}
      <div className={styles.profileSection}>
        <div className={styles.colorModeContainer}>
          <img className={styles.carvalho} src={spideygab} alt="Profile Picture of Arnav" />
          <div className={styles.iconWrapper}>
            <img className={styles.colorMode} src={themeIcon} alt="Toggle theme" onClick={toggleTheme} />
            <img className={styles.languageToggle} src={nextFlagIcon} alt="Toggle language" onClick={toggleLanguage} />
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className={styles.info}>
        <header className={styles.header} style={{ marginTop: '1rem' }}>
          <h1 className={styles.name}>{texts.header.name}</h1>
          <h3 className={styles.role}>
            {texts.header.role.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h3>
        </header>

        <section className={styles.badgesSection}>
          <h3 className={styles.sectionTitle}>{texts.header.connect}</h3>
          <div className={styles.badgeRow}>
            {connectBadges.map((badge) => (
              <a key={badge.alt} href={badge.href} target="_blank" rel="noopener noreferrer">
                <img src={badge.src} alt={badge.alt} width={badge.width} />
              </a>
            ))}
          </div>
        </section>

        <section className={styles.badgesSection}>
          <h3 className={styles.sectionTitle}>{texts.header.challenge}</h3>
          <div className={styles.badgeRow}>
            {challengeBadges.map((badge) => (
              <a key={badge.alt} href={badge.href} target="_blank" rel="noopener noreferrer">
                <img src={badge.src} alt={badge.alt} width={badge.width} />
              </a>
            ))}
          </div>
        </section>

        <p className={styles.description}>{texts.header.description}</p>

        <a
          href="https://github.com/ArnavSharma2908/ArnavSharma2908/blob/main/ARNAV_SHARMA-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hover">{texts.header.resume}</button>
        </a>
      </div>
    </section>
  );
}

export default Carvalho;
