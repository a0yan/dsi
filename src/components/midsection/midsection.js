import React from 'react'
import styles from './midsectiom.module.css'
import BrowserStats from '../../Assets/browser-stats/pana.svg'
const midsection = () => {
    return (
        <div className={styles.mid_section}>
            <div className={styles.container}>
                <img className={styles.image} src={BrowserStats} alt='Wallpaper2' />
            </div>
            <div className={styles.text}>
                <h3 className={styles.heading}>Welcome to <span style={{ color: '#FF575F', fontSize: '28px'}}>Dwidasa Samsara Indonesia (DSI)</span></h3>
                <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span style={{color:'#FF575F'}} >DSI’s</span> distinct front-end based application concept.</p>
                <p>Managed by a team of professional experts with extensive experience and impressive track records, <span style={{color:'#FF575F'}} >DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
            </div>
        </div>
    )
}

export default midsection
