import React from 'react'
import styles from './contactus.module.css'
import Logo from '../../Assets/DSI.svg'
import Image1 from '../../Assets/image 7.svg'
import Image2 from '../../Assets/image 9.svg'
import Image3 from '../../Assets/image 10.svg'
import Image4 from '../../Assets/image 11.svg'
import Image6 from '../../Assets/image 13.svg'
import Image5 from '../../Assets/image 14.svg'
const contactus = () => {
    return (
        <div className={styles.contact_us}>
        <div className={styles.logo_container}>
        <div className={styles.logo}>
            <img alt='DSI' src={Logo}/>
            <div className={styles.title}>
                <span style={{letterSpacing:'0.065em'}}>DWIDASA</span>
                <span style={{letterSpacing:'0.015em'}}>SAMSARA</span>
                <span style={{letterSpacing:'-0.05em',color:'#263238'}}>INDONESIA</span>
            </div>
            </div>
            <div className={styles.address}>
                <span style={{fontWeight:'bold',color:'black'}}>PT Dwidasa Samsara Indonesia</span><br/>
                <span>Ruko Jalur Sutera 29A No. 53<br/>Alam Sutera Serpong, Tangerang 15323</span>

            </div>
            </div>
        <div className={styles.contact}>
            <h3>Contact</h3>
            <span>Phone : +62.21.5314.1135</span><br/>
            <span>Fax : +62.21.5314.1135</span><br/>
            <span>Email : community@dwidasa.com</span><br/>
        </div>
        <div className={styles.contain}>
            <img src={Image1} alt='Image1' />
            <img src={Image2} alt='Image2'/>
            <img src={Image3} alt='Image3'/>
            <img src={Image4} alt='Image4'/>
            <img src={Image5} alt='Image5'/>
            <img src={Image6} alt='Image6'/>
        </div>
        </div>
    )
}

export default contactus
