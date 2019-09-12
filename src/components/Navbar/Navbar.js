import React from 'react'
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

let Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={`${styles.menu} ${styles.item}`}>
                <div><NavLink to="/name" activeClassName={styles.active}>NameSurname</NavLink></div>
                <div><NavLink to="/client" activeClassName={styles.active}>ClientsData</NavLink></div>
                <div><NavLink to="/list" activeClassName={styles.active}>ListCars</NavLink></div>
                <div><NavLink to="/owner" activeClassName={styles.active}>Owners</NavLink></div>
            </div>
        </div>
    )
}

export default Navbar;
