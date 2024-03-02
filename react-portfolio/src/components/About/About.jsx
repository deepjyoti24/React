
// import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>about</h2>
      <div className={styles.content}>
        <img className={styles.aboutImg} src={getImageUrl("about/aboutimg.png")} alt="my about image" />
    
        <ul className={styles.aboutItems}>
            <li className={styles.aboutList}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I am a front-end developer with experience in developing responsive and optimized site</p>
                </div>
            </li>
             <li className={styles.aboutList}>
                <img src={getImageUrl("about/serverIcon.png")} alt="backend icon" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I have experience in developing fast and optimized backend system and APIs </p>
                </div>
            </li>
             <li className={styles.aboutList}>
                <img src={getImageUrl("about/uiIcon.png")} alt="fullstack icon" />
                <div className={styles.aboutItemText}>
                    <h3>Full-Stack Developement</h3>
                    <p>I have exprience in developing fast and robust fullstack webapplication using MERN stack</p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default About;
