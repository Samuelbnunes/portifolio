import styles from './Education.module.css';
import { BookOpen, Award, FileText, Download } from 'lucide-react';

const courses = [
  {
    title: 'Qualificação em Engenharia de Software',
    institution: 'Atitus (2025/2)',
    description: 'Foco em design e engenharia de processos, otimização de bancos de dados e paradigmas de linguagens de programação (400h).'
  },
  {
    title: 'Qualificação em Desen. Full Stack',
    institution: 'Atitus (2025/1)',
    description: 'Organização e abstração na programação, User Experience (UX) e desenvolvimento de interfaces Front-end (400h).'
  },
  {
    title: 'Arquitetura de Soluções em Cloud',
    institution: 'Atitus (2024/2)',
    description: 'Capacitação técnica em Cyber Security, Cloud Computing e desenvolvimento de competências (400h).'
  },
  {
    title: 'Carreira Profissionalizante em React',
    institution: 'Alura',
    description: 'Desenvolvimento Front-End, focado na construção de aplicações modernas e escaláveis utilizando React.'
  }
];

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Escolaridade e Cursos</h2>

        <div className={styles.grid}>
          <div className={styles.formalEducation}>
            <h3 className={styles.subTitle}>
              <BookOpen className={styles.icon} /> Formação Acadêmica
            </h3>
            <div className={styles.card}>
              <h4>Atitus Educação</h4>
              <span>Em andamento</span>
              <p>Ensino Superior - Ciências da Computação</p>
            </div>

            <div className={styles.resumeSection}>
              <h3 className={styles.subTitle}>
                <FileText className={styles.icon} /> Currículo Profissional
              </h3>
              <div className={styles.resumeCard}>
                <p>
                  Acesse meu currículo completo em PDF para conferir minha trajetória detalhada, certificações e histórico profissional.
                </p>
                <a 
                  href={`${import.meta.env.BASE_URL}docs/curriculo_profissional.pdf`} 
                  download="Samuel_Nunes_Curriculo.pdf"
                  className={styles.downloadBtn}
                >
                  <Download size={20} />
                  Baixar Currículo
                </a>
              </div>
            </div>
          </div>

          <div className={styles.courses}>
            <h3 className={styles.subTitle}>
              <Award className={styles.icon} /> Aprimoramentos Recentes
            </h3>
            <div className={styles.coursesGrid}>
              {courses.map((course, index) => (
                <div key={index} className={styles.courseCard}>
                  <h4>{course.title}</h4>
                  <span className={styles.institution}>{course.institution}</span>
                  <p>{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
