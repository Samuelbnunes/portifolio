import { Github, Linkedin, Instagram } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroText}>
          <span className={styles.greeting}>Olá, eu sou</span>
          <h1 className={styles.name}>Samuel Barquel Nunes</h1>
          <h2 className={styles.role}>Desenvolvedor & Estudante de Ciência da Computação</h2>
          <p className={styles.description}>
            Tenho uma sólida base teórica e prática em desenvolvimento de software.
            Possuo experiência em todo o ciclo de criação de soluções digitais, desde o design de interfaces até
            a implementação de arquiteturas em nuvem e bancos de dados.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryBtn}>Entrar em contato</a>
            <div className={styles.socialLinks}>
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

        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            {/* Foto de perfil existente no diretório public/assets após configuração */}
            <img src="./assets/img/foto_perfil.jpg" alt="Samuel Barquel Nunes" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
