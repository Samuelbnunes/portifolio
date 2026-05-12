import styles from './Footer.module.css';
import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.contactInfo}>
            <h3>Vamos Conversar?</h3>
            <p>Estou em busca de novas oportunidades e sempre aberto a trocar ideias sobre tecnologia.</p>

            <div className={styles.contactDetails}>
              <a href="mailto:samuelbarquel@gmail.com" className={styles.contactItem}>
                <Mail size={20} />
                <span>samuelbarquel@gmail.com</span>
              </a>
              <a href="tel:+5554999685224" className={styles.contactItem}>
                <Phone size={20} />
                <span>(54) 99968-5224</span>
              </a>
            </div>
          </div>

          <div className={styles.social}>
            <h3>Redes Sociais</h3>
            <div className={styles.socialIcons}>
              <a href="https://www.linkedin.com/in/samuelbnunes" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/samuelbnunes" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://www.instagram.com/samuel.bnunes" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {currentYear} Samuel Barquel Nunes. Todos os direitos reservados.</p>
          <p>Feito com React, Vite e muito café kkkk</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
