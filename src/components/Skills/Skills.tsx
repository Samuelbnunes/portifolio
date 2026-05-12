import styles from './Skills.module.css';
import { Code2, Server, Terminal, Database, HeadphonesIcon, Layout } from 'lucide-react';

const skillCategories = [
  {
    title: 'Front-End & Mobile',
    icon: <Layout className={styles.icon} />,
    skills: ['React.js', 'React Native', 'JavaScript', 'HTML/CSS', 'Figma', 'Web Design']
  },
  {
    title: 'Back-End & Linguagens',
    icon: <Code2 className={styles.icon} />,
    skills: ['Python', 'Java', 'Postman', 'XML']
  },
  {
    title: 'Ferramentas & DevOps',
    icon: <Terminal className={styles.icon} />,
    skills: ['Docker', 'AWS CloudFormation', 'Git / GitHub', 'Trello', 'Kanban']
  },
  {
    title: 'Dados e Análise',
    icon: <Database className={styles.icon} />,
    skills: ['SQL', 'PostgreSQL', 'Pandas (Python)', 'CSV']
  },
  {
    title: 'Suporte & Sistemas',
    icon: <HeadphonesIcon className={styles.icon} />,
    skills: ['Suporte Técnico', 'Movidesk', 'SAP CRM', 'Emissão de NF-e']
  },
  {
    title: 'Soft Skills',
    icon: <Server className={styles.icon} />,
    skills: ['Resolução de Problemas', 'Comunicação Assertiva', 'Trabalho em Equipe', 'Flexibilidade', 'Inteligência Emocional']
  }
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Habilidades</h2>
        
        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.cardHeader}>
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className={styles.skillTags}>
                {category.skills.map((skill, idx) => (
                  <span key={idx} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
