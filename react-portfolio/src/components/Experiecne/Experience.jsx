// import React from 'react'
import history from"../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <section className={styles.container} id="experience">
        <h2  className={styles.title}>experience</h2>
      <div  className={styles.content}>
        <img className={styles.aboutImg} src={getImageUrl("history/coder.png")} alt="my about image" />
        <ul  className={styles.history}>
            {
              history.map((data, id) => {
                return (
                    <li key={id}  className={styles.historyItem}>
                        
                        <img src={getImageUrl(data.imageSrc)} alt="exprience image" />
                        
                        <div  className={styles.historyItemDetails}>
                            <h3>{`${data.role}, ${data.organisation}`}</h3>
                            <p>{`${data.startDate} - ${data.endDate}`}</p>
                            <ul>
                                {data.experiences.map((val, id) => {
                                    return (
                                        <li key={id}> {val} </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </li>
                )
              })
            }
        </ul>
      </div>
    </section>
  )
}

export default Experience;
