import React from 'react'
import styles from './modules/Navibar.module.css'

function Navibar() {
    return (
        <nav className={styles.navibar}>
            <input type='button' value='Comics'/>
            <input type='button' value='Heroes'/>
            <input type='button' value='Heroe Search'/>
        </nav>
    )
}

export default Navibar
