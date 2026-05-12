import styles from './Experience.module.css';

const experiences = [
  {
    id: 1,
    company: 'GRUPO FOTO SUL',
    role: 'Estagiário de Design',
    period: 'Junho de 2025 a Outubro de 2025',
    description: 'Design Gráfico Estratégico, Marketing e Publicidade Integrados, Adobe Photoshop, Web Design e Desenvolvimento Web. Visão 360º: compreensão holística sobre a construção de marca e o alcance de resultados.'
  },
  {
    id: 2,
    company: 'ALFASIG SERVIÇOS EM TECNOLOGIA DA INFORMACAO',
    role: 'Suporte de Software',
    period: 'Janeiro de 2025',
    description: 'Suporte técnico a usuários de software de emissão de notas fiscais. Conhecimento da legislação fiscal e procedimentos para emissão correta de notas fiscais eletrônicas. Habilidades de comunicação e atendimento ao cliente.'
  },
  {
    id: 3,
    company: 'Rio Grande Energia (RGE)',
    role: 'Auxiliar Administrativo',
    period: 'Dezembro de 2021 a Dezembro de 2023',
    description: 'Organização de demandas administrativas, Gerenciamento de Estoque, Registro de Folhas Ponto, dentre outros processos.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Experiência Profissional</h2>
        
        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <span className={styles.period}>{exp.period}</span>
                <h3 className={styles.role}>{exp.role}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
