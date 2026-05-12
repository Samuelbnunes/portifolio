import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import MouseGlow from './components/MouseGlow/MouseGlow';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <MouseGlow />
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
