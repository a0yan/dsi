import React from 'react'
import styles from './topsection.module.css'
import Device from '../../Assets/devices/pana.svg'
const topsection = () => {
    return (
        <div className={styles.top_section}>
            <div className={styles.text}>
                <h3 className={styles.heading}>Making the most of the ever-growing <span style={{color:'#FF575F',letterSpacing:'0.1em',fontWeight:'bold'}}>Information Technology</span></h3>
                <p>Managed by a team of professional experts with extensive experience and impressive track records</p>
            <button className={styles.button}>Read More</button>
            </div>
            <div className={styles.container}>
                <img className={styles.image}  alt='Image_1' src={Device}/>
            </div>
            
        </div>
    )
}

export default topsection
