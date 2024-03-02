// import React from 'react'
import skills from"../../data/skills.json";
// import history from"../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Skill.module.css";

export default function Skills() {
  return (
    <section className={styles.container} id="skills" >
        <h2 className={styles.title}>Skills</h2>
         <div className={styles.content} >
            <div  className={styles.skills}>
            {
                skills.map( 
                    (skill, id) => {
                        return (
                        <div key={id}  className={styles.skill}>
                           <div  className={styles.skillImagContainer}>
                             <img className={styles.logo} src={getImageUrl(skill.imageSrc)} alt="skills image" />
                           </div>
                           <p>{skill.title}</p>
                        </div>
                        )
                    }
                )
            }
        </div>
         </div>
    </section>
  )
}
