import React from 'react'
import styles from './Header.module.css'

let Header = () =>{
    return(
        <div className={styles.header}>
        <div className={styles.heading}><h1>База данных клиентов СТО</h1></div>
        </div>
    )
}

export default Header;