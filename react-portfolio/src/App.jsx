import styles from "./App.module.css";
import About from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import Experience from "./components/Experiecne/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Project/Projects";
import Skills from "./components/Skills/Skills";

function App() {


  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;
 