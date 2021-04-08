import React from 'react'
import styles from './navbar.module.css'
import Logo from '../../Assets/DSI.svg'
import Union from '../../Assets/Union.svg'
import Shuffle from '../../Assets/media/shuffle.svg'
import Mail from '../../Assets/basic/mail.svg'
import Hammenu from '../../Assets/text_align_right.svg'
import {ham_menu_toggle} from '../../Redux/Ham/Ham-actions'
import {connect} from 'react-redux'
const Navbar = (props) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
            <img alt='DSI' src={Logo}/>
            <div className={styles.title}>
                <span style={{letterSpacing:'0.065em'}}>DWIDASA</span>
                <span style={{letterSpacing:'0.015em'}}>SAMSARA</span>
                <span style={{letterSpacing:'-0.05em',color:'#263238'}}>INDONESIA</span>
            </div>
            </div>           
            <div className={styles.options}>
            <div className={styles.option}>Services</div>
            <div className={styles.option}>Product</div>
            <div className={styles.option}>Technology</div>
            <div className={styles.option}>About</div>
            <div className={styles.option}>Client</div>
            <div className={styles.option}>Partner</div>
            </div>
            <div className={styles.icons}>
                <div className={styles.icon}> <img alt='Home' src={Union}/> </div>
                <div className={styles.icon}> <img alt="Email" src={Mail}/> </div>
                <div className={styles.icon}> <img alt='Shuffle' src={Shuffle}/> </div>
            </div>
            <div className={styles.ham} onClick={()=>props.toggler()}><img src={Hammenu} alt='Menu'/></div>
        </div>
    )
}

const mapDispatchtoProps=dispatch=>(
    {
        toggler:()=>dispatch(ham_menu_toggle())
    }
)
export default connect(null,mapDispatchtoProps)(Navbar)
