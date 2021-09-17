import React from 'react'
import styles from './modules/Navibar.module.css'

function Navibar() {
    return (
        <nav className={styles.navibar}>
            <input type='button' value='Comics'/>
            <input type='button' value='Chracters'/>
            <input type='button' value='Chracters Search'/>
        </nav>
    )
}

export default Navibar
