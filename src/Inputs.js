import React from 'react'
import styles from './modules/Inputs.module.css'

function Inputs({plus, any}) {
    return (
        <div className={styles.inputContainer}>
            <input type='button' value='<<' onClick={()=>any()}/>

            <input type='button' value='>>' onClick={()=>plus()}/>    
        </div>
    )
}

export default Inputs
