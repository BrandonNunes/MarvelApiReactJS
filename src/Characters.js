import React from 'react'
import styles from './modules/Characters.module.css'

const Charachters = ({result}) => {
    return (
        <section className={styles.heroesContainer}>
           {result.map(res =>{
                return(
                    result?
                    <article key={res.id} >
                         <div className={styles.imageContainer}>
                        <img  src={`${res.thumbnail.path}.${res.thumbnail.extension}`} alt={res.id}/>
                    </div>
                    <p>{res.name}</p>
                    <p>id:{res.id}</p>
                    </article>: 'Loading...'
                   
                )
            })} 
        </section>
    )
}

export default Charachters
