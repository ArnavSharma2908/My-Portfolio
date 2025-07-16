import styles from './FooterStyles.module.css';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';

function Footer() {
  const { texts } = useContext(LanguageContext);
  
  return (
    <footer id='footer' className={styles.container}>
      <p>
        {texts.footer.crafted} 💻 <br />
        0️⃣ bugs 🐞. <br />
        ♾️ charm ⚡.
      </p>
    </footer>
  );
}

export default Footer;
