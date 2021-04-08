import React from 'react'
import styles from './bottomsection.module.css'
import Element from './sectionelement/element'
import Image1 from '../../Assets/product-description 1.svg'
import Image2 from '../../Assets/verified 1.svg'
import Image3 from '../../Assets/cogwheel 1.svg'
const bottomsection = () => {
    return (
        <div className={styles.bottom_section}>
            <h2 style={{color:'black'}}>Product and Service</h2>
            <div className={styles.elements}>
                <Element heading={'Our Product'} image={Image1} text={'Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.'}/>
                <Element heading={'Our Service'} image={Image2} text={'DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.'}/>
                <Element heading={'Our Technology'} image={Image3} text={'First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.'}/>
            </div>
        </div>
    )
}

export default bottomsection
