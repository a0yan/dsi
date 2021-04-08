import React from 'react'
import styles from './element.module.css'
const element = ({image,heading,text}) => {
    return (
        <div className={styles.element}>
            <img className={styles.image} src={image} alt='element_image'/>
            <h4 className={styles.heading}>{heading}</h4>
            <p className={styles.text}>{text}</p>
            <button className={styles.button}>Read More</button>
        </div>
    )
}

export default element
