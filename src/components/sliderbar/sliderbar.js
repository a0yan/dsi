import React from 'react'
import styles from './sliderbar.module.css'
import {connect} from 'react-redux'
const Sliderbar = (props) => {
    const classes=[styles.sliderbar]
    if(props.toggle){
        classes.push(styles.active)
    }
    console.log(classes);
    return (
        <div>
            <div className={classes.join(' ')}>
                <div className={styles.option}>Services</div>
                <div className={styles.option}>Product</div>
                <div className={styles.option}>Technology</div>
                <div className={styles.option}>About</div>
                <div className={styles.option}>Client</div>
                <div className={styles.option}>Partner</div>
            </div>
        </div>
        )
}
const mapStatetoProps=state=>({
    toggle:state.ham
  })

export default connect(mapStatetoProps)(Sliderbar)
